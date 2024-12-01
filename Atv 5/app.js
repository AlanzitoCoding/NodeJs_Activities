const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const port = 8081;

function countWords(text) {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

app.post('/showCounting', upload.single('file'), (req, res) => {
    const filePath = req.file.path;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return res.status(500).json({ msg: 'Error reading the file.' });
        }

        const wordCount = countWords(data);
        res.json({ msg: `The file contains ${wordCount} words.` });

        fs.unlink(filePath, unlinkErr => {
            if (unlinkErr) console.error('Error deleting the file:', unlinkErr);
        });
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
    console.log(`Server running on the port ${(port)}`);
});