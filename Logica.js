const popupContainer = document.getElementById('popup-container');
const btnShowPopup = document.getElementById('btn-show-popup');

// Agregar un controlador de eventos mouseenter al botón para mostrar la ventana emergente
btnShowPopup.addEventListener('mouseenter', () => {
  popupContainer.style.display = 'block';
});

// Agregar un controlador de eventos mouseleave al contenedor de la ventana emergente para ocultarla al salir del botón
popupContainer.addEventListener('mouseleave', (event) => {
  if (event.relatedTarget !== btnShowPopup) {
    popupContainer.style.display = 'none';
  }
});

const imageURLs = [
  'b.png',
  'i.png',
  'e.png',
  'n.png',
  'v.png',
  'e.png',
  'n.png',
  'i.png',
  'd.png',
  'o.png',
  's.png',
  // Agrega más URLs de imágenes aquí (15 o más)
];

let currentIndex = 0;

function rotateImages() {
  const imgElement = document.getElementById('rotating-image');
  imgElement.src = imageURLs[currentIndex];
  currentIndex = (currentIndex + 1) % imageURLs.length;
}

window.addEventListener('DOMContentLoaded', () => {
  // Rotar las imágenes cada 3 segundos
  setInterval(rotateImages, 3000);
});