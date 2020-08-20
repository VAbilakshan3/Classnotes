var http=require("http");
var fs=require("fs");
http.createServer(function(req,res)

/*
{
fs.readFile('../Exercise/form.html',function(err,data)
{
res.writeHead(200,{'Content-Type':'text/html'});
res.write(data);
return res.end();
});
}).listen(4001);


{
    fs.readFile('../Exercise/index.html',function(err,data)
    {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
    });
    }).listen(4001);
*/
    {
        fs.readFile('node.html',function(err,data)
        {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
        });
        }).listen(4001);