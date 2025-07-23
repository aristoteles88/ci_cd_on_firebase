require('dotenv').config();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5E_97lqAvIgcNUAYav2Qlnz8T06fuJfo",
  authDomain: "ci-cd-github-firebase.firebaseapp.com",
  projectId: "ci-cd-github-firebase",
  storageBucket: "ci-cd-github-firebase.firebasestorage.app",
  messagingSenderId: "1094992314811",
  appId: "1:1094992314811:web:b10e8da1381d278dacc49e"
};

const express = require('express');
const path = require('path');


const app = express();
app.initializeApp(firebaseConfig)
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