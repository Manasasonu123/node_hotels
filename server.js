const express = require('express');
const mongoose = require('mongoose'); // Moved mongoose require to the top for better structure
require('dotenv').config()

const app = express(); // app has blueprint of express

// Load the database connection setup
const db=require('./db');  //imported db from db.js //responsible fo db connection

const bodyParser=require('body-parser');
app.use(bodyParser.json())    //stored in req.body

const PORT=process.env.PORT || 3000;  //FOR port as default port is 3000


//Define a simple GET route
app.get('/', (req, res) => {
  res.send('Hello World...welcome\n We have list of menu');
});
//tried commenting

 //Import router files
 const personRoutes=require('./routes/personroutes')
 const menuItemRoutes=require('./routes/menuItemroutes')

 //Use the routers
 app.use('/person',personRoutes)
 app.use('/menu',menuItemRoutes)


// Start the server
app.listen(PORT, () => {
  console.log('Listening on port 3000');
});
