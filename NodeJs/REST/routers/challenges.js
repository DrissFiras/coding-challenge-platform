var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/Hackathon')

router.get('/',function(req,res,next){
                    db.challenges.find(function(err,data)
        {
                if(err) {res.send(err)}
                else {
                        res.json(data);
                }

        })  
});
router.get('/:id',function(req,res,next){
                     db.challenges.findOne({ _id : mongojs.ObjectId(req.params.id)},
                    function(err,data)
        {
                if(err) {res.send(err)}
                else {
                        res.json(data);
                        
                }

        })  
});
router.post('/',function(req,res,next){
        var data = req.body
                    db.challenges.save(data,function(err,result)
        {
                if(err) {res.send(err)}
                else {
                        res.json(result);
                }

        })  
});
router.delete('/:id',function(req,res){
        db.challenges.remove(
              { _id : mongojs.ObjectId(req.params.id)},
               '',function(err,result){
                if (err) {console.log(err); throw err ;}
                else {res.send(result);}
        })
});
router.get('/st/:id',function(req,res,next){
                        console.log(req.params.id)
                    db.challenges.update({ _id :mongojs.ObjectId(req.params.id)},{$set: { statut:"Published"}}, function(err, result) {
    if(err) { throw err; }
    res.end("<p>Product updated</p>");
  })
                  
});

module.exports = router;