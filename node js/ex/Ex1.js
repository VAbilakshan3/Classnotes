var http = require('http');

http.createServer(function (req, res) {
  res.write('Welcome to Uki. I am Abilakshan'); 
  res.end(); 
}).listen(8000); 