<?php
include '.\includes\templates\header.php'; // Se incluye el encabezado de la página desde un archivo externo.
?>

<body>
<div class="videoplayer">
  <!-- Sección del reproductor de video -->
  <video id="videoPlayer" controls style="max-width: 250%; max-height: 100%;">
    <source src="../videos/Bleed -The Kid Laroi.mp4" type="video/mp4"> <!-- Fuente del video -->
    Tu navegador no soporta el elemento de video.
  </video>
  
  <!-- Sección del reproductor de audio -->
  <audio id="audioPlayer" controls style="display:none;">
    <source src="../audios/Alex Warren - Before You Leave Me.mp3" type="audio/mp3"> <!-- Fuente del audio -->
    Tu navegador no soporta el elemento de audio.
  </audio>
  
  <!-- Controles del reproductor -->
  <div class="video-controls">
    <!-- Botones de control -->
    <button class="botRep" onclick="playPause()">▶ </button>
    <button class="botRep" onclick="stop()">Stop</button>
    <button class="botRep" onclick="rewind()">-10s</button>
    <button class="botRep" onclick="forward()">+10s</button>
    <button class="botRep" onclick="goToStart()">Inicio</button>
    <button class="botRep" onclick="goToEnd()">Fin</button>
    <button class="botRep" onclick="toggleFullScreen()">FullScreen</button>
    
    <!-- Control de volumen -->
    - Volumen +<input class="barravolumen" type="range" id="volumeControl" min="0" max="1" step="0.01" onchange="changeVolume()">
  </div>
  
  <!-- Barra de progreso -->
  <div>
    <progress id="progressBar" max="100" value="0"></progress>
  </div>
  
  <!-- Selección de playlist -->
  <div>
    <select id="playlist" onchange="changeMedia()">
      <!-- Opciones de la playlist -->
      <option value="../videos/Bleed - The Kid Laroi.mp4">Bleed</option>
      <option value="../videos/Tear Me Apart - The Kid Laroi.mp4">Tear Me Apart</option>
      <option value="../videos/Heaven - The Kid Laroi.mp4">Heaven</option>
      <option value="../videos/Too Much - The Kid Laroi.mp4">Too Much</option>
      <option value="../audios/Alex Warren - Before You Leave Me .mp3">Audio - Before You Leave Me</option>
    </select>
  </div> 
</div>

<!-- Script para controlar el reproductor -->
<script src="../js/reproductor.js"></script>
</body>
