var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/Hackathon')
var parser = require('json-parser');

io.on('connection', (socket) => {
  console.log('Connected');
  
  socket.on('disconnect', function(){
    console.log('Disconnected');
  });
  
  socket.on('add-message', (message) => {
    io.emit('message',  message),
        up = '{ "prob'+message.prob+'":'+message.val+'}'    
        obj = parser.parse(up),
        db.score.update({challenge:message.challenge, team:message.team},{$inc: obj }) 
  });

});


http.listen(8000,()=>{
    console.log('port8000')
})