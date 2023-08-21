const mongoose = require('mongoose');
//DEFINE A SCHEMA
const Schema = mongoose.Schema;
//create a sub schema
const companySchema = new Schema({
    "company_name": {type:String, required:true},
    "address": {type:String, required:true},
    "address2": String,
    "city": {type:String, required:true},
    "state": {type:String, required:true},
    "postal_code": {type:String, required:true},
    "phone": {type:String, required:true},
    "email":{type:String, required:true,unique:true},
    "description": String,
    "tagline": String
});
//Create provider schema(top-level doc)
const providerSchema = new Schema({
    //id automatically generated
    "id": {type:Number, required:true,unique:true},
    "firstname": {type:String, required:true},
        "lastname": {type:String, required:true},
        "position": String,
        "company": companySchema
});
//while passing it follow order
module.exports ={providerSchema,companySchema}