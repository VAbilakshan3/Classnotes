

//Ex1

//collection create


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } , function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.createCollection("songdetails​", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });



//insert


// var mongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";


// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var myss=[{SongName: 'Thaniye Thananthaniye', Film: 'Rhythm',MusicDirector:'A.R.Rahman',Singer:'Shankar mahadevan'},{SongName: 'Evano Oruvan', Film: 'Alai Payuthey',MusicDirector:'A.R.Rahman',Singer:'Swarnalatha'},{SongName: 'Roja Poonthottam', Film: 'Kannukkul Nilavu',MusicDirector:'Ilaiyaraaja',Singer:['Unnkrishnan','Anuradha Sriram']},{SongName: 'Vennilave Vennilave Vinnaithaandi', Film: 'Minsara Kanavu',MusicDirector:'A.R.Rahman',Singer:['Hariharan','Sadhana Sargam']},{SongName: 'Sollamal Thottu Chellum Thendral', Film: 'Dheena',MusicDirector:'Yuvan Shankar Raja',Singer:'Hariharan'}]
//     newdb.collection("songdetails").insertMany(myss,function(err,res){
//         if(err) throw err;
//         console.log("documents added"+res.insertedCount);
//         db.close();
//             });
    
// });



  //find

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("songdetails").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("songdetails").find({MusicDirector:'A.R.Rahman'}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("songdetails").find({MusicDirector:'A.R.Rahman',Singer:'Unnkrishnan'}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });






// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   var mysong={SongName: 'Thaniye Thananthaniye'}
//   dbo.collection("songdetails").deleteOne(mysong,function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });





// var mongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";


// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var myss={SongName: 'Tharrame Tharrame', Film: 'Kadaaram Kondan',MusicDirector:' M. Ghibran',Singer:'Sid Sriram'};
//     newdb.collection("songdetails").insertOne(myss,function(err,res){
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
//   dbo.collection("songdetails").find({ Film: 'Minsara Kanavu',Singer:'Hariharan'},{ projection: { _id: 0, Songname: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("songdetails").find({ },{ projection: { _id: 0, Singer: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });











//Ex2




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } , function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.createCollection("studentmarks", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });





// var mongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";


// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var myss=[{ Name: 'Mala', maths_marks: 45,english_marks:53,science_marks:72},
//         { Name: 'Vanu', maths_marks: 80,english_marks:75,science_marks:85},
//         { Name: 'Kala', maths_marks: 32,english_marks:46,science_marks:53},
//         { Name: 'Aruli', maths_marks: 78,english_marks:85,science_marks:80},
//         { Name: 'Shayu', maths_marks: 80,english_marks:76,science_marks:65},
//         { Name: 'Kumaran', maths_marks: 32,english_marks:73,science_marks:84},
//         { Name: 'Lucky', maths_marks: 66,english_marks:90,science_marks:45},
//         { Name: 'Gva', maths_marks: 71,english_marks:75,science_marks:56},
//         { Name: 'Raam', maths_marks: 41,english_marks:65,science_marks:88}]
//     newdb.collection("studentmarks").insertMany(myss,function(err,res){
//         if(err) throw err;
//         console.log("documents added "+res.insertedCount);
//         db.close();
//             });
    
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   var myquery = { Name: 'Mala' };
//   var newvalues = { $inc: { maths_marks: 6} };
//   dbo.collection("studentmarks").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").find({maths_marks:{$gt:50} },{ projection: { _id: 0,Name: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").aggregate([{$addfields:{Average:{$avg:["$maths_marks","$english_marks","$science_marks"]}}}]).toArray(function(err, res) {
//   if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });






// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   var myquery = { Name: 'Lucky' };
//   var newvalues = { $set: { science_marks: 75} };
//   dbo.collection("studentmarks").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").find({Name:"Lucky"}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });






// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").find({$and :[{maths_marks:{$gt:50}},{science_marks:{$gt:50}},{english_marks:{$gt:50}} ]},{ projection: { _id: 0,Name: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });







// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").find({$and :[{maths_marks:{$lt:50}},{english_marks:{$gt:50}} ]},{ projection: { _id: 0,Name: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").find({$and :[{maths_marks:{$lt:40}},{science_marks:{$lt:40}} ]},{ projection: { _id: 0,Name: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });






// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   var myquery = { Name: 'Raam' };
//   var newvalues = ({},{ $unset: { science_marks: 1} });
//   dbo.collection("studentmarks").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").find({Name:"Raam"}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   var myquery = { Name: "John" };
//   var newvalues ={ $set: {Name:"John",maths_marks:87 ,english_marks: 23}, };
//   var upsert={upsert:true};
//   dbo.collection("studentmarks").updateOne(myquery, newvalues,upsert, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").find({Name:"John"}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   var myquery = { Name: "John" };
//   var newvalues ={ $rename: {"english_marks":"science_marks"}, };
//   dbo.collection("studentmarks").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });




// var mongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/";

// mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     var newdb=db.db("myuki");
//     var query={Name:"Kumaran"}
//     newdb.collection("studentmarks").deleteOne(query,function(err,res){
//         if(err) throw err;
//         console.log(res);
//         db.close();
//             });
    
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("myuki");
//   dbo.collection("studentmarks").find({Name:"Kumaran"}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });






var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
  if (err) throw err;
  var dbo = db.db("myuki");
  dbo.collection("studentmarks").find({$and :[{maths_marks:{$gt:10}},{science_marks:{$gt:10}} ],$or:[{Name:"Aruli"},{Name:"Kala"}]},{ projection: { _id: 0,Name: 1,maths_marks:1,science_marks:1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
