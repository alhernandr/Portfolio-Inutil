var bd;

function iniciar() {
    var boton = document.getElementById('boton');
    var borrar = document.getElementById('delete');

    boton.addEventListener('click', agregar, false);
    borrar.addEventListener('click', borrarClave, false);

    var request = indexedDB.open('Clientes', 2); //antes era "deusto"

    request.onsuccess = function (e) {
        bd = e.target.result;
        mostrarClientes(); // Mostrar los clientes existentes al cargar la página
    }

    request.onupgradeneeded = function (e) {
        bd = e.target.result;
        bd.createObjectStore('clientes', { keyPath: 'nombre' });
    }
}

function agregar() {
    var nombreInput = document.getElementById('nombre');
    var empresaInput = document.getElementById('empresa');

    var nombre = nombreInput.value;
    var empresa = empresaInput.value;
    

    // Comprobar si el cliente ya existe en la base de datos
    var transaction = bd.transaction(['clientes'], 'readonly');
    var objectStore = transaction.objectStore('clientes');
    var request = objectStore.get(nombre);

    request.onsuccess = function (e) {
        var existingCliente = e.target.result;

        if (existingCliente) {
            alert('El cliente ya existe en la base de datos');
        } else {
            // Si el cliente no existe, proceder con la adición
            var nuevoCliente = { nombre: nombre, empresa: empresa};
            
            var transactionAdd = bd.transaction(['clientes'], 'readwrite');
            var objectStoreAdd = transactionAdd.objectStore('clientes');
            var addRequest = objectStoreAdd.add(nuevoCliente);

            addRequest.onsuccess = function (e) {
                alert('Registro guardado con éxito en la base de datos');
                 // Vaciar los campos de entrada
                 nombreInput.value = '';
                 empresaInput.value = '';
                mostrarClientes(); // Actualizar la lista de clientes al agregar uno nuevo
            }

            addRequest.onerror = function (e) {
                alert('Error al intentar guardar el registro en la base de datos');
            }
        }
    }

    request.onerror = function (e) {
        alert('Error al intentar verificar si el cliente existe en la base de datos');
    }
}
function borrarClave() {
    var borrar = document.getElementById('deleteClave').value;
    var transaction = bd.transaction(['clientes'], 'readwrite');
    var objectStore = transaction.objectStore('clientes');
    
    var request = objectStore.get(borrar);

    request.onsuccess = function (e) {
        var existingCliente = e.target.result;

        if (borrar === '*') {
            var clearRequest = objectStore.clear();
            clearRequest.onsuccess = function (e) {
                alert('Todos los registros fueron borrados de la base de datos exitosamente');
                mostrarClientes(); // Actualizar la lista de clientes después de borrar todos
            }
        }
        else if (existingCliente) {
            // Si el cliente existe, proceder con el borrado
            var transactionDelete = bd.transaction(['clientes'], 'readwrite');
            var objectStoreDelete = transactionDelete.objectStore('clientes');
            var deleteRequest = objectStoreDelete.delete(borrar);

            deleteRequest.onsuccess = function (e) {
                alert('Registro borrado de la base de datos exitosamente');
                mostrarClientes(); // Actualizar la lista de clientes al borrar uno específico
            }

            deleteRequest.onerror = function (e) {
                alert('Error al intentar borrar el registro de la base de datos');
            }
        } else {
            alert('El cliente no existe en la base de datos');
        }

    }
}

function mostrarClientes() {
    var transaction = bd.transaction(['clientes'], 'readonly');
    var objectStore = transaction.objectStore('clientes');
    
    var listaclientes = document.getElementById('listaclientes');
    listaclientes.innerHTML = ''; // Limpiar la lista antes de mostrar los registros

    var cursorRequest = objectStore.openCursor();

    cursorRequest.onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
            var cliente= cursor.value;
            var li = document.createElement('li');
            li.innerHTML= `<h4>Nombre: ${cliente.nombre}</h4><br>- Empresa: ${cliente.empresa}`;
            listaclientes.appendChild(li);

            cursor.continue();
        }
    }
}

window.addEventListener('load', iniciar, false);