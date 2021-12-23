#include <stdio.h>

#include "esp_err.h"
#include "esp_log.h"

#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

#include "driver/gpio.h"
#include "driver/i2c.h"
#include "driver/uart.h"

#define BLINK_GPIO GPIO_NUM_2

#define I2C_MASTER_SDA_IO GPIO_NUM_21
#define I2C_MASTER_SCL_IO GPIO_NUM_22
#define I2C_MASTER_FREQ_HZ 400000

#define ATMEL_ADDRESS 0x09
#define MPU_ADDRESS 0x68

#define ECHO_TEST_TXD 4 //(CONFIG_EXAMPLE_UART_TXD)
#define ECHO_TEST_RXD 5 //(CONFIG_EXAMPLE_UART_RXD)
#define ECHO_TEST_RTS (UART_PIN_NO_CHANGE)
#define ECHO_TEST_CTS (UART_PIN_NO_CHANGE)

#define ECHO_UART_PORT_NUM      2	// (CONFIG_EXAMPLE_UART_PORT_NUM)
#define ECHO_UART_BAUD_RATE     9600	//(CONFIG_EXAMPLE_UART_BAUD_RATE)
#define ECHO_TASK_STACK_SIZE    2048    //(CONFIG_EXAMPLE_TASK_STACK_SIZE)

#define BUF_SIZE (1024)



//esp32 hs only 2 i2c port 0 & 1
//3 UART controllers

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

static void echo_task(void *arg)
{
    /* Configure parameters of an UART driver,
     * communication pins and install the driver */
    uart_config_t uart_config = {
        .baud_rate = ECHO_UART_BAUD_RATE,
        .data_bits = UART_DATA_8_BITS,
        .parity    = UART_PARITY_DISABLE,
        .stop_bits = UART_STOP_BITS_1,
        .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        .source_clk = UART_SCLK_APB,
    };
    int intr_alloc_flags = 0;

#if CONFIG_UART_ISR_IN_IRAM
    intr_alloc_flags = ESP_INTR_FLAG_IRAM;
#endif

    ESP_ERROR_CHECK(uart_driver_install(ECHO_UART_PORT_NUM, BUF_SIZE * 2, 0, 0, NULL, intr_alloc_flags));
    ESP_ERROR_CHECK(uart_param_config(ECHO_UART_PORT_NUM, &uart_config));
    ESP_ERROR_CHECK(uart_set_pin(ECHO_UART_PORT_NUM, ECHO_TEST_TXD, ECHO_TEST_RXD, ECHO_TEST_RTS, ECHO_TEST_CTS));

    // Configure a temporary buffer for the incoming data
    uint8_t *data = (uint8_t *) malloc(BUF_SIZE);

    while (1) {
        // Read data from the UART
        int len = uart_read_bytes(ECHO_UART_PORT_NUM, data, BUF_SIZE, 20 / portTICK_RATE_MS);

	for(int i=0;i<BUF_SIZE;i++)
		printf("%c",data[i]);

	printf("%d",len);
        // Write data back to the UART
	uart_write_bytes(ECHO_UART_PORT_NUM, (const char *) data, len);
    }

    vTaskDelete(NULL);
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

	xTaskCreate(echo_task, "uart_echo_task", ECHO_TASK_STACK_SIZE, NULL, 10, NULL);


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
