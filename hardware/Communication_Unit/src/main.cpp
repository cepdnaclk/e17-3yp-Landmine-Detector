/**
 * Author : Akilax0
 * Date-Mdifiied : 12/11/2022
 * 
 * 
 * 
*/

#include <Arduino.h>
#include <Wire.h>


#include "DHT.h"

//Task to read DHT data
// TaskHandle_t Task1;

#define DHTPIN 27 // Digital pin connected to the DHT sensor
// Feather HUZZAH ESP8266 note: use pins 3, 4, 5, 12, 13 or 14 --
// Pin 15 can work but DHT must be disconnected during program upload.

#define DHTTYPE DHT11

// Connect pin 1 (on the left) of the sensor to +5V
// NOTE: If using a board with 3.3V logic like an Arduino Due connect pin 1
// to 3.3V instead of 5V!
// Connect pin 2 of the sensor to whatever your DHTPIN is
// Connect pin 3 (on the right) of the sensor to GROUND (if your sensor has 3 pins)
// Connect pin 4 (on the right) of the sensor to GROUND and leave the pin 3 EMPTY (if your sensor has 4 pins)
// Connect a 10K resistor from pin 2 (data) to pin 1 (power) of the sensor

// Initialize DHT sensor.
// Note that older versions of this library took an optional third parameter to
// tweak the timings for faster processors.  This parameter is no longer needed
// as the current DHT reading algorithm adjusts itself to work on faster procs.
DHT dht(DHTPIN, DHTTYPE);

// defines pins numbers
const int trigPin = 25;
const int echoPin = 26;


// defines variables
long duration;
float distance;
float speed_sound;



// function that executes whenever data is received from master
// this function is registered as an event, see setup()
void receiveEvent(int howMany)
{

  union {
    float a;
    unsigned char bytes[4];
  } thing;


  int i=0;
  while(4 < Wire.available()) // loop through all but the last
  {
    thing.bytes[i] = Wire.read();
    i++;

    // char c = Wire.read(); // receive byte as a character
    // Serial.print(c);         // print the character
  }

  Serial.print(thing.a);
  Serial.print(" ");

  i=0;
  while(0< Wire.available()) // loop through all but the last
  {
    thing.bytes[i] = Wire.read();
    i++;

    // char c = Wire.read(); // receive byte as a character
    // Serial.print(c);         // print the character
  }
  
  Serial.print(thing.a);
  Serial.println(" ");


  // int x = Wire.read();    // receive byte as an integer
  // Serial.println(x);         // print the integer
}

//Task1code: READ DHT data and calculate distance
// void Task1code( void * pvParameters ){
  // Serial.print("Task1 running on core ");
  // Serial.println(xPortGetCoreID());



  // for(;;){
  //       // Wait a few seconds between measurements.
  //   delay(2000);

  //   // Reading temperature or humidity takes about 250 milliseconds!
  //   // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  //   float h = dht.readHumidity();
  //   // Read temperature as Celsius (the default)
  //   float t = dht.readTemperature();
  //   // Read temperature as Fahrenheit (isFahrenheit = true)
  //   float f = dht.readTemperature(true);

  //   // Check if any reads failed and exit early (to try again).
  //   if (isnan(h) || isnan(t) || isnan(f)) {
  //     Serial.println(F("Failed to read from DHT sensor!"));
  //     return;
  //   }

  //   // Compute heat index in Fahrenheit (the default)
  //   float hif = dht.computeHeatIndex(f, h);
  //   // Compute heat index in Celsius (isFahreheit = false)
  //   float hic = dht.computeHeatIndex(t, h, false);

  //   Serial.print(F("Humidity: "));
  //   Serial.print(h);
  //   Serial.print(" ");
  //   Serial.print(F("Temp: "));
  //   Serial.println(t);


  //   // Clears the trigPin
  //   digitalWrite(trigPin, LOW);
  //   delayMicroseconds(2);
  //   // Sets the trigPin on HIGH state for 10 micro seconds
  //   digitalWrite(trigPin, HIGH);
  //   delayMicroseconds(10);
  //   digitalWrite(trigPin, LOW);
  //   // Reads the echoPin, returns the sound wave travel time in microseconds
  //   duration = pulseIn(echoPin, HIGH);
  //   speed_sound = 331.3 + 0.606*(float)t + 0.01243*h;
  //   speed_sound = speed_sound/10000;

  //   // Calculating the distance
  //   distance = duration * speed_sound/ 2;
  //   // Prints the distance on the Serial Monitor
  //   Serial.print("Distance with t & h: ");
  //   Serial.println(distance);
  //   Serial.print("Distance without: ");
  //   Serial.println(duration * 0.034 / 2);

//   }
// }


void setup()
{
  Wire.begin(4);                // join i2c bus with address #4
  Wire.onReceive(receiveEvent); // register event
  Serial.begin(115200);           // start serial for output
  dht.begin();

  //       //create a task that will be executed in the Task1code() function, with priority 1 and executed on core 0
  // xTaskCreatePinnedToCore(
  //                   Task1code,   /* Task function. */
  //                   "Task1",     /* name of task. */
  //                   10000,       /* Stack size of task */
  //                   NULL,        /* parameter of the task */
  //                   1,           /* priority of the task */
  //                   &Task1,      /* Task handle to keep track of created task */
  //                   0);          /* pin task to core 0 */                  
  // delay(500); 

  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
}

void loop()
{


        // Wait a few seconds between measurements.
    delay(2000);

    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
    float h = dht.readHumidity();
    // Read temperature as Celsius (the default)
    float t = dht.readTemperature();
    // Read temperature as Fahrenheit (isFahrenheit = true)
    float f = dht.readTemperature(true);

    // Check if any reads failed and exit early (to try again).
    if (isnan(h) || isnan(t) || isnan(f)) {
      Serial.println(F("Failed to read from DHT sensor!"));
      return;
    }

    // Compute heat index in Fahrenheit (the default)
    float hif = dht.computeHeatIndex(f, h);
    // Compute heat index in Celsius (isFahreheit = false)
    float hic = dht.computeHeatIndex(t, h, false);

    Serial.print(F("Humidity: "));
    Serial.print(h);
    Serial.print(" ");
    Serial.print(F("Temp: "));
    Serial.println(t);


    // Clears the trigPin
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    // Sets the trigPin on HIGH state for 10 micro seconds
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    // Reads the echoPin, returns the sound wave travel time in microseconds
    duration = pulseIn(echoPin, HIGH);
    speed_sound = 331.3 + 0.606*(float)t + 0.01243*h;
    speed_sound = speed_sound/10000;

    // Calculating the distance
    distance = duration * speed_sound/ 2;
    // Prints the distance on the Serial Monitor
    Serial.print("Distance with t & h: ");
    Serial.println(distance);
    Serial.print("Distance without: ");
    Serial.println(duration * 0.034 / 2);

}

