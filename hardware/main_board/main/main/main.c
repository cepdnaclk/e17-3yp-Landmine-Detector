#include <stdio.h>

#include "esp_err.h"
#include "esp_log.h"

#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

#include "driver/gpio.h"
#include "driver/i2c.h"

#define BLINK_GPIO GPIO_NUM_2

#define I2C_MASTER_SDA_IO GPIO_NUM_21
#define I2C_MASTER_SCL_IO GPIO_NUM_22
#define I2C_MASTER_FREQ_HZ 400000

#define ATMEL_ADDRESS 0x09

void i2c_init(){
	/*int i2c_master_port = 0;*/

	i2c_config_t conf = {
		.mode = I2C_MODE_MASTER,		//slave or master mode
		.sda_io_num = I2C_MASTER_SDA_IO,	
		.sda_pullup_en = GPIO_PULLUP_ENABLE,	//enable internal pullups
		.scl_io_num = I2C_MASTER_SCL_IO,
		.scl_pullup_en = GPIO_PULLUP_ENABLE,
		.master.clk_speed = I2C_MASTER_FREQ_HZ,	//I2C clock speed
	};
	i2c_param_config(I2C_NUM_0,&conf);
	//i2c_port_num, mode, receive_buffer_size(slave), sending_buffer_sizw(master),Flags used to allocate interrupt.
	i2c_driver_install(I2C_NUM_0, I2C_MODE_MASTER,0,0,0);	

}

void task_send_msg(void *ignore){
	i2c_cmd_handle_t cmd;

	char data = 'b';
	uint8_t msg[128];
	for(uint8_t i=0;i<8;i++){
		cmd = i2c_cmd_link_create();
		i2c_master_start(cmd);
		i2c_master_write_byte(cmd, (ATMEL_ADDRESS << 1) | I2C_MASTER_WRITE ,true);
		i2c_master_write_byte(cmd ,data, true);
		i2c_master_stop(cmd);
		i2c_master_cmd_begin(I2C_NUM_0, cmd , 10/portTICK_PERIOD_MS);
		i2c_cmd_link_delete(cmd);

	}

	vTaskDelete(NULL);

}


void app_main(void)
{
	i2c_init();

	gpio_reset_pin(BLINK_GPIO);

	gpio_set_direction(BLINK_GPIO, GPIO_MODE_OUTPUT);

	

	while(1){

		xTaskCreate(&task_send_msg, "send message", 2048, NULL, 6, NULL);

		// Blink off
		gpio_set_level(BLINK_GPIO, 0);
		vTaskDelay(500 / portTICK_PERIOD_MS);

		//Blink on
		gpio_set_level(BLINK_GPIO, 1);
		vTaskDelay(500 / portTICK_PERIOD_MS);

	}
	
}
