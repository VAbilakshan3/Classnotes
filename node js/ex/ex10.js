
var http=require('http');
var test=require('./ex9');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(test.avgsum(123,321))
    // res.write('sum = '+test.sum(123,321));
    // res.write('Average = '+test.avg(123,321));
}).listen(4000)