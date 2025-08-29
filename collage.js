const images = [
  "image/1.jpg",
  "image/4.jpg",
  "image/5.jpg",
  "image/7.jpg",
  "image/8.jpg",
  "image/9.jpg",
  "image/10.jpg",
  "image/12.jpg",
  "image/13.jpg",
  "image/14.jpg",
  "image/15.jpg",
  "image/16.jpg",
  "image/18.jpg",
  "image/19.jpg",
  "image/20.jpg",
  "image/21.jpg",
  "image/22.jpg",
  "image/23.jpg"
];

// Función para mezclar aleatoriamente
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const gallery = document.getElementById("gallery");
shuffle(images).forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});
