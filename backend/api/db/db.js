const mongoose = require('mongoose');
const {Provider} = require('../models/provider');
//connection URI to MongoDB
const uri = 'mongodb://127.0.0.1:27017/provider_db';
// 27017 port num, call provider_db ,by putting it here once u made connection then its gng to create that db for u ,if already   
//there use it 
// to avoid few warnings
module.exports = mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
//module.exports = mongoose.connect(uri)
.then(result=>{
    console.log('connection successful!',result)
})
//we can also use anonymous func instead of then here
.catch(error=>console.log(error));

module.exports = Provider;