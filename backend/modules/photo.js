const mongoose = require("mongoose");
const { Schema } = mongoose;

const PhotoSchema = new Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        // minlength:4
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    photo:{
        type:String
    },
    Date:{
        type: Date, 
        default: Date.now
    }
})

const Photo = mongoose.model('photo',PhotoSchema);
module.exports = Photo;