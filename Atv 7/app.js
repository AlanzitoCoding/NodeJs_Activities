const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8081;

app.post('/showDate', (req, res) => {
    const {date} = req.body;
    
    if(!date){
        console.log('Please, insert a date first!');
        res.json({msg: 'Please, insert a date first!'});
        return;
    }
    
    const dateDate = new Date(date);
    const nextYear = dateDate.getFullYear();
    const nextYearDate = new Date(nextYear + 1, 0, 1);
    const dayMilliseconds = 1000 * 60 * 60 * 24;

    const remainingDays = Math.ceil((nextYearDate.getTime() - dateDate.getTime()) / dayMilliseconds);

    res.json({msg: `There are ${(remainingDays)} days left for the next year.`})
    console.log(remainingDays);
    console.log(nextYearDate)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
    console.log(`Server running on the port ${(port)}`)
})