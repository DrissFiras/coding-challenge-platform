var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors=require('cors');

var index = require('./routers/index');
var challenges = require('./routers/challenges');
var score = require('./routers/score');
var notif = require('./routers/notif');
var teams = require('./routers/teams');
var details = require('./routers/details');
var notes = require('./routers/notes');

var app = express();

app.set('views',path.join(__dirname,'views'));

app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(cors());

app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());

app.use('/',index);
app.use('challenge',details);
app.use('/challenges',challenges);

app.use('/score',score);
app.use('/notif',notif);
app.use('/teams',teams);
app.use('/notes', notes);

app.listen(3000,function(){
    console.log('Server started on port 3000....')
})


