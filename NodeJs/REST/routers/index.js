var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/Hackathon')

router.get('/',function(req,res){
      res.render('index.html');
});



module.exports = router;