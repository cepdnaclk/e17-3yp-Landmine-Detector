
 
#include <SoftwareSerial.h>


static const int RXPin=4, TXPin=3;
static const uint32_t GPSBaud = 9600; 

// The serial connection to the GPS module
SoftwareSerial ss(RXPin, TXPin);


void setup(){
  Serial.begin(GPSBaud);
  ss.begin(GPSBaud);
  
}

void loop(){
  while (ss.available() > 0){
    // get the byte data from the GPS
    byte gpsData = ss.read();
    Serial.write(gpsData);
    
  }
  
}
