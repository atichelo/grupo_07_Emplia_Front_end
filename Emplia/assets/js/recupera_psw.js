const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.post('/recuperar-psw', (req, res) => {
    const { email } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tu-email@gmail.com',
            pass: 'tu-contraseña'
        }
    });

    let mailOptions = {
        from: 'tu-email@gmail.com',
        to: email,
        subject: 'Recuperación de Contraseña',
        text: 'Haz clic en el enlace para recuperar tu contraseña.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).send('Correo de recuperación enviado');
        }
    });
});

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
document.querySelector('.recupera button').addEventListener('click', function() {
    var email = document.querySelector('.mls').value;
    if (email) {
        // Acá iría el código para enviar la solicitud al servidor
        alert('Se ha enviado un correo electrónico de recuperación de contraseña a ' + email);
    } else {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
    }
});
