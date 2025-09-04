const notebook = require("../model/notebook");


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
 .catch(e=>{console.log(e)})







}