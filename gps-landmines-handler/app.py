from flask import Flask, request, jsonify
from flask_mqtt import Mqtt
import json

app = Flask(__name__)

app.config['MQTT_BROKER_URL'] = 'mqtt.eclipseprojects.io'
app.config['MQTT_BROKER_PORT'] = 1883
app.config['MQTT_KEEPALIVE'] = 5  # Set KeepAlive time in seconds

# app.config['MQTT_TLS_ENABLED'] = False  # If your server supports TLS, set it True

topic = '/3yp/flask/test'
landmines = []

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
   # print('Received message on topic: {topic} with payload: {payload}'.format(**data))
   data = json.loads(data['payload'])

   newLandmine = [data['lat'], data['lon']]
   landmines.append(newLandmine)
   print(landmines)

@app.route('/send-landmines', methods=['POST'])
def sendLandmines():
    request_data = request.get_json()


    return jsonify({'status': "Coorinates added"})

if __name__ == '__main__':
   app.run(host='127.0.0.1', port=5000)
