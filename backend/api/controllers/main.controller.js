var providers = require("../models/providers.models"); //make provider var instead of const as in delete all we are changing value
//of the providers
//CRUD operations
//HTTP verbs POST ->CREATE, GET ->READ,PUT ->UPDATE, DELETE->DELETE(CRUD OPERATIONS)
const Provider = require("../db/db");
const { ObjectId } = require("mongodb");
//util functions
//check if list is empty
function isEmptyList(obj) {
  return !obj || obj.length == 0 || Object.keys(obj).length == 0;
}
// Handle error
function handleError(res, error) {
  res.status(200);
  res.send("Something went wrong.\n " + error);
}
//POST
module.exports.create = function (req, res) {
  try {
    var provider = req.body;
    Provider.create(provider)
      .then((result) => {
        res.status(201);

        res.send(result);
      }) 
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};
//GET ALL
//uri(uniform resource identifier): /api/providers
module.exports.readAll = function (req, res) {
  // similar to list
  try {
    Provider.find()
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(400);
          res.send("List is empty");
        }
        res.status(200); // we need to set/issue status before sending
        res.send(result); //these providers is the providers on the top from models
        //instead of rendering we need to send it to wherever its been sent from
        // we can keep send or if json format put json
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    handleError(res, error);
  }
};
//GET ONE
//uri(uniform resource identifier): /api/providers/123
module.exports.readOne = function (req, res) {
  try {
    let id = (req.params.id);
    Provider.find({ 'id': id })
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(400);
          res.send("List is empty");
        }
        //   let id = req.params.id; // this is cmg from routers.get ('/details/:id)
        //   let provider = providers.find((provider) => provider.id == id);
        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
    //similar to edit
  } catch (error) {
    //the above variable provider we are passing
    handleError(res, error);
  }
};

//PUT
//uri(uniform resource identifier): /api/providers
module.exports.update = function (req, res) {
  try {
    let id = (req.params.id); // this is cmg from routers.get ('/details/:id) and param is for get & body is for post
    let provider = req.body;
    Provider.findOneAndUpdate({ 'id': id }, provider, { new: true }) // if we want to update only one particular field then in second param give
      //that field intead of provider
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(404);
          res.send("List is empty so cannot update");
        }

        res.status(200);
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    //the above variable provider we are passing
    handleError(res, error);
  }
};
//DELETE ONE
//uri(uniform resource identifier): /api/providers/123
module.exports.deleteOne = function (req, res) {
  try {
    let id = (req.params.id); // TO MOVE THIS WE CAN USE SHORTCUT BY SELECTING AND ALT+UP ARROW/DOWN
    Provider.findOneAndDelete({'id':id })
      .then((result) => {
        if (isEmptyList(result)) {
          res.status(400);
          res.send("List is empty cannot delete");
        }
        // 2nd paramater of splice tells how many elements to remove after the index
        res.status(200); //res.status(404) ..its not there its deleted
        res.send(result);
      })
      .catch((error) => handleError(res, error));
  } catch (error) {
    //the above variable provider we are passing
    handleError(res, error);
  }
};
//DELETE ALL
//uri(uniform resource identifier): /api/providers
module.exports.deleteAll = function (req, res) {
  try{
    Provider.deleteMany({})
    .then(result=>{
      if (result.deletedCount=== 0) {
        res.status(400);
        res.send("List is empty cannot delete");
      }
    
      res.status(200);
      res.send("All providers deleted .\n"+result);
      
    }
      )
.catch(error=>handleError(res,error));
  }catch(error){
    handleError(res,error);
  }
};
