// Agrega un event listener al formulario con id 'preferenciasForm'
document.getElementById('preferenciasForm').addEventListener('submit', function(event) {
    // Previene el comportamiento por defecto del envío del formulario
    event.preventDefault();
    // Obtiene el valor del campo 'nombreUsuario' del formulario y lo almacena en una variable
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    // Obtiene el valor del campo 'colorFondo' del formulario y lo almacena en una variable
    const colorFondo = document.getElementById('colorFondo').value;
    // Obtiene el valor del campo 'colorLetra' del formulario y lo almacena en una variable
    const colorLetra = document.getElementById('colorLetra').value;
    // Almacena el nombre de usuario en el almacenamiento local del navegador
    localStorage.setItem('nombreUsuario', nombreUsuario);
    // Almacena el color de fondo en el almacenamiento local del navegador
    localStorage.setItem('colorFondo', colorFondo);
    // Almacena el color de letra en el almacenamiento local del navegador
    localStorage.setItem('colorLetra', colorLetra);
    // Redirige al usuario a la página 'saludo.html' después de almacenar los datos
    window.location.href = 'saludo.php';
});

// Función que se ejecuta cuando se ha cargado el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Comprobamos si el navegador soporta la geolocalización
    if ("geolocation" in navigator) {
        // Solicitamos la posición del usuario
        navigator.geolocation.getCurrentPosition(function(position) {
            // Obtenemos la latitud y longitud de la posición
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;

            // Creamos un mapa centrado en la posición del usuario
            var map = L.map('map').setView([latitud, longitud], 13);

            // Añadimos una capa de OpenStreetMap al mapa
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            // Añadimos un marcador en la posición del usuario
            L.marker([latitud, longitud]).addTo(map)
                .bindPopup('¡Estás aquí!')
                .openPopup();
        });
    } else {
        // Si el navegador no soporta la geolocalización, mostramos un mensaje de error
        alert('¡Lo siento! Tu navegador no soporta la geolocalización.');
    }
});