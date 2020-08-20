var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:/myuki";

MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
    if(err) throw err;
    console.log("Database created");
    db.close();
});




// var mongoClient=require("mongodb").MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if (err) throw err;
//     var dbo=db.db("myuki");
//     var query={place:/^j/};
//     dbo.collection("clz").find(query).toArray(function(err,result){
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });


// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var query={place:-1}
//     newdb.collection("clz").find().sort(query).toArray (function(err,res){
//         if(err) throw err;
//         console.log(res);
//         db.close();
//             });
    
// });



// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var query={place:"kandy"}
//     newdb.collection("staff").deleteOne(query,function(err,res){
//         if(err) throw err;
//         console.log(res);
//         db.close();
//             });
    
// });


// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var query={place:"jaffna"}
//     newdb.collection("staff").deleteMany(query,function(err,obj){
//         if(err) throw err;
//         console.log(obj.result.n+"documents deleted");
//         db.close();
//             });
    
// });



// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
   
//     newdb.dropCollection("clz",function(err){
//         if(err) throw err;
//         console.log("collection deleted");
//         db.close();
//             });
    
// });


// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var myss=[{name:"abi",age:21},{name:"suba",age:23},{name:"kee",age:33}]
//     newdb.collection("staff").insertMany(myss,function(err,res){
//         if(err) throw err;
//         console.log("documents added"+res.insertedCount);
//         db.close();
//             });
    
// });




// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var myss={name:"sam",age:31};
//     newdb.collection("staff").insertOne(myss,function(err,res){
//         if(err) throw err;
//         console.log("documents added"+res.insertedCount);
//         db.close();
//             });
    
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("staff").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var myquery={name:"abi"};
//     var newvalues={$set:{name:"abilakshan",age:25}};
//     newdb.collection("staff").updateOne(myquery,newvalues,function(err,res){
//         if(err) throw err;
//         console.log("documents updated");
//         db.close();
//             });
    
// });


// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var myquery={name:/^a/};
//     var newvalues={$set:{age:7}};
//     newdb.collection("staff").updateMany(myquery,newvalues,function(err,res){
//         if(err) throw err;
//         console.log(res.result.nModified+"documents updated");
//         db.close();
//             });
    
// });



// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
    
//     newdb.collection("staff").find().limit(4).toArray(function(err,obj){
//         if(err) throw err;
//         console.log(obj);
//         db.close();
//             });
    
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("staff").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

