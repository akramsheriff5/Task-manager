const mongoose=require('mongoose')


mongoose.connect(process.env.MONGODB_URL,{
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