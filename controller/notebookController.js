

exports.getAllBooks = (req,res,next)=>{

    res.status(200).json({"message": 'all books retrived'});
}

exports.createBooks = (req,res,next)=>{

    console.log(req.body);
    res.status(200).json({"message": "hello"});
}


exports.updateBook = (req,res,next)=>{
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({"message": "hello"});
}

exports.deleteBook = (req,res,next)=>{

    console.log(req.body);
    res.status(200).json({"message": "hello"});
}