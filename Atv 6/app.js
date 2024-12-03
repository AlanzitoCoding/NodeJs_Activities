const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mysql = require('mysql2');
const port = 8081;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2006Pa#*#',
    database: 'atv6'
})

db.connect((err) => {
    if(err) throw err;

    console.log('Successfully connected to the db!')
})

app.post('/createTask', (req, res) => {
    const {task} = req.body;

    if(!task){
        res.json({msg: 'Insert the task first!'});
        console.log('Insert the task first!')
        return;
    }

    db.query('insert into tasks(taskTask) value (?);', [task], (err, results, fields) => {
        if(err) throw err;

        console.log(task);
    })
})

app.get('/showTasks', (req, res) => {
    db.query('select * from tasks', (err, results, fields) => {
        if(err) throw err;

        res.json(results);
    })
})

app.put('/updateTask/:taskID', (req,res) =>{
    const {taskID} = req.params
    const {task} = req.body   
    const query = 'UPDATE tasks SET taskTask = ? WHERE taskID = ?'
    
    db.query(query, [task, taskID], (err,results) => {
        if(err){
            throw err
        }
            
        res.json({message: 'Dados atualizados!'})
    })
})
   
app.delete('/deleteTask/:taskID', (req,res) => {
    const {taskID} = req.params
    const query = 'DELETE FROM tasks WHERE taskID = ?'
      
    db.query(query, [taskID], (err,results) => {
      
      if(err){
        throw err
      } 

      res.json({message: 'Dados deletados!'})
   })       
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
    console.log(`Server running on port ${(port)}`);
});