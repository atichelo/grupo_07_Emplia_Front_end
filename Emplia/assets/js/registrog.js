const firebase = require("firebase/app");
require("firebase/auth");

var firebaseConfig = {
    apiKey: "tu API key",
    authDomain: "tu authDomain",
    projectId: "tu projectId",
    storageBucket: "tu storageBucket",
    messagingSenderId: "tu messagingSenderId",
    appId: "tu appId"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('google-btn').addEventListener('click', function() {
    //Inicializa el proveedor de Google
    var provider = new GoogleAuthProvider();

    // Inicializa Firebase Auth
    var auth = getAuth();

    // Inicia el proceso de autenticación
    signInWithPopup(auth, provider)
        .then((result) => {
            // Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
            var credential = GoogleAuthProvider.credentialFromResult(result);
            var token = credential.accessToken;

            // La información del usuario que ha iniciado sesión
            var user = result.user;

            console.log(user);  // Imprime la información del usuario

            // ...
        }).catch((error) => {
            // Maneja los errores aquí.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(`Error Code: ${errorCode}`);  // Imprime el código de error
            console.log(`Error Message: ${errorMessage}`);  // Imprime el mensaje de error

            // La dirección de correo electrónico de la cuenta del usuario que da el error.
            var email = error.email;

            // El tipo de cuenta del usuario.
            var credential = GoogleAuthProvider.credentialFromError(error);

            // ...
        });
});
