<?php
    // Verifica si el formulario fue enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre_usuario = $_POST["nombre_usuario"];
        $contrasena = $_POST["contrasena"];
        $confirmar_contrasena = $_POST["confirmar_contrasena"];
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];

        // procesar los datos, como guardarlos en una base de datos

        echo "Datos recibidos: " . $nombre_usuario . ", " . $contrasena . ", " . $nombre . ", " . $apellido;
    }
     // Redirige a curriculum.html
     header('Location: curriculum.html');
     exit;
?>
