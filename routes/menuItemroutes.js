const express=require('express')
const router=express.Router()
const MenueItem=require('../models/MenuItem')
 

 router.post('/',async(req,res)=>{
  try{
  const data=req.body
  const newMenu=new MenueItem(data)
  const response=await newMenu.save()
  console.log('data saved')
    res.status(200).json(response)
  }catch(err){
    console.log(err)
    res.status(500).json({error:'Internal server error'})
  }
 })

 router.get('/',async(req,res)=>{
  try{
  const data=await MenueItem.find()
  console.log('data fetched')
    res.status(200).json(data)
  }catch(err){
    console.log(err)
    res.status(500).json({error:'Internal server error'})
  }
 })

 router.get('/:tasteType',async(req,res)=>{
    const tasteType=req.params.tasteType
    try{
        if(tasteType=="sweet" ||tasteType=="sour"||tasteType=="spicy"){
            const response=await MenueItem.find({taste:tasteType})
            console.log("Data saved")
            res.status(200).json(response)
        }else{
            res.status(404).json({error:'Invalid taste type'})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})

    }
 })
 router.put('/:id',async(req,res)=>{
    try{
        const menuId=req.params.id //extract id fromm url parameter
        const updatedmenuData=req.body  //updated data for person
        const response=await MenueItem.findByIdAndUpdate(menuId,updatedmenuData,{
            new:true,  //return the updated document
            runValidators:true //run mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'menue item not found'})
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
        const menuId=req.params.id
        const response=await MenueItem.findByIdAndDelete(menuId)
        if(!response){
            return res.status(404).json({error:'Menu item not found'})
        }
        console.log("Data updated")
        res.status(200).json({message:'menu item deleted successfully'})
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }

   })

 module.exports=router
