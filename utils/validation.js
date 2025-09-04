const notebook = require("../model/notebook");
const User = require("../model/user");


exports.notebookValidation = (req,res,next)=>{

   const {title, note} = req.body;
   if(title=="" || title==null || title ==undefined){
     
    res.status(400).json({"message":"Title is not defined"})
    return;
   }else if(note=="" || note==null || note ==undefined){
     res.status(400).json({"message":"Note is not defined"})
     return;
   }

 next();


}

exports.idValidation =(req,res,next)=>{
    const id =  req.params.id;

   if(id=="" || id==null || id ==undefined){
     
    res.status(400).json({"message":"id is not defined"})

    return;
   }
   

 notebook.find({_id:id})
 .then(result=>{
    next();
 })
 .catch(e=>{
  console.log(e)
  res.status(500).json({ message: "Something went wrong" });

 })

}

exports.userNameValidation = (req,res,next)=>{
  
     const userName = req.body.userName;
     if(!userName || userName.trim() === ""){
      return res.status(400).json({"message":"id is not defined"})
     }

  User.findOne({ userName })
  .then(user => {
    if (user) return res.status(400).json({ message: "User already exists" });
    next();
  })
 .catch(e=>
  {
  console.log(e)
        res.status(500).json({ message: "Something went wrong" });

 })


}