const express = require("express");
const app = express();
const router = express.Router();
const User = require("../modules/user");



router.post('/signup',async(req,res)=>{
    let userr =await User.findOne({email:req.body.email});
    if(userr){
        res.status(400).send("user already exists")
    }
    else{
        res.send(req.body);
        const user = new User({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        });
        user.save();
    }
})



module.exports = router;