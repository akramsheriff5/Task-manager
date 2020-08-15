require('../src/db/mongoose')
const user=require('../src/models/user')




// user.findByIdAndUpdate('5f19a7f7815c65137caf974c',{age:21}).then((users)=>{
//     console.log(users)
//     return user.countDocuments({age:21}).then((result)=>{
//         console.log(result)
//     }).catch((err)=>{
// console.log(err)
//     })

// })

const updateageandcount=async(id,email)=>{
    const updates=await user.findByIdAndUpdate(id,{email})
    const count=await user.countDocuments({age:21})
   
    return count
}

updateageandcount('5f1944753e793e0dacedef0c','aksheriff54@gmail.com').then((result)=>{
    console.log(result)
}).catch((e)=>{
console.log(e)
})



