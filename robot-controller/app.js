const express = require('express');
const app = express()
const PORT = 5000;

app.use(express.json())

app.post('/robot-control', (req, res)=>{

    if (req.body.status == 1) {
        // send mqtt msg
        res.status(200).send({
            command: `turining on the robot ${req.body.id}`
        });
    } else if (req.body.status == 0) {
        // send mqtt msg
        res.status(200).send({
            command: `turining off the robot ${req.body.id}`
        });
    }


});


app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT ${PORT}`);
})

