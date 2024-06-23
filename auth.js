const passport =require('passport')
const LocalStrategy = require('passport-local').Strategy; // Ensure the correct import
const Person=require('./models/Person')

passport.use(new LocalStrategy(async (username, password, done) => { // The order of parameters should be the same
    try {
      //console.log('Received credentials:',username,password);
      const user = await Person.findOne({ username: username }); // comparing it with database username
      
      if (!user) {
        return done(null, false, { message: 'Incorrect username' }); // done has 3 parameters 
      }
  
    //   const isPasswordMatch = user.password === password ?true:false; // comparing it with database password
    const isPasswordMatch=await user.comparePassword(password)
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password' });
      }
    } catch (err) {
      return done(err);
    }
  }));

 module.exports=passport
