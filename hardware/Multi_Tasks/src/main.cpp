#include <Arduino.h>


TaskHandle_t Task1;
TaskHandle_t Task2;

//LED pins 
const int led1 = 2;
const int led2 = 4;

void Task1code( void * pvParameters );
void Task2code( void * pvParameters );


void setup() {
  Serial.begin(115200);
  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);

    //create a task that will be executed in the Task1code() function, with priority 1 and executed on core 0
  xTaskCreatePinnedToCore(
                    Task1code,   /* Task function. */
                    "Task1",     /* name of task. */
                    10000,       /* Stack size of task */
                    NULL,        /* parameter of the task */
                    1,           /* priority of the task */
                    &Task1,      /* Task handle to keep track of created task */
                    0);          /* pin task to core 0 */                  
  delay(500); 

    //create a task that will be executed in the Task2code() function, with priority 1 and executed on core 1
  xTaskCreatePinnedToCore(
                    Task2code,   /* Task function. */
                    "Task2",     /* name of task. */
                    10000,       /* Stack size of task */
                    NULL,        /* parameter of the task */
                    1,           /* priority of the task */
                    &Task2,      /* Task handle to keep track of created task */
                    1);          /* pin task to core 1 */
    delay(500); 


  Serial2.begin(9600);
  delay(3000);

  Wire.begin();
  // //I2C for IMU
  // Wire.begin(21, 22, 100000); // sda, scl, clock speed
  // Wire.beginTransmission(MPU_ADDR);
  // Wire.write(0x6B);  // PWR_MGMT_1 register
  // Wire.write(0);     // set to zero (wakes up the MPU−6050)
  // Wire.endTransmission(true);

  Serial.println("Setup done");

}


//Task1code: blinks an LED every 1000 ms
void Task1code( void * pvParameters ){
  Serial.print("Task1 running on core ");
  Serial.println(xPortGetCoreID());

  for(;;){
  while (Serial2.available() > 0)
    if (gps.encode(Serial2.read()))
      displayInfo();
  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("No GPS detected: check wiring."));
    // Wire.write("No GPS detected: check wiring.");
    while (true);
  }

  } 
}

//Task2code: blinks an LED every 700 ms
void Task2code( void * pvParameters ){
  Serial.print("Task2 running on core ");
  Serial.println(xPortGetCoreID());

  for(;;){
    digitalWrite(led2, HIGH);
    delay(700);
    digitalWrite(led2, LOW);
    delay(700);
  }
}

void loop() {
  
}