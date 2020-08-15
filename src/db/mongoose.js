const mongoose=require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true ,
    useFindAndModify:false

})



// const mytask= new task({
//     description:"     sleep       ",
//     completed:true
// })
// mytask.save().then(()=>{
// console.log(mytask)
// }).catch((error)=>{
// console. log('error',error)
// })