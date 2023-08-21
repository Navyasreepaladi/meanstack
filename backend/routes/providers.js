var express = require('express');
var router = express.Router();
const providersController = require('../controllers/providers');
router.get('/',providersController.list);
router.get('/details/:id',providersController.details);
//: grab and store that id 
router.get('/edit/:id',providersController.edit);
router.post('/update/:id',providersController.update);//after clicking update routing to update successful page
router.get('/add-provider',providersController.addform);// to add new provider
router.post('/add',providersController.add);// to display that it got added
router.get('/delete/:id',providersController.delete);
module.exports= router;