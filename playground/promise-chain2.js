

require('../src/db/mongoose')

const Task=require('../src/models/task')



// Task.findByIdAndDelete('5f19499ca3ff6c12504644ca').then((task)=>{
//     console.log('delted',task)
//    return Task.countDocuments({completed:false}).then((result)=>{
// console.log(result)
//     }).catch((err)=>{
// console.log(err)
//     })
// })

const deleteandcount=async(id)=>{
    const task =await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return count
}

deleteandcount('5f194ab2cdf05f07583cb16a').then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
