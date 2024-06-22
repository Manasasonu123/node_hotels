const express=require('express')
const Person = require('../models/Person')
const router=express.Router()

router.post('/',async(req,res) => {

    //  const data=req.body    //Assuming the request body contains the person data
      
    //   //create newPerson doc using Mongoose model
    //  const newPerson=new Person(data)
    
    //   //Save the new person to database
    //   newPerson.save((error,savedperson) => {
    //     if(error){
    //     console.log('Error saving person:',error)
    //     res.status(500).json({error:'Internal server error'})   //http status code is used to ive message
    //     }else{                                             //500-server error response
    //       console.log('data saved successfully')
    //       res.status(200).json(savedperson)              //200-successfull response
    //     }
    //   });
    
    //callback is no longer used so  async and await is used
        
      try{
        const data=req.body    //Assuming the request body contains the person data
      
        //create newPerson doc using Mongoose model
       const newPerson=new Person(data)
      
        //Save the new person to database
        const response=await newPerson.save()
        console.log('data saved')
        res.status(200).json(response)
          
      }catch(err){  //contains error from newPerson
        console.log(err)
        res.status(500).json({error:'Internal server error'})
      }
      
     })

 //GET method to get the person
router.get('/',async(req,res)=>{
    try{
    const data=await Person.find()
    console.log("Data fetched")
    res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
    
})

router.get('/:workType',async(req,res)=>{

    const workType=req.params.workType
      try{
        if(workType=="chef" || workType=="manager"|| workType=="waiter"){
        const response=await Person.find({work: workType})  //to find required worktype
        console.log('Response fetch')
        res.status(200).json(response)
        }else{
        res.status(404).json({error:'Invalid work type'})
        }  
      }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
      }
  
   })

   router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id //extract id fromm url parameter
        const updatedPersonData=req.body  //updated data for person
        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,  //return the updated document
            runValidators:true //run mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log("Data updated")
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
   })

   router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id
        const response=await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log("Data deleted")
        res.status(200).json({message:'person deleted successfully'})
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }

   })

 module.exports=router  

