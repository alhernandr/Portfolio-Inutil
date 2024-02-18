<?php
include '.\includes\templates\header.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preferencias de Usuario</title>
</head>
<body>
  <form id="preferenciasForm" class="formPreferencias">
  <h1>Preferencias de Usuario</h1>
    <label for="nombreUsuario">Nombre:</label>
    <input type="text" id="nombreUsuario" required><br><br>
    <label for="colorFondo">Color de fondo:</label>
    <input type="color" id="colorFondo" required><br><br>
    <label for="colorLetra">Color de letra:</label>
    <input type="color" id="colorLetra" required><br><br>
    <button type="submit">Guardar Preferencias</button>
  </form>


  <h1 class="mapa">Mapa con geolocation</h1>
  <div id="map"></div>


</body>
</html>
<script src="../js/preferencias.js"></script>

<?php
include '.\includes\templates\footer.php';
?>