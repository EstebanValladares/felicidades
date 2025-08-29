document.getElementById("nameForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name1 = document.getElementById("name1").value.trim().toLowerCase();
  const name2 = document.getElementById("name2").value.trim().toLowerCase();
  const error = document.getElementById("error");

  if (name1 === "esteban" && name2 === "jessica") {
    error.textContent = "";

    // Ocultar formulario
    document.getElementById("form-section").style.display = "none";
    // Mostrar collage
    document.getElementById("collage-section").style.display = "block";

    // Cargar imágenes (si no se han cargado ya)
    const gallery = document.getElementById("gallery");
    if (gallery.childElementCount === 0) {
      const images = [
        "image/foto1.jpg",
        "image/foto2.jpg",
        "image/foto3.jpg",
        "image/foto4.jpg",
        "image/foto5.jpg",
        "image/foto6.jpg"
      ];

      // Barajar imágenes
      images.sort(() => Math.random() - 0.5);

      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;

        img.addEventListener("load", () => {
          const rowHeight = 1;
          const rowSpan = Math.ceil((img.getBoundingClientRect().height + 15) / rowHeight);
          img.style.gridRowEnd = `span ${rowSpan}`;
        });

        gallery.appendChild(img);
      });
    }

  } else {
    error.textContent = "Los nombres no son válidos. Deben ser Esteban y Jessica.";
  }
});
