
const Notebook = require("../model/notebook");
exports.getAllBooks = (req,res,next)=>{

    Notebook.find().sort({date:-1})
    .then((result)=>{
    
        res.status(200).json({"message": 'all books retrived', data:result});


    })
    .catch((e)=>{
        console.log(e);
        res.status(500).json({"message": 'something went wrong'});

    })
}

exports.createBooks = (req,res,next)=>{

    const {title, note} = req.body;

    const notebook = new Notebook({
        title:title,
        note:note,
        
    })

    notebook.save()
    .then((result)=>{
          console.log(result);
              res.status(201).json({"message": "note saved"});

    })
    .catch(e=>{
        console.log(e)
        res.status(500).json({"message": 'something went wrong'});

    });
}


exports.updateBook = (req,res,next)=>{
   // console.log(req.params.id);
    const {title,note} = req.body
    const id = req.params.id

   Notebook.findByIdAndUpdate(id,{title:title, note:note}, { new: true, runValidators: true }
)
   .then(updatedNote=>{
    console.log("updated: ", updatedNote);
    if(!updatedNote)return res.status(404).json({ message: "Notebook not found" });
    res.status(200).json({"message": "notebook updated"});
    
   }).catch(e=>{
        console.log(e)
        res.status(500).json({"message": 'something went wrong'});
       
    });

}

exports.deleteBook = (req,res,next)=>{

    const id = req.params.id

   Notebook.findByIdAndDelete(id)
   .then(deletedNote=>{
      console.log(deletedNote);
      if (!deletedNote) return res.status(404).json({ message: "Notebook not found" });

    res.status(200).json({"message": "notebook Deleted"});
    
   }).catch(e=>{
        console.log(e)
        res.status(500).json({"message": 'something went wrong'});
       
    });
}