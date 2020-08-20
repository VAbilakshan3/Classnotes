var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:/";

mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
    if(err) throw err;
    var newdb=db.db("myuki11");
    var myss=[{_id:01,name:"abi",age:21,ass_id:001},{_id:02,name:"suba",age:23,ass_id:002},{_id:03,name:"kee",age:33,ass_id:003}]
    newdb.collection("assignment1").insertMany(myss,function(err,res){
        if(err) throw err;
        console.log("documents added"+res.insertedCount);
        db.close();
            });
    
});




var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:/";

mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
    if(err) throw err;
    var newdb=db.db("myuki11");
    var myss=[{_id:001,ass_id:001,topic:"idea1"},{_id:002,ass_id:002,topic:"idea2"},{_id:003,ass_id:003,topic:"idea3"}]
    newdb.collection("assignmentdetails1").insertMany(myss,function(err,res){
        if(err) throw err;
        console.log("documents added"+res.insertedCount);
        db.close();
            });
    
});








var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:/";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var newdb = db.db("myuki11");
  newdb.collection('assignment').aggregate([
    { $lookup:
       {
         from: 'assignmentdetails',
         localField: 'ass_id',
         foreignField: 'ass_id',
         as: 'assdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});