const express = require("express");
const routes = express.Router();

const noteBookController = require("../controller/notebookController")


routes.get('/', noteBookController.getAllBooks);
routes.post('/', noteBookController.createBooks);
routes.put('/update/:id', noteBookController.updateBook);
routes.delete('/delete/:id', noteBookController.deleteBook);


module.exports = routes