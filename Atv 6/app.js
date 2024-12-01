const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8081;

app.post('/insert', (req, res) => {
    const {task} = req.body;

    if(!task){
        res.json({msg: 'Insert the task first!'});
        return;
    }

    
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'home.html');
});

app.listen(port, () => {
    console.log(`Server running on port ${(port)}`);
});