

var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:/";

mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
    if(err) throw err;
    var newdb=db.db("myuki");
    var query={place:/^j/}
    newdb.collection("clz").find(query).toArray (function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
            });
    
});
