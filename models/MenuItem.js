const mongoose=require('mongoose')

const menuItemschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
   taste: {
    type:String,
    enum:['sweet','spicy','sour'],
    required:true,
   },
   is_drink:{
    type: Boolean,
    default:false,       //default value is false

   },
   ingredients:{
        type:[String],
        default:[]
   },
   num_sales:{
    type: Number,
    default:0,
   }
})
const MenuItem=mongoose.model('MenuItem',menuItemschema)
module.exports=MenuItem