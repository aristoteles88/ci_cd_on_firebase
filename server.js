require('dotenv').config();

const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Routes
app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});