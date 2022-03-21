const express = require("express");
const app = express();
const router = express.Router();
const User = require("../modules/user");

//Hashing password
const bcrypt = require('bcrypt');
const saltRounds = 10;



router.post('/signup',async(req,res)=>{
    let userr =await User.findOne({email:req.body.email});
    if(userr){
        res.status(400).send("user already exists")
    }
    else{

        const salt =await bcrypt.genSalt(saltRounds);
        const hashed_pass =await bcrypt.hash(req.body.password, salt);

        res.send(req.body);
        const user = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashed_pass
        });
        user.save();
    }
})



module.exports = router;