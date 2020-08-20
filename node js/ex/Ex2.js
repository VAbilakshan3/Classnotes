var fs = require('fs');
var http=require("http");

// fs.open('ukinode.txt', 'w', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });



fs.appendFile('ukinode.txt', 'Uki is a coding school by Yarl IT Hub, which offers a six months long intensive, in class training program that trains students to acquire skills needed to join tech companies as interns/ junior developers or become entrepreneurs.', function (err) {
    if (err) throw err;
    console.log('updated');
  });

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('ukinode.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(4000);

// fs.appendFile('ukinode.txt', '  Our students pass the hurdles to become developers, entrepreneurs, freelancers, project coordinators, QAs, and tech teachers.', function (err) {
//   if (err) throw err;
//   console.log('updated');
// }
// )
