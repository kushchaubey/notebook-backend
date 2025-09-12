
require("dotenv").config();

const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req,res,next)=>{
    
    const {userName, password} = req.body;


    const user = new User({
        userName:userName,
        password:password
    })

    user.save()

    .then(() => res.status(201).json({ message: "User created" }))
    .catch(err => res.status(500).json({ message: "Signup failed", error: err.message }));


}

exports.login = (req,res,next)=>{
    
    const {userName, password} = req.body;

    User.findOne({userName})
    .then(user=>{
        if(!user)return res.status(400).json({message:"Invalid Credentials"});

        return bcrypt.compare(password, user.password).then((isMatch)=>{
         if(!isMatch){
            return res.status(400).json({message:"Invalid Credentials"});
         } 
        const token = jwt.sign({userID: user._id},process.env.JWT_SECRET,{  expiresIn: "1h" })
         return res.status(200).json({
          message: "Login successful",
          token: token,
          userName: user.userName
        });
    })
    })
    .catch(err => res.status(500).json({ message: "Login failed", error: err.message }));

    

}

exports.checkUserName = (req,res,next)=>{

    return res.status(200).json({message:"userName available"});

}