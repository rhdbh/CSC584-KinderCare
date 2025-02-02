const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Enable CORS to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle the registration request
app.post('/registerUser', (req, res) => {
    const { uid, userName, email, phone } = req.body;

    // Here, you would save the user data to your database
    // For demonstration, we just log it
    console.log("Received registration data:", { uid, userName, email, phone });

    // Respond with a success message
    res.status(200).json({ message: 'User registered successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
