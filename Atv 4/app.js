const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8081;

app.post('/degreeConv', (req, res) => {
    const {degree, iTemp, fTemp} = req.body;
    
    if(!degree){
        console.log('Please, insert a degree first!');
        res.json({msg: 'Please, insert a degree first!'});
        return
    }
    
    if(iTemp == '°C' && fTemp == '°F'){
        const fDegree = (degree * 9/5) + 32;
        res.json({msg: fDegree});
        console.log(fDegree);
    }
    else if(iTemp == '°C' && fTemp == '°K'){
        const fDegree = degree + 273.15;
        res.json({msg: fDegree});
        console.log(fDegree);
    }
    else if(iTemp == '°F' && fTemp == '°C'){
        const fDegree = (degree - 32) * 5/9
        res.json({msg: fDegree});
        console.log(fDegree);
    }
    else if(iTemp == '°F' && fTemp == '°K'){
        const fDegree = (degree - 32) * 5/9 + 273.15;
        res.json({msg: fDegree});
        console.log(fDegree);
    }
    else if(iTemp == '°K' && fTemp == '°F'){
        const fDegree = (degree - 273.15) * 9/5 + 32;
        res.json({msg: fDegree});
        console.log(fDegree);
    }
    else if(iTemp == '°K' && fTemp == '°C'){
        const fDegree = degree - 273.15;
        res.json({msg: fDegree});
        console.log(fDegree);
    }

    else if(iTemp == '°C' && fTemp == '°C'){
        res.json({msg: degree});
    }
    else if(iTemp == '°K' && fTemp == '°K'){
        res.json({msg: degree});
    }
    else if(iTemp == '°F' && fTemp == '°F'){
        res.json({msg: degree});
    }

})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
    console.log(`Server running on the port ${(port)}`);
});