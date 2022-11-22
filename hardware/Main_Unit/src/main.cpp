#include <Arduino.h>
#include <secrets.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <Wire.h>
#include <SPI.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
// #include <BluetoothSerial.h>


#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>



Adafruit_MPU6050 mpu;

#include <TinyGPSPlus.h>

//Task to Handle GPS and data communication
TaskHandle_t Task1;


//Task to Handle IMU Data and data to slave 
TaskHandle_t Task2;


// //Checking bluetooth
// #if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
// #error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
// #endif

// BluetoothSerial SerialBT;

const int PushButton = 15;

#define AWS_IOT_PUBLISH_TOPIC   "esp32/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "robo-data/ldr01/command"

unsigned long previousMillis = 0;
unsigned long interval = 30000;

WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);


// WiFiClient espClient;
// PubSubClient client(espClient);
// long lastMsg = 0;
// char msg[50];
// int value = 0;


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

// void publishMessage()
// {
//   StaticJsonDocument<200> doc;
//   doc["humidity"] = 23;
//   doc["temperature"] = 33;
//   char jsonBuffer[512];
//   serializeJson(doc, jsonBuffer); // print to client
 
//   client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
// }
 


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



/******************** MQTT ************************/
void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("ESP8266Client")) {
      Serial.println("connected");
      // Subscribe
      client.subscribe("robo-data/ldr01/command");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}


void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  String messageTemp;
  
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
    messageTemp += (char)message[i];
  }
  Serial.println();

  // Feel free to add more if statements to control more GPIOs with MQTT

  // If a message is received on the topic esp32/output, you check if the message is either "on" or "off". 
  // Changes the output state according to the message
  if (String(topic) == "robo-data/ldr01/command") {
    Serial.print("Changing output to ");
    if(messageTemp == "on"){
      Serial.println("on");
      // digitalWrite(ledPin, HIGH);
    }
    else if(messageTemp == "off"){
      Serial.println("off");
      // digitalWrite(ledPin, LOW);
    }
  }
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


    // unsigned long currentMillis = millis();
    // // if WiFi is down, try reconnecting every CHECK_WIFI_TIME seconds
    // if ((WiFi.status() != WL_CONNECTED) && (currentMillis - previousMillis >=interval)) {
    //   Serial.print(millis());
    //   Serial.println("Reconnecting to WiFi...");
    //   WiFi.disconnect();
    //   WiFi.reconnect();
    //   previousMillis = currentMillis;
    // }


    if (!client.connected()) {
      reconnect();
    }
    client.loop();




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
  Serial.print("Task2 running on core ");
  Serial.println(xPortGetCoreID());



  for(;;){
    /// READ IMU data
      /* Get new sensor events with the readings */
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);

  /* Print out the values */
  Serial.print("Acceleration X: ");
  Serial.print(a.acceleration.x);
  Serial.print(", Y: ");
  Serial.print(a.acceleration.y);
  Serial.print(", Z: ");
  Serial.print(a.acceleration.z);
  Serial.println(" m/s^2");

  Serial.print("Rotation X: ");
  Serial.print(g.gyro.x);
  Serial.print(", Y: ");
  Serial.print(g.gyro.y);
  Serial.print(", Z: ");
  Serial.print(g.gyro.z);
  Serial.println(" rad/s");

  Serial.print("Temperature: ");
  Serial.print(temp.temperature);
  Serial.println(" degC");

  Serial.println("");
  delay(500);
  }

}




void setup() {
  Serial.begin(115200);
  initWiFi();
  initAWS();
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


  //MQTT
  // client.setServer(mqtt_server, 1883);
  // client.setCallback(callback);

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


/************* IMU SETUP ************/
  while (!Serial)
    delay(10); // will pause Zero, Leonardo, etc until serial console opens

  Serial.println("Adafruit MPU6050 test!");

  // Try to initialize!
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");

  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);
  Serial.print("Accelerometer range set to: ");
  switch (mpu.getAccelerometerRange()) {
  case MPU6050_RANGE_2_G:
    Serial.println("+-2G");
    break;
  case MPU6050_RANGE_4_G:
    Serial.println("+-4G");
    break;
  case MPU6050_RANGE_8_G:
    Serial.println("+-8G");
    break;
  case MPU6050_RANGE_16_G:
    Serial.println("+-16G");
    break;
  }
  mpu.setGyroRange(MPU6050_RANGE_500_DEG);
  Serial.print("Gyro range set to: ");
  switch (mpu.getGyroRange()) {
  case MPU6050_RANGE_250_DEG:
    Serial.println("+- 250 deg/s");
    break;
  case MPU6050_RANGE_500_DEG:
    Serial.println("+- 500 deg/s");
    break;
  case MPU6050_RANGE_1000_DEG:
    Serial.println("+- 1000 deg/s");
    break;
  case MPU6050_RANGE_2000_DEG:
    Serial.println("+- 2000 deg/s");
    break;
  }

  mpu.setFilterBandwidth(MPU6050_BAND_5_HZ);
  Serial.print("Filter bandwidth set to: ");
  switch (mpu.getFilterBandwidth()) {
  case MPU6050_BAND_260_HZ:
    Serial.println("260 Hz");
    break;
  case MPU6050_BAND_184_HZ:
    Serial.println("184 Hz");
    break;
  case MPU6050_BAND_94_HZ:
    Serial.println("94 Hz");
    break;
  case MPU6050_BAND_44_HZ:
    Serial.println("44 Hz");
    break;
  case MPU6050_BAND_21_HZ:
    Serial.println("21 Hz");
    break;
  case MPU6050_BAND_10_HZ:
    Serial.println("10 Hz");
    break;
  case MPU6050_BAND_5_HZ:
    Serial.println("5 Hz");
    break;
  }

  Serial.println("");
  delay(100);


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