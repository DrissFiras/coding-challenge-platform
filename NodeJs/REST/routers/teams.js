var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/Hackathon')

router.get('/',function(req,res){
                    db.teams.find(function(err,data)
        {
                if(err) {res.send(err)}
                else {
                        res.json(data);
                }

        })  
});
router.post('/',function(req,res){
        var data = req.body
                    db.teams.save(data,function(err,result)
        {
                if(err) {res.send(err)}
                else {
                        res.json(result);
                }

        })  
});


module.exports = router;