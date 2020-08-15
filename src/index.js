const express=require('express')
require('./db/mongoose')

const userrouter=require('./routers/user')
const taskrouter=require('./routers/task')
const app=express()

const port=process.env.PORT||9000



app.use(express.json())
app.use(userrouter)
app.use(taskrouter)

app.listen(port,()=>{
    console.log('port is up on'+port)

})
// const multer=require('multer')
// const upload=multer[{
//     dest:'avatar'
// }]
// app.post('/user/me/profile',upload.Single('avatar'),(req,res)=>{
   
//    res.send()
// })

