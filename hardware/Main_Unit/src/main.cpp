#include <Arduino.h>
#include <secrets.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <Wire.h>
#include <SPI.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <BluetoothSerial.h>

#include <TinyGPSPlus.h>


//Checking bluetooth
#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

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
  Serial.print("Connecting to WiFi ..");
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
  Serial.print(F("Location: "));
  if (gps.location.isValid()){
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  }
  else
  {
    Serial.print(F("INVALID"));
  }
}

void setup() {
  Serial.begin(115200);
  // initWiFi();
  // initAWS();
  // Serial.print("RSSI: ");
  // Serial.println(WiFi.RSSI());

  SerialBT.begin("ESP32test"); //Bluetooth device name
  Serial.println("The device started, now you can pair it with bluetooth!");

  // Setting up push button
  pinMode(PushButton, INPUT);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  // WiFi.mode(WIFI_STA);
  // WiFi.disconnect();
  // delay(100);

  //GPS
  Serial2.begin(9600);
  delay(3000);

  Serial.println("Setup done");
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


  if (Serial.available()) {
    SerialBT.write(Serial.read());
  }
  if (SerialBT.available()) {
    Serial.write(SerialBT.read());
  }

  delay(20);
  
}