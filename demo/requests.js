//to send a data or request to the server to check thr output
const http = require('http')
const data =JSON.stringify({
    title : 'test data'
    // pass some data
})
const options = {// we can add details of whole req ,we can even  put this in body
    hostname: 'localhost',
    port:3000,//here we give port num we are sending to
    path:'/',
    method: 'POST' ,//here we will tell type of msg ,so the server in httpreq.js wil process this msg and in options it will look 
    //for method 
    headers: {
        'Content-type' : 'application/json',
        'Content-Length' : data.length

    }

}
// we can use http.get or http.request both have same functionality in request we need to use end function in get we dont have to
const request = http.request(options,response =>{//anonymous function
response.on('data',chunk =>{
    process.stdout.write(chunk);//same as console log process in global
})
})
request.on('error',error =>{
    console.error(error);
})
request.end();