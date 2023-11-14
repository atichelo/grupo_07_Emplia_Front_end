document.addEventListener('DOMContentLoaded', (event) => {
    // Recupera los datos del almacenamiento local
    var data = JSON.parse(localStorage.getItem('registroUsuario'));

    // Asigna los datos a los campos correspondientes
    document.getElementById('nombre').value = data.nombre;
    document.getElementById('apellido').value = data.apellido;
    document.getElementById('correo').value = data.correo;
    document.getElementById('telefono').value = data.telefono;
    document.getElementById('direccion').value = data.domicilio;
});
