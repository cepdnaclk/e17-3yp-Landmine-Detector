#include <Arduino.h>

// Motor Driver
TaskHandle_t Task1;

void Task1code( void * pvParameters );

void setup() {

   Serial.begin(115200);
  // put your setup code here, to run once:

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
}


//Task1code: blinks an LED every 1000 ms
void Task1code( void * pvParameters ){
  Serial.print("Task1 running on core ");
  Serial.println(xPortGetCoreID());

  for(;;){

  } 
}

void loop() {
  // put your main code here, to run repeatedly:
}