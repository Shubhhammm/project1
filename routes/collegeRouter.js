
var express = require('express');
const app = express();
var router = express.Router();

const College = require('../models/college');
// To fetch the list of colleges
// http://localhost:/api/colleges

router.get('/', function(req, res){
    College.find({}, function(err, college) {
        res.json(college);
    });

});

router.post('/', function(req, res){
    const college =new College({
        name : req.body.name
    });
    college.save().then(function() {

        res.json(college);
     });
});
module.exports =router;