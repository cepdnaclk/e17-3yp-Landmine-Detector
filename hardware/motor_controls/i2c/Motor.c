/*
 * Author : Akilax0
 *
 * Motor Driver : L298N
 *
 * Current status : 2 motor testing
 *
 * */

#include <avr/io.h>
#include <util/delay.h>

#define BLINK_DELAY_MS 2000




unsigned char uart_recv(){
	while((UCSRA&(1<<RXC)) ==0 );
	//wait till 8-bit of a char receive
	return UDR;
}

void uart_transmit(unsigned char data){

	while(!(UCSRA & (1<<UDRE)));
	//wait while register free from data
	UDR = data;

}







void TWIInit(void){

	//set SCL to 400kHz
	TWSR = 0x00;
	TWBR = 0x0c;

	//enable TWI
	TWCR = (1<<TWEN);
}

void TWIStart(void){

	TWCR = (1<<TWINT) | (1<<TWSTA) | (1<<TWEN);
	while((TWCR & (1<<TWINT)) == 0);
}
//send stop signal
void TWIStop(void){

	TWCR = (1<<TWINT) | (1<<TWSTO) | (1<<TWEN);

}

void TWIWrite(uint8_t u8data){
	TWDR = u8data;
	TWCR = (1<<TWINT) | (1<<TWEN);
	while((TWCR & (1<<TWINT))==0);
}

uint8_t TWIReadACK(void){
	TWCR = (1<<TWINT) | (1<<TWEN) | (1<<TWEA);
	while((TWCR & (1<<TWINT)) == 0);
	return TWDR;
}
//read byte with NACK
uint8_t TWIReadNACK(void){

	TWCR = (1<<TWINT) | (1<<TWEN);
	while((TWCR & (1<<TWINT))==0);
	return TWDR;
}

uint8_t TWIGetStatus(void){
	uint8_t status;
	//mask status
	status = TWSR & 0xF8;
	return status;
}

uint8_t EEWriteByte(uint16_t u16addr, uint8_t u8data){
	TWIStart();
	if(TWIGetStatus() != 0x08)
		return ERROR;
	//select device and send A2 A1 A0 address bits
	TWIWrite((EEDEVADR) | (uint8_t)((u16addr & 0x0700)>>7));
	if(TWIGetStatus() != 0x18)
		return ERROR;
	//send the rest of address
	TWIWrite((uint8_t)(u16addr));
	if(TWIGetStatus() != 0x28)
		return ERROR;
	//write byte to eeprom
	TWIWrite(u8data);
	if (TWIGetStatus() != 0x28)
		return ERROR;
	TWIStop();
	return SUCCESS;

}

uint8_t EEReadByte(uint16_t u16addr, uint8_t *u8data)
{
    //uint8_t databyte;
    TWIStart();
    if (TWIGetStatus() != 0x08)
        return ERROR;
    //select device and send A2 A1 A0 address bits
    TWIWrite((EEDEVADR)|((uint8_t)((u16addr & 0x0700)>>7)));
    if (TWIGetStatus() != 0x18)
        return ERROR;
    //send the rest of address
    TWIWrite((uint8_t)(u16addr));
    if (TWIGetStatus() != 0x28)
        return ERROR;
    //send start
    TWIStart();
    if (TWIGetStatus() != 0x10)
        return ERROR;
    //select devise and send read bit
    TWIWrite((EEDEVADR)|((uint8_t)((u16addr & 0x0700)>>7))|1);
    if (TWIGetStatus() != 0x40)
        return ERROR;
    *u8data = TWIReadNACK();
    if (TWIGetStatus() != 0x58)
        return ERROR;
    TWIStop();
    return SUCCESS;
}



int main (void){

	//PORTD pins for inputs
	int IN4 = 0b00100000;
	int IN3 = 0b00010000;
	int IN2 = 0b00001000;
	int IN1 = 0b00000100;

	int LED = 0b00100000;
	//PORTD PIN definitions
	DDRD = DDRD | (IN1|IN2|IN3|IN4);

	DDRB = DDRB | LED;


	TWIInit();


	//UART initialize
	UBRRH = 0x00;
	UBRRL = 0x4d;
	UCSRB=(1<<RXCIE) | (1<<RXEN) | (1<<TXEN);
	UCSRC=(1<<URSEL) | (1<<UCSZ1)| (1<<UCSZ0);




	while(1){
	
		unsigned char data;

		EEReadByte(&data);

		uart_transmit(data);


		//Motor 1 (IN1 | IN2)
		PORTD = PORTD | (IN1);
		PORTD = PORTD & ~(IN2);

		PORTB = PORTB | LED;
		_delay_ms(BLINK_DELAY_MS);

		//Motor 2 (IN3 | IN4)
		PORTD = PORTD | ~(IN3);
		PORTD = PORTD & (IN4);

		PORTB = PORTB & ~LED;
		_delay_ms(BLINK_DELAY_MS);

	}
	return 0;
}





