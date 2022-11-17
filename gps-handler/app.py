from flask import Flask, request, jsonify
from flask_mqtt import Mqtt
import json

app = Flask(__name__)

app.config['MQTT_BROKER_URL'] = 'mqtt.eclipseprojects.io'
app.config['MQTT_BROKER_PORT'] = 1883
app.config['MQTT_KEEPALIVE'] = 5  # Set KeepAlive time in seconds

topic_landmine = '/3yp/landmine'
topic_obstacle = '/3yp/obstacle'

landmines = []
obstacles = []

mqtt_client = Mqtt(app)


@mqtt_client.on_connect()
def handle_connect(client, userdata, flags, rc):
   if rc == 0:
       print('Connected successfully')
       mqtt_client.subscribe(topic_landmine, 0)
       mqtt_client.subscribe(topic_obstacle, 0)
   else:
       print('Bad connection. Code:', rc)


@mqtt_client.on_message()
def handle_mqtt_message(client, userdata, message):
   data = dict(
       topic=message.topic,
       payload=message.payload.decode()
    )
   data = json.loads(data['payload'])

   if (message.topic == '/3yp/landmine'):
       newLandmine = [data['lat'], data['lon']]
       landmines.append(newLandmine)
   elif (message.topic == '/3yp/obstacle'):
       newObstacle = [data['lat'], data['lon']]
       obstacles.append(newObstacle)
   print(landmines)

@app.route('/get-landmines', methods=['GET'])
def sendLandmines():
    return jsonify(landmines)

@app.route('/get-obstacles', methods=['GET'])
def sendObstacles():
    return jsonify(obstacles)

if __name__ == '__main__':
   app.run(host='127.0.0.1', port=5000)
