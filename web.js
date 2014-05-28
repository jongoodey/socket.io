var express = require('express'),
    app = express(),
    logfmt = require("logfmt"),
    http = require('http').createServer(app),
    io = require('socket.io').listen(http);

http.listen(5000);

io.sockets.on('connection', function(socket){
    socket.on('send msg', function(data){
        io.sockets.emit('get msg', data);
    })
})

app.use(logfmt.requestLogger());
app.use(express.static(__dirname+'/public'));


// var express = require("express");
// var logfmt = require("logfmt");
// var app = express();


// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

// var port = Number(process.env.PORT || 5000);
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });