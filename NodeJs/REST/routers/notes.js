var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/Hackathon')



router.get('/',function(req,res,next){
  
                    db.notes.find(function(err,data)
        {
                if(err) {res.send(err)}
                else {
                        res.json(data);
                }

        })  
});
router.get('/:id',function(req,res,next){
                     db.notes.findOne({ _id : mongojs.ObjectId(req.params.id)},
                    function(err,data)
        {
                if(err) {res.send(err)}
                else {
                        res.json(data);
                        
                }

        })  
});
router.post('/',function(req,res,next){
        var data = req.body  ;
                    db.notes.save(data,function(err,result)
        {
                if(err) {res.send(err)}
                else {
                        res.json(result);
                }

        })  
});
router.delete('/:id',function(req,res){
        db.notes.remove(
               { text : req.params.id},
               '',function(err,result){
                if (err) {console.log(err); throw err ;}
                else {res.send(result);}
        })
})

module.exports = router;