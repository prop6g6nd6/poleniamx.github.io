const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Simple endpoint for subscribing
app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    // Store the email in your database here
    res.status(200).send({ message: 'Subscribed!' });
});

// Next.js API routes can be used as well
const next = require('next');
const nextApp = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    // Handle all other requests with Next.js
    app.all('*', (req, res) => {
        return handle(req, res);
    });

    // Get the port from the environment or use 5000
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
