<?php
 include '.\includes\templates\header.php';
?>

<!-- Portfolio -->
<section id="portfolio">
    <div class="portfolio__Container">
      <h2 class="titleBackground">
        Portfolio
        <p class="text__overlap">My Work</p>
      </h2>
    </div>

    <ul class="portfolio__type">
      <li class="type__item item--active" onclick="filtrarProyectos('all')"><a href="#">All</a></li>
      <li class="type__item" onclick="filtrarProyectos('diseño')"><a href="#">Interior Design</a></li>
      <li class="type__item" onclick="filtrarProyectos('produccion')"><a href="#">Multimedia Production</a></li>
      <li class="type__item" onclick="filtrarProyectos('web-developing')"><a href="#">Web Developing</a></li>
    </ul>
    
    <!----------------------------------------PONER POR AQUI LAS FOTOS DE ALGUN PROYECTO DE LOS 3 CICLOS-------------------->
    <div class="portfolio__gallery">
      <div class="photo__item">
        <!---->
        <img
          class="gallery__photo"
          src="/img/diseñoInteriores.png" 
          alt="Diseño de Interiores"
        />
        <div class="project__desc" data-lenguaje="diseño">
          <div class="desc__container">
            <h3 class="project__title">Diseño de Interiores</h3>
            <p class="project__category">Artediez</p>
          </div>
        </div>
      </div>
      <div class="photo__item">
        <!---->
        <a href="https://youtu.be/GCzBAEZfk9Q">
        <img
          class="gallery__photo"
          src="/img/produccionCorto.png"
          alt="Produccion"
        />
        <div class="project__desc" data-lenguaje="produccion">
          <div class="desc__container">
            <h3 class="project__title">Volver A Creer</h3>
            <p class="project__category">Produccion Corto</p>
          </div>
          </a>
        </div>
        
      </div>
      <div class="photo__item">
        <!---->
        <img
          class="gallery__photo"
          src="/img/webpage.png"
          alt="Web Developing"
        />
        <div class="project__desc" data-lenguaje="web-developing">
          <div class="desc__container">
            <h3 class="project__title">SneakStil</h3>
            <p class="project__category">1era Entrega</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <script src="/js/filtrar.js"></script>
<?php
 include '.\includes\templates\footer.php';
?>

