const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8081;

app.post('/evenOrOdd', (req, res) => {
    const {num} = req.body;

    if(!num){
        console.log('Please, insert a number first!');
        res.json({msg: 'Please, insert a number first!'});
        return
    }

    if(num%2 == 0){
        console.log('Even')
        res.json({msg: `The number's EVEN`});
    }
    else{
        console.log('Odd')
        res.json({msg: `The number's ODD`});
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, ()=> {
    console.log(`Server running on the port ${(port)}`);
});