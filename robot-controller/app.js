const express = require('express');

// mqtt things
const mqtt = require('mqtt')
var client = mqtt.connect('https://mqtt.eclipseprojects.io/:1883');
// var client = mqtt.connect('https://broker.hivemq.com:1883');
const robotControlTopicLDR001 = 'robot-control/ldr001'



const app = express()
const PORT = 5000;

app.use(express.json())

app.post('/robot-control', (req, res)=>{

    if (req.body.status == 1) {
        // send mqtt msg
        client.publish(robotControlTopicLDR001, "Turn ON")
        res.status(200).send({
            command: `turining on the robot ${req.body.id}`
        });
    } else if (req.body.status == 0) {
        // send mqtt msg
        client.publish(robotControlTopicLDR001, "Turn OFF")
        res.status(200).send({
            command: `turining off the robot ${req.body.id}`
        });
    }


});


app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT ${PORT}`);
})

