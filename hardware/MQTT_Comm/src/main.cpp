#include <Arduino.h>
#include <secrets.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <Wire.h>
#include <SPI.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <bits/stdc++.h>
#include <iostream>


//Task to Handle GPS and data communication
TaskHandle_t Task1;

unsigned long previousMillis = 0;
unsigned long interval = 30000;

const char* mqtt_server = "mqtt.eclipseprojects.io";

WiFiClient net = WiFiClient();
PubSubClient client(net);

long lastMsg = 0;
char msg[50];
int value = 0;


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


void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("ESP32")) {
      Serial.println("connected");
      // Subscribe
      client.subscribe("/3yp/ldr01/coordinates");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

//Task1code: Wait for init MQTT and pub GPS data
void Task1code( void * pvParameters ){
  Serial.print("Task1 running on core ");
  Serial.println(xPortGetCoreID());

  

  for(;;){

  if (!client.connected()) {
    reconnect();
  }
  client.loop();

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

  delay(500);
  

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

  int n = messageTemp.length();
 
    // declaring character array
  char char_array[n + 1];
 
    // copying the contents of the
    // string to char array
  strcpy(char_array, messageTemp.c_str());

  // Serial.println(messageTemp);

  // Feel free to add more if statements to control more GPIOs with MQTT

  // If a message is received on the topic esp32/output, you check if the message is either "on" or "off". 
  // Changes the output state according to the message
  if (String(topic) == "/3yp/ldr01/coordinates") {
    std::vector<std::pair<String,String>> waypoints;

    DynamicJsonDocument doc(1024);
    deserializeJson(doc,char_array);


//input latitude , longitude


    // Serial.println(doc[0]);

    // for(int i=0;i<9;i++){
    //   Serial.println(doc[i][0]);
    //   waypoints.push_back(std::make_pair(doc[i][0],doc[i][1]));
    // }


    // for(auto i:waypoints){
    //   Serial.print(i.first);
    //   Serial.print(" ");
    //   Serial.println(i.second);
    // }

    

    //  /3yp/ldr01/detections

    // {
    // "landmine": 0/1
    // obstacle: 0/1 
    // lat: float
    // lon: float
    // }

  
  DynamicJsonDocument reply(1024);

  reply["landmine"] = 1;
  reply["obstacle"]   = 0;
  reply["lat"] =  22.5726;
  reply["lon"] = 88.3639;



  char out[128];
  int b;
  bool rc;
  int l,o;

for(int i=0;i<9;i++){
  if(i%4==0){
    l = 1;
  }else{
    l=0;
  }

  if(i%5==0){
    o = 1;
  }else{
    o=0;
  }

  reply["landmine"] = l;
  reply["obstacle"]   = o;
  reply["lat"] =  24.5726;
  reply["lon"] = 88.3639;

  b =serializeJson(reply, out);
  Serial.print("bytes = ");
  Serial.println(b,DEC);  
  Serial.println(out);
  rc = client.publish("/3yp/ldr01/detections", out);
  delay(1000);
}
  
  }
}



void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  initWiFi();

  // WiFi.mode(WIFI_STA);
  // WiFi.disconnect();
  delay(100);

  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
  delay(500); 

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


}

void loop() {
  // put your main code here, to run repeatedly:


}