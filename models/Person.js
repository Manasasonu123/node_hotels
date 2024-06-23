const mongoose=require('mongoose')
const bcrypt=require('bcrypt')   //to hash+salt the password 
//This is schema....defined in models
//Define the person

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true 
    },
    username:{ 
        required: true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
})

personSchema.pre('save',async function(next){
    const person = this;

    //hash the password only if it is modified or new
    if(!person.isModified('password'))   
        return next()
    try{
        //hash password generation
        const salt=await bcrypt.genSalt(10);     //it is responsible for adding salt...   longer the length more secure but high computation cost
        //hash password
        const hashpassword=await bcrypt.hash(person.password,salt)
        //override the plain password with hashed one
        person.password=hashpassword
        next()
    }catch(err){
        return next(err)
    }
})

personSchema.methods.comparePassword=async function(candidatePassword){
    try{
        //use bcrypt to compare the provided passord with the hashed password
        const isMatch=await bcrypt.compare(candidatePassword,this.password)
        return isMatch;
    }catch(err){
        throw err;
    }
}

//prince ----> sahgkdg73uwkhja
//login ---->  sonu

// sahgkdg73uwkhja----> extracts salt
//salt+sonu ------> hash -----> kdsuhksahakdkdla    
//compares = sahgkdg73uwkhja, kdsuhksahakdkdla   




//Create Person model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;