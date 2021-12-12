#AVR programming though avr-gcc 
CC = avr-gcc

# compiler flags:
#  -g     - this flag adds debugging information to the executable file
#  -Wall  - this flag is used to turn on most compiler warnings
CFLAGS  = -Os -DF_CPU=16000000UL -mmcu=atmega328p 

# The build target 
TARGET = Motor

all: $(TARGET)

$(TARGET): $(TARGET).c
	$(CC) $(CFLAGS) $(TARGET).c -o a &&   avr-objcopy -O ihex -R .eeprom a a.hex && avrdude -F -V -c arduino -p ATMEGA328P -P /dev/ttyACM0 -b 115200 -U flash:w:a.hex


clean:
	$(RM) $(TARGET) $(TARGET).hex


