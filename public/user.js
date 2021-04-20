var socket = io.connect('http://localhost:2000', {'forceNew' : true});
var ids = 2
socket.on('sms', function(data){
    console.log(data);
    imprimir(data);
});
function imprimir(data){
    var page =  data.map(function(datos, index){
        return(`<div style=" height: 50px;  vertical-align: middle; width: "80px";> 
        ${datos.autor}: ${datos.mensaje}
         </div><br>`);
    }).join(" ");
    document.getElementById('sms').innerHTML=page;
} 
//function hora(){
    //var d = new Date();
    //document.write(d.getHours());
//}
function agregar(e){
    //var d = new Date();
    var agr = {
        id: ids++,
        autor: document.getElementById("usuario").value,
        mensaje: document.getElementById("message").value
    };

    socket.emit('enviar', agr);
             document.getElementById("message").value = " ";
    return false;
}


function useragree(){
    document.getElementById("usuario").disabled = true;
}
function userreset(){
    document.getElementById("usuario").disabled = false;
    document.getElementById("usuario").value = " ";
}