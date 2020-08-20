
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true } , function(err, db) {
  if (err) throw err;
  var dbo = db.db("music1");
  var songdetails = [
    { SongName: 'Thaniye Thananthaniye', Film: 'Rhythm',MusicDirector:'A.R.Rahman',Singer:'Shankar mahadevan'},
    { SongName: 'Evano Oruvan', Film: 'Alai Payuthey',MusicDirector:'A.R.Rahman',Singer:'Swarnalatha'},
    { SongName: 'Roja Poonthottam', Film: 'Kannukkul Nilavu',MusicDirector:'Ilaiyaraaja',Singer:['Unnkrishnan','Anuradha Sriram']},
    { SongName: 'Vennilave Vennilave Vinnaithaandi', Film: 'Minsara Kanavu',MusicDirector:'A.R.Rahman',Singer:['Hariharan','Sadhana Sargam']},
    { SongName: 'Sollamal Thottu Chellum Thendral', Film: 'Dheena',MusicDirector:'Yuvan Shankar Raja',Singer:'Hariharan'}
  ];
  dbo.collection("songdetails​1").insertMany(songdetails, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
