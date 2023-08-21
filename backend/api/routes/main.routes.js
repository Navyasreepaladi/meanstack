var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');
//HTTP verbs POST ->CREATE, GET ->READ,PUT ->UPDATE, DELETE->DELETE(CRUD OPERATIONS)

//post /api/providers is shld direct here we dont give api bcoz in app.js we already passed api in app.use so it will be included
router.post('/providers',mainController.create);
//GET /api/providers
router.get('/providers',mainController.readAll);
//GET one /api/providers/123 ..specific one
router.get('/providers/:id',mainController.readOne);
//PUT  /api/providers/123
router.put('/providers/:id',mainController.update);
//Delete one provider /api/providers/123
router.delete('/providers/:id',mainController.deleteOne);
//delete all provider /api/providers
router.delete('/providers',mainController.deleteAll); 
//No matching api endpoints
router.post('/*',notFound)
router.get('/*',notFound)
router.put('/*',notFound)
router.delete('/*',notFound)
function notFound(req,res){
    res.status(400);
    res.send('Not valid endpoint');

}
module.exports=router; 