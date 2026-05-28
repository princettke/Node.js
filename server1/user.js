const http = require('http');
const server = http.createServer(( req, res)  => {
  console.log ("Req");
  console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>princeserver</title></head>');
  res.write('<body><h1>welcome to home </h1>')
  res.write('<form method="POST" action="/sumbit-details">');
  res.write('<label>Name:</label>');
  res.write('<input type="text" name="username" placeholder="enter your name" required><br><br>');
  res.write('<label>Gender:</label><br>');
  res.write('<input type="radio" name="gender" value="male"> Male<br>');
  res.write('<input type="radio" name="gender" value="female"> Female<br>');
  res.write('<input type="radio" name="gender" value="other"> Other<br><br>');
  res.write('<input type="submit" value="Submit">');
  res.write('</form>'); 
  res.write ('</body>');
  res.write('</html>');
  return res.end();
  } else if(req.url==='/products'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>princeserver</title></head>');
  res.write('<body><h1>get your fav products </h1></body>');
  res.write('</html>');
   return res.end();

  } else{
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>princeserver</title></head>');
  res.write('<body><h1>hello from prince server</h1></body>');
  res.write('</html>');
  res.end();
  

  }
 
});
const PORT = 3000;
server.listen(PORT,()=>{
console.log(`server running on address http://localhost:${PORT}`)
});