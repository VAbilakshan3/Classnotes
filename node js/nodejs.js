var http=require("http");
var url=require("url");
//create a server

http.createServer(function(req,res)


/*
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Hi I'm Abi.....!!!");
    res.write(" I'm studying in uki.. ");
    res.write(" I'm Happy to study here.....!!!");
    res.write(req.url)


    res.end();
}
).listen(4000);
*/
{
    res.writeHead(200,{'Content-Type':'text/html'});

    var qu=url.parse(req.url,true).query;
    var text=qu.year+" "+qu.month;
    res.write(text);
    res.end();
}).listen(4004);