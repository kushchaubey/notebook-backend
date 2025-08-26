const express = require("express");
const routes = express.Router();

const noteBookController = require("../controller/notebookController")


routes.get('/', noteBookController.getAllBooks);
routes.post('/', noteBookController.createBooks);
routes.put('/update/:', noteBookController.updateBook);
routes.delete('/delete/:', noteBookController.deleteBook);


module.exports = routes