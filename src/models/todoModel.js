const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true //boşlukları silerek veritabanına kaydeder.
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},{collection:"Todo", timestamps: true})


//diğer sayfalardan modele erişebilmek için
const todo = mongoose.model("Todo", todoSchema)
module.exports = todo