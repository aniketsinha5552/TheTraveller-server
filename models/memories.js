const mongoose = require('mongoose')

const memorySchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    desc:{
        type:String,
        required: true,
    },
    url: {
        type:String,
        required:true,
    },
    date:{
        type: String,
        required:true,
    }
});

const memoryModel = mongoose.model("memories", memorySchema)

module.exports = memoryModel