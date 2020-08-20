// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:/music2";

// MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
//     if(err) throw err;
//     console.log("Database created");
//     db.close();
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,{ useUnifiedTopology: true } , function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("music2");
//   dbo.createCollection("songdetails​2", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });






var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


mongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
    if(err) throw err;
    var newdb=db.db("myuki");
    var myss=[{SongName: 'Thaniye Thananthaniye', Film: 'Rhythm',MusicDirector:'A.R.Rahman',Singer:'Shankar mahadevan'},{SongName: 'Evano Oruvan', Film: 'Alai Payuthey',MusicDirector:'A.R.Rahman',Singer:'Swarnalatha'},{SongName: 'Roja Poonthottam', Film: 'Kannukkul Nilavu',MusicDirector:'Ilaiyaraaja',Singer:['Unnkrishnan','Anuradha Sriram']},{SongName: 'Vennilave Vennilave Vinnaithaandi', Film: 'Minsara Kanavu',MusicDirector:'A.R.Rahman',Singer:['Hariharan','Sadhana Sargam']},{SongName: 'Sollamal Thottu Chellum Thendral', Film: 'Dheena',MusicDirector:'Yuvan Shankar Raja',Singer:'Hariharan'}]
    newdb.collection("songdetails").insertMany(myss,function(err,res){
        if(err) throw err;
        console.log("documents added"+res.insertedCount);
        db.close();
            });
    
});













var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true } ,  function(err, db) {
  if (err) throw err;
  var dbo = db.db("music2");
  dbo.collection("songdetails2").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});