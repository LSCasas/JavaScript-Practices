/*
  1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
  person = {
    name:"...",
    email:"...",
    password:"..."
  }
  2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

   persons = []
  person -> persons

  3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario
  */
// main.js

// main.js

document.addEventListener("DOMContentLoaded", function(event) {
  const person = [];

  document.getElementById('formulario').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe

      // Capturar los valores de los campos de entrada
      let nombre = document.getElementById('nombre').value;
      let correo = document.getElementById('correo').value;
      let password = document.getElementById('password').value;

      // Crear un nuevo objeto con las propiedades capturadas
      let nuevoUsuario = {
          nombre: nombre,
          correo: correo,
          password: password
      };

      // Agregar el nuevo usuario al array person
      person.push(nuevoUsuario);

      // Limpiar los campos del formulario
      document.getElementById('nombre').value = '';
      document.getElementById('correo').value = '';
      document.getElementById('password').value = '';

      // Crear una tarjeta para el nuevo usuario
      let tarjetaUsuario = document.createElement('div');
      tarjetaUsuario.classList.add('card');
      tarjetaUsuario.style.width = '18rem';

      let listaGrupo = document.createElement('ul');
      listaGrupo.classList.add('list-group', 'list-group-flush');

      let itemNombre = document.createElement('li');
      itemNombre.classList.add('list-group-item');
      itemNombre.textContent = 'Nombre: ' + nuevoUsuario.nombre;

      let itemCorreo = document.createElement('li');
      itemCorreo.classList.add('list-group-item');
      itemCorreo.textContent = 'Correo: ' + nuevoUsuario.correo;

      let itemContrasena = document.createElement('li');
      itemContrasena.classList.add('list-group-item');
      itemContrasena.textContent = 'Contraseña: ' + nuevoUsuario.password;

      // Agregar elementos a la tarjeta
      listaGrupo.appendChild(itemNombre);
      listaGrupo.appendChild(itemCorreo);
      listaGrupo.appendChild(itemContrasena);

      tarjetaUsuario.appendChild(listaGrupo);

      // Agregar la tarjeta de usuario al contenedor en la interfaz
      document.getElementById('usuarios').appendChild(tarjetaUsuario);

      // Mostrar el array person en la consola
      console.log(person);
  });
});

