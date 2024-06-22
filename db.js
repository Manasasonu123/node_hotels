//This file is required for connecting Mongodb database and Nodejs
//It represents Mongobd connection 
const mongoose = require('mongoose');

// Define MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'; // 'hotels' db automatically created

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
