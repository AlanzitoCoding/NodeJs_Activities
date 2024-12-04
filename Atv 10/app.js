const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
app.use(bodyParser.json());
const port = 8081;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2006Pa#*#',
    database: 'atv10'
});

db.connect((err) => {
    if(err) throw err;

    console.log('Successfully connected to the database!');
});

app.post('/addContact', (req, res) => {
    const {name, phone} = req.body;

    if(!name || !phone){
        res.json({msg: 'Insert the data first!'});
        return;
    }

    db.query('insert into contacts(contactName, contactPhone) values (?, ?);', [name, phone], (err, results, fields) => {
        if(err) throw err;

        console.log('Sent');
    });
});

app.get('/listContacts', (req, res) => {
    db.query('select * from contacts;', (err, results, fields) => {
        if(err) throw err;

        res.json(results);
        console.log(results);
    });
});

app.delete('/deleteContact/:contactID', (req, res) => {
    const {contactID} = req.params;
      
    db.query('delete from contacts where contactID = ?', [contactID], (err, results) => {
      if(err) throw err;

      console.log('Deleted');
   });
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
    console.log(`Server running on the port ${(port)}`);
});