const express = require('express')
const app= express()
require('dotenv').config();

const memoryModel = require('./models/memories')

const mongoose = require('mongoose')
const cors = require ('cors')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aniket:aniket5552@thetraveller.y7qinnp.mongodb.net/thetraveller?retryWrites=true&w=majority",()=>{
    console.log("DB connected")
})


port = process.env.PORT || 9002
app.listen( port,()=>{ 
    console.log(`SERVER RUNNING ON PORT ${port} `) 
})

app.get('/',(req,res)=>{
    res.send({mesaage:"The Traveller"})
})

app.get('/getMemories',(req,res)=>{
    res.send({message:"Get Memories"})
    // memoryModel.find({}, (err,result)=>{
    //     if(err){
    //         res.json(err);
    //     } else{
    //         res.json(result);
    //     }
    // })
})

app.post('/createMemory',async (req,res)=>{
    const memory = req.body
    const newMemory = new memoryModel(memory);
    await newMemory.save();
    res.send({message:"Memory Created!"})
})

app.delete('/delete/:id', (req,res)=>{
    const id =req.params.id
    memoryModel.findByIdAndRemove(id).exec()
    res.send("Item Deleted") 
})



