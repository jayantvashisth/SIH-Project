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
        const user = User(req.body);
        user.save();
    }
})



module.exports = router;