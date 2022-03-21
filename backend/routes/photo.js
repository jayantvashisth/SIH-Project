const express = require("express");
const app = express();
const router = express.Router();
const Photo = require("../modules/photo");

//middleware
const upload = require("../middleware/upload")


router.post('/photo',upload.array('photo[]'),async(req,res)=>{
    let userr =await Photo.findOne({email:req.body.email});
    if(userr){
        res.status(400).send("user already exists")
    }
    else{
        res.send(req.body);
        const user = new Photo({
            username : req.body.username,
            email : req.body.email
        });
        // if(req.file){
        //     user.photo = req.file.path
        // }

        if(req.files){
            let path = '';
            req.files.forEach(function(files,index,arr){
                path=path+files.path+','
            })
            path=path.substring(0,path.lastIndexOf(','))
            user.photo = path;
        }
        user.save();
    }
})



module.exports = router;