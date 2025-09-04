const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notebookSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    note:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    
    },
      user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
     }
 
})

module.exports = mongoose.model('Notebook',notebookSchema);