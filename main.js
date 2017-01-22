/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var app = express();
var router = express.Router();
var appPath = '';
var port = 8888;

app.use(express.static('./src')); 

app.post('/liveorders',function(req, res){
			console.log(req);
			res.send("test");
        });

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

