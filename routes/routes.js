const express = require("express");
const routes = express.Router();
const validation = require("../utils/validation");
const noteBookController = require("../controller/notebookController")


routes.get('/', noteBookController.getAllBooks);
routes.post('/', validation.notebookValidation, noteBookController.createBooks);
routes.put('/update/:id',validation.idValidation , validation.notebookValidation, noteBookController.updateBook);
routes.delete('/delete/:id', validation.idValidation , noteBookController.deleteBook);


module.exports = routes