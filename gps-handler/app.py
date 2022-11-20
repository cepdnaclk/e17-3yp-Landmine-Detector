from flask import Flask, request, jsonify
from flask_mqtt import Mqtt
from flask_cors import CORS
import json


app = Flask(__name__)
CORS(app)

app.config['MQTT_BROKER_URL'] = 'mqtt.eclipseprojects.io'
app.config['MQTT_BROKER_PORT'] = 1883
app.config['MQTT_KEEPALIVE'] = 5  # Set KeepAlive time in seconds

topic = '/3yp/detections'

coordinatesTopic = '/3yp/coordinates'




detections = []

mqtt_client = Mqtt(app)


@mqtt_client.on_connect()
def handle_connect(client, userdata, flags, rc):
   if rc == 0:
       print('Connected successfully')
       mqtt_client.subscribe(topic, 0)
   else:
       print('Bad connection. Code:', rc)


@mqtt_client.on_message()
def handle_mqtt_message(client, userdata, message):
   data = dict(
       topic=message.topic,
       payload=message.payload.decode()
    )
   data = json.loads(data['payload'])

   detections.append([data['type'], data['lat'], data['lon']])

   print(detections)

@app.route('/')
def index():
    return "Welcome to GPS handler"

@app.route('/get-detections', methods=['GET'])
def sendDetections():
    return jsonify(detections)

@app.route('/create-search', methods=['POST'])
def createSearch():
    data = request.json
    # print(request.json)
    lat = data['lat']
    lan = data['lan']
    rad = data['rad']

    coordinates = calculateWaypoints(lat, lan, rad)

    x = {
        "name": "Thisaraaaa"
    }

    mqtt_client.publish(coordinatesTopic, json.dumps(x), 0)

    return "data receieved"

def calculateWaypoints(lat, lan, rad):
    coordinates = []
    arraySize = int((2*rad)/1.1)
    topLeftLat = lat + (((arraySize/2)-1)*0.00001)
    topLeftLan = lan - (((arraySize/2)-1)*0.00001)

    for row in range(arraySize):
        for col in range(arraySize):
            current = [topLeftLat-row*0.00001, topLeftLan+col*0.00001]
            coordinates.append(current)

    return coordinates



if __name__ == '__main__':
   app.run(host='127.0.0.1', port=5000)



# todos
# listen to create search mqtt topic - **(change to post request)
# calculate waypoints for robot - **
# then send waypoints (5) through mqtt
# listen and check waypoints are acheived
# listen detections
# until all points are checked

# send to finish signal to separate topic
