const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8081;

app.post('/bmiCalc', (req, res) => {
    const {weight, height} = req.body;

    if(!weight || !height){
        console.log('Insert all the data first!');
        res.json({msg: 'Insert all the data first!'});
        return
    }
    
    if(weight < 0 || height < 0){
        console.log('Your data cannot be negative!');
        res.json({msg: 'Your data cannot be negative!'});
        return
    }

    const bmi = weight/((height/100)*(height/100));
    res.json({msg: `Body Mass Index: ${(bmi)}`})
    return

})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
})

app.listen(port, () => {
    console.log(`Server running on the port ${(port)}`);
})