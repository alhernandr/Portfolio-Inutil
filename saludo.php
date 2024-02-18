<?php
include '.\includes\templates\header.php';


// Verifica si se ha enviado un mensaje a través de GET
if (isset($_GET['mensaje'])) {
    $mensaje = $_GET['mensaje'];
    // Muestra el mensaje en la consola
    echo "<script>console.log('$mensaje');</script>";
}
?>




<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Saludo</title>
</head>
<body>
  
  <div id="saludo" class="formPreferencias"></div>
  <button id="borrarPreferencias">Borrar Preferencias</button>
  
</body>
</html>
<script src="../js/saludo.js"></script>

<?php
include '.\includes\templates\footer.php';
?>