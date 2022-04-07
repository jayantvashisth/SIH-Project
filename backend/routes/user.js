const express = require("express");
const app = express();
const router = express.Router();
const User = require("../modules/user");
const jwt = require('jsonwebtoken');

//Hashing password
const bcrypt = require('bcrypt');
const saltRounds = 10;

// jwt token 
const JWT_SECRET = "qwerty";

router.post('/signup',async(req,res)=>{
    let success = true;
    let userr =await User.findOne({email:req.body.email});
    if(userr){
        success = false;
        res.status(400).send("user already exists")
    }
    else{
        success = true;
        const salt =await bcrypt.genSalt(saltRounds);
        const hashed_pass =await bcrypt.hash(req.body.password, salt);

        // res.send(req.body);
        const user = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashed_pass,
            passString : req.body.passString
        });
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({success, authToken })
        user.save();
    }
})

// route for login endpoint .../user/login

router.post('/login', async(req,res)=>{
    const { username, password , passString } = req.body;

    let user = await User.findOne({ username });
    let success = true;
        if (!user) {
            success = false;
            return res.status(400).json({ error: "pls try with correct credentials" });
        }

        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare && passString!=user.passString) {
            success = false;
            return res.status(400).json({success, error: "pls try with correct password" });

        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        // success = true;
        res.json({ success,authToken });
})



module.exports = router;