// //CHALLENGE APPU ITHU
const mongoose=require('mongoose')
// const validator=require('validator')
 const taskSchema=new mongoose.Schema({
    description:{
       type:String,
       trim:true,
       required:true
    },
    completed:{
type:Boolean,
default:false,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    },{
        timestamps:true
    },{toJSON:{virtuals:true}})

    
const task=mongoose.model('Task',taskSchema) 
module.exports=task