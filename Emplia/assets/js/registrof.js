document.querySelector("form").addEventListener('submit', function(event) {
    // Previene la recarga de la página
    event.preventDefault();

    // Captura los valores ingresados
    var usuario = document.querySelector('input[name="uname"]').value;
    var contrasena = document.querySelector('input[name="psw"]').value;

    // Imprime los valores en la consola
    console.log('Usuario: ' + usuario);
    console.log('Contraseña: ' + contrasena);

    // Almacena los valores en el almacenamiento local
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('contrasena', contrasena);

    // Redirige a la página principal
    window.location.href = "../index.html";
});
