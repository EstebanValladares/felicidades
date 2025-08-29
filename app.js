document.getElementById("nameForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Normalizamos: quitamos espacios y pasamos todo a minúsculas
  const name1 = document.getElementById("name1").value.trim().toLowerCase();
  const name2 = document.getElementById("name2").value.trim().toLowerCase();
  const error = document.getElementById("error");

  // Validamos
  if (name1 === "esteban" && name2 === "jessica") {
    error.textContent = "";
    localStorage.setItem("name1", "Esteban");
    localStorage.setItem("name2", "Jessica");
    window.location.href = "newPage.html";
  } else {
    error.textContent = "Los nombres no son válidos. Deben ser Esteban y Jessica.";
  }
});
