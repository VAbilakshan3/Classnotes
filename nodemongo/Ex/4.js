// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/student1";

// MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     console.log("Database created");
//     db.close();
// });



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } , function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("student1");
//   dbo.createCollection("​studentmarks", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } , function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("student1");
//   var details = [
//     { Name: 'Mala', maths_marks: '45',english_marks:'53',science_marks:'72'},
//     { Name: 'Vanu', maths_marks: '80',english_marks:'75',science_marks:'85'},
//     { Name: 'Kala', maths_marks: '32',english_marks:'46',science_marks:'53'},
//     { Name: 'Aruli', maths_marks: '78',english_marks:'85',science_marks:'80'},
//     { Name: 'Shayu', maths_marks: '80',english_marks:'76',science_marks:'65'},
//     { Name: 'Kumaran', maths_marks: '32',english_marks:'73',science_marks:'84'},
//     { Name: 'Lucky', maths_marks: '66',english_marks:'90',science_marks:'45'},
//     { Name: 'Gva', maths_marks: '71',english_marks:'75',science_marks:'56'},
//     { Name: 'Raam', maths_marks: '41',english_marks:'65',science_marks:'88'},
//   ];
//   dbo.collection("​studentmarks").insertMany(details, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });





var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
  if (err) throw err;
  var dbo = db.db("student1");
  dbo.collection("studentmarks").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});