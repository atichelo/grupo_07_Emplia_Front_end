document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombre_usuario = document.querySelector('input[name="nombre_usuario"]').value;
    var contrasena = document.querySelector('input[name="contrasena"]').value;
    var confirmar_contrasena = document.querySelector('input[name="confirmar_contrasena"]').value;
    var nombre = document.querySelector('input[name="nombre"]').value;
    var apellido = document.querySelector('input[name="apellido"]').value;

    if (contrasena !== confirmar_contrasena) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Guarda los datos del formulario en el almacenamiento local
    var data = {
        nombre_usuario: nombre_usuario,
        contrasena: contrasena,
        nombre: nombre,
        apellido: apellido
    };

    localStorage.setItem('registroUsuario', JSON.stringify(data));

    // Imprime el objeto data en la consola
    console.log(data);

    document.getElementById('google-btn').addEventListener('click', function() {
        // Aquí iría el código para manejar la autenticación con Google
    });
    
    document.getElementById('facebook-btn').addEventListener('click', function() {
        // Aquí iría el código para manejar la autenticación con Facebook
    });
    
    document.getElementById('linkedin-btn').addEventListener('click', function() {
        // Aquí iría el código para manejar la autenticación con LinkedIn
    });

    // Redirige a continuar.html
    window.location.href = 'continuar.html';
});

