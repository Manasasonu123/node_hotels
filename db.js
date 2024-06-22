//This file is required for connecting Mongodb database and Nodejs
//It represents Mongobd connection 
const mongoose = require('mongoose');
require('dotenv').config()

// Define MongoDB connection URL
//const mongoURL =process.env.LOCAL_URL; // 'hotels' db automatically created
const mongoURL= process.env.MONGODB_URL           //MongoDB Atlas connection

// Set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true // Fixed typo here
});

//Get default connection
//Mongoose maintain default connection object representing the Mongodb connection 
const db = mongoose.connection;

//Used to handle events and interact with database
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.log('MongoDB connection error: ' + err);
});

db.on('disconnected', () => {
  console.log('MongoDB server disconnected');
});

// Export database connection
module.exports = db;
