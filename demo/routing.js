//CRUD common req methods are POST,GET,PUT,DELETE
const http = require('http');
const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-type':'text/html'});
    if(request.url === '/get'){
        response.write('reached get');
    if(request.method === 'GET'){
        response.end('GET');
    }
}
else if(request.url === '/post'){
    response.write('reached post');
    if(request.method === 'POST'){
        response.end('POST');
    }
}
else if(request.url === '/put'){
    response.write('reached put');
    if(request.method === 'PUT'){
        response.end('PUT');
    }
}
else if(request.url === '/delete'){
    response.write('reached delete');
    if(request.method === 'DELETE'){
        response.end('DELETE');
    }
}
else{
    response.end('NONE')
}
}).listen(3000,()=>console.log("http://localhost:3000"));