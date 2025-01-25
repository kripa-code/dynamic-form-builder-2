// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle form submission
app.post('/submit', (req, res) => {
    // Log the form data
    console.log('Form Data:', req.body);

    // Respond with a success message
    res.json({ message: 'Form submitted successfully', data: req.body });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
