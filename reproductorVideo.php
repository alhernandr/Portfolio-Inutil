<?php
include '.\includes\templates\header.php'; // Se incluye el encabezado de la página desde un archivo externo.
?>

<body>
<div class="videoplayer">
  <!-- Sección del reproductor de video -->
  <video id="videoPlayer" src="../videos/Bleed - The Kid Laroi.mp4" controls style="max-width: 250%; max-height: 100%;">
    
    Tu navegador no soporta el elemento de video.
  </video>
  
  <!-- Sección del reproductor de audio -->
  <audio id="audioPlayer" src="../audios/Alex Warren - Before You Leave Me.mp3" controls style="">
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
    - Volumen +<input class="barravolumen" type="range" id="volumeControl" min="0" max="1" step="0.1" onchange="changeVolume()">
  </div>
  
  <!-- Barra de progreso -->
  <div>
    <progress id="progressBar" max="100" value="0"></progress>
  </div>
  
  <!-- Selección de playlist -->
  <div>
    
      <!-- Opciones de la playlist -->
      <a onclick=bleed()>Bleed</a>
      <a onclick=tear()>Tear Me Apart</a>
      <a onclick=heaven()>Heaven</a>
      <a onclick=tooMuch()>Too Much</a>

      <a onclick=alex()>Before You Leave Me</a>
  </div> 
</div>

<!-- Script para controlar el reproductor -->
<script src="../js/reproductor.js"></script>
</body>
