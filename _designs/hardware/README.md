# HARDWARE COMPONENTS

- ESP32 https://www.etechnophiles.com/esp32-dev-board-pinout-specifications-datasheet-and-schematic/
- NEO6M
- SIM900A
- GYRO & ACCELEROMETER
- MOTOR (100RPM HIGH TORQUE)
- DFRobot 65mm Rubber Wheel

## NEO6M

Basically, GPS (Global Positioning System) receivers work by figuring out how far they are from a number of satellites. They are pre-programmed to know where the GPS satellites are at any given time and then calculate the location on Earth using the well known Trilateration process. The more satellites there are above the horizon the more accurately your GPS unit can determine where you are

### Characteristics:
- Power supply: 2.7V to 3.6V
- Default baud rate: 9600 bps
- Current consumption: 45mA.
- Up to 22 satellites on 50 channels tracking
- Up to 5 location updates a second with 2.5m Horizontal position accuracy.
- Navigation Sensitivity: Up to -161 dBm
- Navigation Update Rate: 1Hz
Comes with an external antenna and built-in EEPROM.
- Interface: RS232 TTL with Serial Baud Rate 4800-230400 (default 9600)
- Operating Temperature: -40°C ~ 85°C
- Communication Protocol: UBX Binary, RTCM and Standard - NMEA output: To know what each data field means in each of these sentences.

The GPS module will be powered with 3.3V power supply. It communicates with the ESP32 via serial communication using the TX and RX pins available on the 4 pins header.


## SIM900A

GSM stands for Global System for Mobile Communications and is the global standard for mobile communications.

GPRS stands for General Packet Radio Service. GPRS is a mobile service on the 2G and 3G cellular communication.

Ensure you have coverage on a GSM 850 MHz, GSM 900 MHz, DCS 1800 MHz or PCS 1900 MHz network. GSM means -> 2G.

It is advisable to use a 5V power supply that can provide 2A. It can also be powered with 9V 1A, or 12V 1A.

### Characteristics:
- Compatible with Arduino and clones
- Based on SIM900 module from SIMCOM
- Allows you to send SMS, MMS, GPRS and Audio via UART using AT commands.
- It has 12 GPIOs, 2 PWMs and buit-in ADC of the SIM900 module
- Quad Band: 850; 900; 1800 and 1900 MHZ, so it should work in all countries with GSM (2G) networks
- Control via AT commands
- Supports RTC (real time clock)

<!-- #it has a holder for a 3V CR1220 battery at the back -->


## MOTORS + L293D

100 RPM 12V Gear motors used for navigation
L298N can handle upto 3V at 35V, allowing us to drive two DC motors simultanously.

You can control the DC motor speed by applying a PWM signal to the enable pin of the L298N motor driver. The speed will be proportional to the duty cycle.

To use PWM,

Ex:- generating a signal of 30000 Hz on channel 0 with a 8-bit resolution. We start with a duty cycle of 200 (you can set a duty cycle value from 0 to 255).


### Characteristics:
- +12V: The +12V terminal is where you should connect your power supply
- GND: power supply GND
- +5V: provide 5V if jumper is removed. Acts as a 5V output if jumper is in place
- Jumper: jumper in place – uses the motors power supply to power up the chip. Jumper removed: you need to provide 5V to the +5V terminal. If you supply more than 12V, you should remove the jumper


<!-- #it has a holder for a 3V CR1220 battery at the back -->

