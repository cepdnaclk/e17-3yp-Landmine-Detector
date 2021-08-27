#include<Wire.h>

#define SLAVE_ADDR 9 
#define ANSWERSIZE  5

void setup(){
  Wire.begin();

  Serial.begin(9600);
  Serial.println("I2C Master Demo");
}

void loop(){
  delay(50);
  Serial.println("Write data to slave");

  Wire.beginTransmission(SLAVE_ADDR);
  Wire.write(0);
  Wire.endTransmission();

  Serial.println("Receive data");

  String response = "" ;

  while(Wire.available()){
    char b = Wire.read();
    response += b;
  }

  Serial.println(response);
}
