const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8081;

function passwordCriteria(password){
    const criteria = {
        minLength: password.length >= 8,
        hasUppercase: /[A-Z]/.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    return {
        isValid: Object.values(criteria).every(Boolean),
        details: criteria
    };
}

app.post('/testPassword', (req, res) => {
    const {password} = req.body;

    if(!password){
        res.json({msg: 'Please, insert your password!'});
        return;
    }

    const result = passwordCriteria(password);

    if(result.isValid){
        res.json({msg: 'Valid'});
    }
    else{
        res.json({msg: 'Invalid', criteria: result.details })
    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
    console.log(`Server running on the port ${(port)}.`);
});