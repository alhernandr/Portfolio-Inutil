// Obtiene los valores almacenados en el almacenamiento local del navegador
const nombreUsuario = localStorage.getItem('nombreUsuario');
const colorFondo = localStorage.getItem('colorFondo');
const colorLetra = localStorage.getItem('colorLetra');

// Verifica si se han almacenado los valores de nombre de usuario, color de fondo y color de letra
if (nombreUsuario && colorFondo && colorLetra) {
    // Si se han almacenado, se obtiene el elemento con id 'saludo'
    const saludoDiv = document.getElementById('saludo');
    // Se actualiza el contenido del elemento 'saludo' con un mensaje de saludo personalizado
    saludoDiv.innerHTML = `<p>Hola, ${nombreUsuario}!</p>`;
    // Se establece el color de fondo del elemento 'saludo' con el color almacenado
    saludoDiv.style.backgroundColor = colorFondo;
    // Se establece el color de texto del elemento 'saludo' con el color almacenado
    saludoDiv.style.color = colorLetra;
} else {
    // Si no se han almacenado los valores, redirige al usuario a la página 'preferencias'
    window.location.href = 'preferencias.php';
}

// Agrega un event listener al botón con id 'borrarPreferencias'
document.getElementById('borrarPreferencias').addEventListener('click', function() {
    // Elimina los valores almacenados en el almacenamiento local del navegador
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('colorFondo');
    localStorage.removeItem('colorLetra');
    
    // Redirige al usuario a la página 'preferencias' después de borrar los datos
    window.location.href = 'preferencias.php';
});

