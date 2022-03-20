const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({

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
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String
    },
    Date:{
        type: Date, 
        default: Date.now
    }
})

const User = mongoose.model('user',UserSchema);
module.exports = User;