
var express = require('express');
var  mongoose =require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static('public'));

var collegeRouter =require('./routes/collegeRouter');
var studentRouter =require('./routes/studentRouter');

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

// var collegeRouter = 
// require('./routes/collegeRouter');
app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/colleges', collegeRouter);
app.use('/api/student', studentRouter);


mongoose.connect("mongodb://localhost/mydb",{
  useNewUrlParser: true})
  .then(function(){
     console.log("database connected");
  })
.catch(function(err){
  console.log("could not connect to database")
});


const PORT = 3000;
app.listen(PORT, function() {
  console.log("Server running on port : " + PORT);
});
