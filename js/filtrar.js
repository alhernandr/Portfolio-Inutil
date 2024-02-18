function filtrarProyectos(lenguaje) {
    var proyectos = document.getElementsByClassName('.project__desc');

    for (var i = 0; i < proyectos.length; i++) {
        var proyecto = proyectos[i];
        var proyectoLenguaje = proyecto.getAttribute('data-lenguaje');

        if (lenguaje === 'todos' || proyectoLenguaje === lenguaje) {
            proyecto.style.display = 'inline-block';
        } else {
            proyecto.style.display = 'none';
        }
    }
}

var operacion = "el resultado es: " + (1+2);
  console.log(operacion)