const http = require('http');
const Server = http.createServer((req,res)=>{
  console.log("request recived ");
  res.writeHead(200,{'content-type':'text/html'});
  if(req.url==='/home'){
    res.write('hello from home page');
  }
  else if(req.url==='/about'){
    res.write('hello from about page');
  }
  else{
    res.write('kuch bhi');
  }
  res.end();
});
Server.listen(3000,()=>{
  console.log('server running on address http://localhost:3000');
});