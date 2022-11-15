from flask import Flask, request, jsonify
from flask_mqtt import Mqtt

app = Flask(__name__)

app.config['MQTT_BROKER_URL'] = 'mqtt.eclipseprojects.io'
app.config['MQTT_BROKER_PORT'] = 1883
app.config['MQTT_KEEPALIVE'] = 5  # Set KeepAlive time in seconds

# app.config['MQTT_TLS_ENABLED'] = False  # If your server supports TLS, set it True

topic = '/3yp/flask/test'

mqtt_client = Mqtt(app)


@mqtt_client.on_connect()
def handle_connect(client, userdata, flags, rc):
   if rc == 0:
       print('Connected successfully')
       mqtt_client.subscribe(topic) # subscribe topic
   else:
       print('Bad connection. Code:', rc)


@mqtt_client.on_message()
def handle_mqtt_message(client, userdata, message):
   data = dict(
       topic=message.topic,
       payload=message.payload.decode()
    )
   print('Received message on topic: {topic} with payload: {payload}'.format(**data))


@app.route('/', methods=['GET'])
def home():
   return "Hello thisara"

if __name__ == '__main__':
   app.run(host='127.0.0.1', port=5000)



















#
# from flask import Flask
#
# import json
# import paho.mqtt.client as mqtt
#
# client = mqtt.Client("gps-landmines handler")
#
# # subscribing topics
# coorinatesTopic = 'topics/coordinates'
# landminesTopic = 'topic/landmines'
#
# landmines = []
#
# def on_message_for_landmine(client, userdata, message):
#     data = json.loads(message.payload)
#     values = list(data.values())
#     print(values)
#
# client.message_callback_add(landminesTopic, on_message_for_landmine)
# client.connect("mqtt.eclipseprojects.io", port=1883)
# client.subscribe([(landminesTopic, 0)])
#
#
# app = Flask(__name__)
#
# @app.route('/')
# def home():
#     return "Testing"
#
# client.loop_forever()
