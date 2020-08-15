const mongodb= require('mongodb')
const {MongoClient,ObjectID}=mongodb
const id=new ObjectID
// console.log(id.id.length)
// console.log(id.toHexString().length)

const connectionurl='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionurl,{useUnifiedTopology:true},{useNewUrlParser:true},(error,client)=>{
if(error){
    return console.log('unable to connect')
}
 const db=client.db(databaseName)

//  find one data

 db.collection('users').findOne({_id:new ObjectID("5f11b3137cd31d0b68ff13a3")},(error,response)=>{
     if(error){
         console.log('unable to find')
     }
     console.log(response)
     
})

// find multiple data

// db.collection('users').find({age:20}).toArray((error,response)=>{
//     if(error){
//         console.log('unable to find')
//     }
//     console.log(response)
    
// })

// find number of data count

// db.collection('users').find({age:20}).count((error,count)=>{
//     console.log(count)
// })

//  inserting one data=insertone//many data=insertmany

// db.collection('users').insertOne({
//     id:id,
// name:'sheriff',
// age:20
// },
// (error,result)=>{
//     if(error){
//         console.log('unable to insert')
//     }
//     console.log(result.ops)
// })

// challenge

// db.collection('three').find({completed:true}).toArray((error,response)=>{
//     console.log(response)
// })

// })
// db.collection('three').findOne({_id:new ObjectID("5f11af7d6298600ca4396357")},(error,res)=>console.log(res))
})