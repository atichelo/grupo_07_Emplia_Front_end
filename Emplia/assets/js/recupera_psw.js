$('#recuperarForm').on('submit', function(e) {
    e.preventDefault();

    var email = $(this).find('input[name="email"]').val();
    var message = $(this).find('input[name="message"]').val();

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            message: message
        })
    };

    fetch('http://127.0.0.1:4000/recuperar', options)
    .then(response => response.json())
    .then(data => {
        // código para procesar los datos
    })
    .catch(error => {
        // código para manejar el error
        console.error(error);
    });

});
