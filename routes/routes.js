const express = require("express");
const routes = express.Router();
const validation = require("../middleware/validation");
const noteBookController = require("../controller/notebookController")
const auth = require("../middleware/auth")

routes.get('/', auth, noteBookController.getAllBooks);
routes.post('/', auth,  validation.notebookValidation, noteBookController.createBooks);
routes.put('/update/:id', auth, validation.idValidation , validation.notebookValidation, noteBookController.updateBook);
routes.delete('/delete/:id',auth, validation.idValidation , noteBookController.deleteBook);


module.exports = routes