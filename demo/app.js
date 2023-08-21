/*const http = require('http');
 http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
   // res.write();
    res.end('<h2>hiii navya</h2>');
}).listen(3000,()=>console.log("http://localhost:3000"));
/*const http = require('http');
const server = http.createServer((req,res)=>{ // we can create multiple servers on same file if we use variable
    res.writeHead(200,{'Content-type':'text/html'});//header of response 200 is ok 
    res.write('<h2>hiii navya</h2>');
    res.end();//without this it will be forever loading (webpage)
})
server.listen(3000,()=>console.log("http://localhost:3000"));//ananymous function is optional*/
const http = require('http');
const server1 = http.createServer((req,res)=>{ 
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h2>hiii navya</h2>');
    res.end();
})
server1.listen(3000,()=>console.log("http://localhost:3000"))
const server2 = http.createServer((req,res)=>{ 
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h2>hiii navya sree</h2>');
    res.end();
})
server2.listen(4000,()=>console.log("http://localhost:4000"))