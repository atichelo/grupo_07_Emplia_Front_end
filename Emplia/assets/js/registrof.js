document.querySelector("form").addEventListener('submit', function(event) {
    // Previene la recarga de la página
    event.preventDefault();

    // Intenta seleccionar los elementos por ambos nombres
    var usuarioElem = document.querySelector('input[name="uname"]');
    var contrasenaElem = document.querySelector('input[name="psw"]');

    // Si los elementos existen, obtén sus valores
    var usuario = usuarioElem ? usuarioElem.value : null;
    var contrasena = contrasenaElem ? contrasenaElem.value : null;

    // Imprime los valores en la consola
    console.log('Usuario: ' + usuario);
    console.log('Contraseña: ' + contrasena);

    // Almacena los valores en el almacenamiento local
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('contrasena', contrasena);

    // Redirige a la página principal
    window.location.href = "../index.html";
});
//comento para que guarde los cambios, tengo un prblema con el repo