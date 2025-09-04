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
    
    } 
})

module.exports = mongoose.model('Notebook',notebookSchema);