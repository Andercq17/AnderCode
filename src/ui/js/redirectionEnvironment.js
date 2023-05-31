const contenedorImagen = document.querySelector('#divSplash');
const imagen = contenedorImagen.querySelector('div');
imagen.addEventListener('animationend', () => {
  window.location.href = './environment.html'; // Cambia "nuevo.html" por la ruta de tu página de destino
});