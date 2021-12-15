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
#define MPU_ADDRESS 0x68

//esp32 hs only 2 i2c port 0 & 1
//3 UART controllers
//

void i2c_init_SENSOR(){
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

void uart0_init(){

	const int uart_num = UART_NUM_0;
	uart_config_t uart_config = {
		.baud_rate = 9600,
		.data_bits = UART_DATA_8_BITS,
		.parity = UART_PARITY_DISABLE,
		.stop_bits = UART_STOP_BITS_1,
		.flow_ctrl = UART_HW_FLOWVTRL_CTS_RTS,
		.rx_flow_ctrl_thresh = 122,
	};
	// Configure UART parameters
	ESP_ERROR_CHECK(uart_param_config(uart_num, &uart_config));

	ESP_ERROR_CHECK(uart_set_pin(uart_num,UART_PIN_NO_CHANGE,UART_PIN_NO_CHANGE,18,19));

	//Setup UART buffered IO with event queue
	const int uart_buffer_size = (1024 * 2);
	QueueHandle_t uart_queue;
	//Install UART driver using an event queue 
	ESP_ERROR_CHECK(uart_driver_install(uart_num,uart_buffer_size,uart_buffer_size, 10, &uart_queue,0));
}


void uart0_read(){

	//Read data from UART
	
	const int uart_num = UART_NUM_0;
	uint8_t data[128];
	int length = 0;
	ESP_ERROR_CHECK(uart_get_buffered_data_len(uart_num, (size_t*)&length));
	length = uart_read_bytes(uart_num,data,length,100);

	for(int i=0;i<128;i++){
		printf("%x",data[i]);
	}
}



//task to send data to motor controller
void task_send_msg(void *ignore){
	i2c_cmd_handle_t cmd;

	uint8_t data = 'b';

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

void task_read_MPU(void *ignore){
	i2c_cmd_handle_t  cmd;

	uint8_t data;

	for(uint8_t i=0;i<128;i++){
		cmd = i2c_cmd_link_create();
		i2c_master_start(cmd);
		i2c_master_write_byte(cmd, (MPU_ADDRESS << 1) | I2C_MASTER_READ,true);
		i2c_master_read_byte(cmd ,&data, true);
		i2c_master_stop(cmd);
		i2c_master_cmd_begin(I2C_NUM_0, cmd , 10/portTICK_PERIOD_MS);
		i2c_cmd_link_delete(cmd);

		printf("%c",data);
	}

	vTaskDelete(NULL);


}

void app_main(void)
{
	i2c_init_SENSOR();

	gpio_reset_pin(BLINK_GPIO);

	gpio_set_direction(BLINK_GPIO, GPIO_MODE_OUTPUT);


	while(1){

		printf("Hello world!\n");

		xTaskCreate(&task_read_MPU,"receive orientation", 2048,NULL,6,NULL);
		printf("%c\n",I2C_NUM_MAX);

		xTaskCreate(&task_send_msg, "send message", 2048, NULL, 6, NULL);

		// Blink off
		gpio_set_level(BLINK_GPIO, 0);
		vTaskDelay(500 / portTICK_PERIOD_MS);

		//Blink on
		gpio_set_level(BLINK_GPIO, 1);
		vTaskDelay(500 / portTICK_PERIOD_MS);

	}
	
}
