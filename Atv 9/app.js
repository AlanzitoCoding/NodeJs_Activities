const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8081;

app.post('/countLetters', (req, res) => {
    const {text} = req.body;
    var v = 0;
    var c = 0;
    var count;

    if(!text){
        res.json({msg: 'Insert the text first!'});
        console.log('Error')
        return;
    }

    const checkText = new String(text);
    console.log(checkText);

    for(count = 0; count < checkText.toLowerCase().length; count++){
        var char = checkText.toLowerCase().charAt(count);
        if(char.match(/[aeiou]/)){
            v++;
        }
        else if(char.match(/[bcdfghjklmnpqrstvwxyz]/)){
            c++;
        }
    }

    res.json({msg: `There are ${v} vowels and ${c} consonants in this text!`});
    console.log(v, c);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
    console.log(`Server running on the port ${(port)}`);
});