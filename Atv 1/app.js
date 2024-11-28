const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
const port = 8081;

app.post('/avgCalc', (req, res) => {
    const {n1, n2, n3} = req.body;

    if(!n1 || !n2 || !n3){
        console.log('Do not forget to insert all your grades!');
        res.json({avg: 'Do not forget to insert all your grades!'});
        return
    }
    
    if(n1 < 0 || n2 < 0 || n3 < 0){
        console.log('Your grades cannot be negative!');
        res.json({avg: 'Your grades cannot be negative!'});
        return
    }

    const average = (n1 + n2 + n3)/3;
    
    res.json({avg: `Average: ${(average)}`});
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
})

app.listen(port, () => {
    console.log(`Server running on the port ${(port)}.`);
})