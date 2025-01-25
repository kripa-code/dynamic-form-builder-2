// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    // Handle form submission
    console.log('Form Data:', req.body);
    res.json({ message: 'Form submitted successfully', data: req.body });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
