/*
 *
 *
 * Author : Akilax0
 *
 * Motor Driver : L298N
 *
 * Current status : 2 motor testing
 *
 *
 *
 * */

#include <avr/io.h>
#include <util/delay.h>


#define BLINK_DELAY_MS 2000
int main (void){

	//PORTD pins for inputs
	int IN1 = 0b00001000;
	int IN2 = 0b00000100;
	int IN3 = 0b00000010;
	int IN4 = 0b00000001;

	DDRD = DDRD | (IN1|IN2|IN3|IN4);

	while(1){

		//Motor 1 (IN1 | IN2)
		PORTD = PORTD | (IN1);
		PORTD = PORTD & ~(IN2);
		_delay_ms(BLINK_DELAY_MS);
		PORTD = PORTD | (IN1);
		PORTD = PORTD | (IN2);
		_delay_ms(500);

		//Motor 2 (IN3 | IN4)
		PORTD = PORTD | (IN3);
		PORTD = PORTD & ~(IN4);
		_delay_ms(BLINK_DELAY_MS);

	}
	return 0;
}
