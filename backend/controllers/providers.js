const providers = require('../models/providers')

//list
module.exports.list= function(req,res){
    res.render('providers/providers-list',{title:'Service Providers',providers : providers})// 2nd providers is above const and 1st providers actual 
    //variable of the template
}
//details
module.exports.details= function(req,res){
    let id = req.params.id;// this is cmg from routers.get ('/details/:id)
    let provider = providers.find(provider => provider.id == id)
    res.render('providers/providers-details',{id:id,title:'Service Providers details',company : provider.company})
}
//edit
module.exports.edit= function(req,res){
    let id = req.params.id;// this is cmg from routers.get ('/details/:id)
    let provider = providers.find(provider => provider.id == id)
    res.render('providers/providers-edit',{id:id,title:'Service Providers edits',provider : provider})//instead of just name 
    //whole object we need
}
//update form
module.exports.update= function(req,res){
    let id = req.params.id;// this is cmg from routers.get ('/details/:id) and param is for get & body is for post 
    let provider = providers.find(provider => provider.id == id)
    provider.firstname=req.body.firstname;
    provider.lastname=req.body.lastname;
    provider.position=req.body.position;
    provider.company.company_name=req.body.company_name;
    provider.company.address=req.body.address;
    provider.company.address2=req.body.address2; 
    provider.company.city=req.body.city;
    provider.company.state=req.body.state;
    provider.company.postal_code=req.body.postal_code;
    provider.company.email=req.body.email;
    provider.company.phone=req.body.phone;
    provider.company.description=req.body.description;
    provider.company.tagline=req.body.tagline;
    
    res.render('providers/providers-update',{id:id,title:'update'})//instead of just name 
    //whole object we need
}
//add form
module.exports.addform= function(req,res){
    res.render('providers/providers-add-form',{title:'Add'})
   
}
//add provider form
module.exports.add= function(req,res){
    let min=100000;
    let max=999999;
    let id = Math.floor(Math.random()*(max-min)+min);// to generate a 6 digit random number
    //create provider object
    let provider={// create an object
    id: id,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    position:req.body.position,
    company:{
        company_name:req.body.company_name,
        address:req.body.address,
        address2:req.body.address2,
        city:req.body.city,
        state:req.body.state,
        postal_code:req.body.postal_code,
        email:req.body.email,
        phone:req.body.phone,
        description:req.body.description,
        tagline:req.body.tagline,
    }
    
}
//add new provider to list
providers.push(provider);// update the json (here its model/provide.js)
    res.render('providers/providers-add',{title:'Added'})
   
}
//delete provider
module.exports.delete= function(req,res){
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    let company=provider.company.company_name;
    //to find index of that particular array in the model/providers.js array 
    let idx=providers.indexOf(providers.find(provider => provider.id == id));
    //remove the element at the index of "idx"
    providers.splice(idx,1)
    // 2nd paramater of splice tells how many elements to remove after the index
    res.render('providers/providers-delete',{title:'Delete',company : company})
}