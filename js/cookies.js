// Función para establecer una cookie
function setCookie(nombre, valor, expiracionDias) {
    var fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + expiracionDias);
    var cookieValor = encodeURIComponent(valor) + ((expiracionDias == null) ? "" : "; expires=" + fechaExpiracion.toUTCString());
    document.cookie = nombre + "=" + cookieValor;
}

// Función para obtener el valor de una cookie
function getCookie(nombre) {
    var nombreEQ = nombre + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nombreEQ) == 0) return decodeURIComponent(cookie.substring(nombreEQ.length, cookie.length));
    }
    return null;
}

// Función para incrementar el contador de visitas
function incrementarContador() {
    var contador = getCookie('contador');
    if (contador) {
        contador = parseInt(contador) + 1;
    } else {
        contador = 1;
    }
    setCookie('contador', contador, 365); // Se almacena por un año
}

// Llamada a la función para incrementar el contador al cargar la página
incrementarContador();

// Ejemplo de cómo usar el contador
var contador = getCookie('contador');
if (contador) {
    console.log('Número total de visitas: ' + contador);
} else {
    console.log('Es la primera vez que visitas el sitio.');
}
