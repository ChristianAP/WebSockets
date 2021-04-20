var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require("socket.io")(server);
var lista = [];
app.use(express.static('public'));

app.get('/hello', function(req, res){
    res.status(200).send("Hello");
});

io.on('connection', function(socket){
    console.log('Se han conectado al servidor');
   //socket.emit('sms', lista );
    socket.on('enviar', function(data){
        lista.push(data);
        io.emit('sms', lista)
    });
});

server.listen(2000, function(){
    console.log("Servidor funcionando Correctamente");
});