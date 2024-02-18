// Definición de la clase ValidadorFormulario
class ValidadorFormulario {
  constructor(nombre, correo, mensaje) {
    this.nombre = nombre;
    this.correo = correo;
    this.mensaje = mensaje;
  }

  // Método para validar el campo de nombre
  validarNombre() {
    var msg = document.getElementById('msg');
    if (this.nombre === "") {
      // Si el nombre está en blanco, muestra un mensaje de error
      msg.innerHTML = "Por favor, introduzca un nombre";
      // Establece un temporizador para eliminar el mensaje después de 5 segundos
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000); // 5000 milisegundos = 5 segundos
      return false;
    }
    // Si el nombre no está en blanco, borra el mensaje de error y devuelve verdadero
    msg.innerHTML = "";
    return true;
  }

  // Método para validar el campo de correo electrónico
  validarCorreo() {
    var msg = document.getElementById('msg');
    const expresionRegularCorreo = /^[a-zA-Z0-9]{1,50}@[a-zA-Z0-9]{5,7}\.(com|es|org)$/;
    if (!expresionRegularCorreo.test(this.correo)) {
      // Si el correo electrónico no es válido, muestra un mensaje de error
      msg.innerHTML = "Por favor, introduzca un correo electrónico válido";
      // Establece un temporizador para eliminar el mensaje después de 5 segundos
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000); // 5000 milisegundos = 5 segundos
      return false;
    }
    // Si el correo electrónico es válido, borra el mensaje de error y devuelve verdadero
    msg.innerHTML = "";
    return true;
  }

  // Método para validar el campo de mensaje
  validarMensaje() {
    var msg = document.getElementById('msg');
    if (this.mensaje.length < 20) {
      // Si el mensaje es demasiado corto, muestra un mensaje de error
      msg.innerHTML = 'El mensaje debe tener al menos 20 caracteres.';
      // Establece un temporizador para eliminar el mensaje después de 5 segundos
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000); // 5000 milisegundos = 5 segundos
      return false;
    }
    // Si el mensaje tiene al menos 20 caracteres, borra el mensaje de error y devuelve verdadero
    msg.innerHTML = "";
    return true;
  }

  // Método para validar todos los campos del formulario
  validar() {
    // Llama a los métodos de validación individuales y devuelve true si todos son válidos
    return this.validarNombre() && this.validarCorreo() && this.validarMensaje();
  }
}

// Obtención de referencias a los elementos del formulario
var mensaje = document.getElementById('message');
var nombre = document.getElementById('name');
var correo = document.getElementById('email');

// Event listener para validar el formulario en cada pulsación de tecla en los campos
mensaje.addEventListener('keyup', () => {
  enviarFormulario();
})
nombre.addEventListener('keyup', () => {
  enviarFormulario();
})
correo.addEventListener('keyup', () => {
  enviarFormulario();
})

// Función para enviar el formulario y realizar la validación
function enviarFormulario() {
  // Crea una instancia del ValidadorFormulario con los valores de los campos actuales
  const validador = new ValidadorFormulario(nombre.value, correo.value, mensaje.value);
  // Ejecuta el método de validación del formulario
  validador.validar();
}
