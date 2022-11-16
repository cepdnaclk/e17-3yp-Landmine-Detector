#include <Arduino.h>
#include <secrets.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <Wire.h>
#include <SPI.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
// #include <BluetoothSerial.h>

#include <TinyGPSPlus.h>

//Task to Handle GPS and data communication
TaskHandle_t Task1;


//Task to Handle IMU Data and data to slave 
TaskHandle_t Task2;


//Checking bluetooth
#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

// BluetoothSerial SerialBT;

const int PushButton = 15;

// Replace with your network credentials (STATION)
// const char* ssid = "SLT-Fiber-AA63";
// const char* password = "homeWIFI2485";

#define AWS_IOT_PUBLISH_TOPIC   "esp32/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "esp32/sub"

unsigned long previousMillis = 0;
unsigned long interval = 30000;

WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);
 

void initWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Network ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println(WiFi.localIP());
}

void publishMessage()
{
  StaticJsonDocument<200> doc;
  doc["humidity"] = 23;
  doc["temperature"] = 33;
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); // print to client
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}
 


void messageHandler(char* topic, byte* payload, unsigned int length)
{
  Serial.print("incoming: ");
  Serial.println(topic);
 
  StaticJsonDocument<200> doc;
  deserializeJson(doc, payload);
  const char* message = doc["message"];
  Serial.println(message);
}

void initAWS(){
  // Configure WiFiClientSecure to use the AWS IoT device credentials
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);

   // Connect to the MQTT broker on the AWS endpoint we defined earlier
  client.setServer(AWS_IOT_ENDPOINT, 8883);
 
  // Create a message handler
  client.setCallback(messageHandler);
 
  Serial.println("Connecting to AWS IOT");
 
  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(100);
  }
 
  if (!client.connected())
  {
    Serial.println("AWS IoT Timeout!");
    return;
  }
 
  // Subscribe to a topic
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);
 
  Serial.println("AWS IoT Connected!");
}


void checkWIFI(){
 Serial.println("scan start");

  // WiFi.scanNetworks will return the number of networks found
  int n = WiFi.scanNetworks();
  Serial.println("scan done");
  if (n == 0) {
      Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    for (int i = 0; i < n; ++i) {
      // Print SSID and RSSI for each network found
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN)?" ":"*");
      delay(10);
    }
  }
  Serial.println("");

  // Wait a bit before scanning again
  delay(5000);
}

/*********************** GPS **********************/
TinyGPSPlus gps;


//function to check serial data
void updateSerial(){
  delay(500);
  while (Serial.available())  {
    Serial2.write(Serial.read());//Forward what Serial received to Software Serial Port
  }
  while (Serial2.available())  {
    Serial.write(Serial2.read());//Forward what Software Serial received to Serial Port
  }
}


//Display GPS data 
void displayInfo()
{

  int ii;
  union {
    float a;
    unsigned char bytes[4];
  } thing;


  // byte gpslat,gpslan;

  Wire.beginTransmission(4); // transmit to device #4

  Serial.print(F("Location: "));
  // Wire.write("Location: ");

  
  if (gps.location.isValid()){
    thing.a = gps.location.lat();
    Wire.write(thing.bytes,4);
    // Wire.write(" ");
    thing.a = gps.location.lng();
    Wire.write(thing.bytes,4);
    

  
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
    
  
    // Wire.write(gps.location.lat());
    // Wire.write(",");
    // Wire.write(gps.location.lng())
   
  }
  else
  {
    Wire.write("INVALID");
    Serial.print(F("INVALID"));
  }
  // Wire.write("\n");
  Wire.endTransmission();
  Serial.println("");
}

/********************* IMU ***********************/
const int MPU_ADDR = 0x68; // I2C address of the MPU-6050
int16_t AcX, AcY, AcZ, Tmp, GyX, GyY, GyZ;



//Task1code: Wait for init MQTT and pub GPS data
void Task1code( void * pvParameters ){
  Serial.print("Task1 running on core ");
  Serial.println(xPortGetCoreID());



  for(;;){

    // checkWIFI();

    unsigned long currentMillis = millis();
    // if WiFi is down, try reconnecting every CHECK_WIFI_TIME seconds
    if ((WiFi.status() != WL_CONNECTED) && (currentMillis - previousMillis >=interval)) {
      Serial.print(millis());
      Serial.println("Reconnecting to WiFi...");
      WiFi.disconnect();
      WiFi.reconnect();
      previousMillis = currentMillis;
    }
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

//Task2code: READ IMU data and send data to slave
void Task2code( void * pvParameters ){
  Serial.print("Task1 running on core ");
  Serial.println(xPortGetCoreID());



  for(;;){
    /// READ IMU data

}



void setup() {
  Serial.begin(115200);
  initWiFi();
  // initAWS();
  // Serial.print("RSSI: ");
  // Serial.println(WiFi.RSSI());

  // SerialBT.begin("ESP32test"); //Bluetooth device name
  // Serial.println("The device started, now you can pair it with bluetooth!");

  // Setting up push button
  pinMode(PushButton, INPUT);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  //GPS
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
        //create a task that will be executed in the Task1code() function, with priority 1 and executed on core 0
  xTaskCreatePinnedToCore(
                    Task2code,   /* Task function. */
                    "Task2",     /* name of task. */
                    10000,       /* Stack size of task */
                    NULL,        /* parameter of the task */
                    1,           /* priority of the task */
                    &Task2,      /* Task handle to keep track of created task */
                    1);          /* pin task to core 0 */                  
  delay(500); 
}

void loop() {
  //   unsigned long currentMillis = millis();
  // // if WiFi is down, try reconnecting every CHECK_WIFI_TIME seconds
  // if ((WiFi.status() != WL_CONNECTED) && (currentMillis - previousMillis >=interval)) {
  //   Serial.print(millis());
  //   Serial.println("Reconnecting to WiFi...");
  //   WiFi.disconnect();
  //   WiFi.reconnect();
  //   previousMillis = currentMillis;
  // }

  // int Push_button_state = digitalRead(PushButton);
  // if ( Push_button_state == HIGH )
  // { 
  //   checkWIFI();
  // }


  // publishMessage();
  // client.loop();
  

  //Write to I2C Slave  


  // while (Serial2.available() > 0)
  //   if (gps.encode(Serial2.read()))
  //     displayInfo();
  // if (millis() > 5000 && gps.charsProcessed() < 10)
  // {
  //   Serial.println(F("No GPS detected: check wiring."));
  //   // Wire.write("No GPS detected: check wiring.");
  //   while (true);
  // }



  // if (Serial.available()) {
  //   SerialBT.write(Serial.read());
  // }
  // if (SerialBT.available()) {
  //   Serial.write(SerialBT.read());
  // }

  // delay(5000);
  
}