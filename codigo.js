function enviarMensaje() {
    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;
    
    if(nombre === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Gracias, " + nombre + "! Tu mensaje ha sido enviado.");
    }
}
