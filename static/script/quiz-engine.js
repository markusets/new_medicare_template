// Obtener todos los botones con atributo index=1
const buttons = document.querySelectorAll('[index="1"]');

// Agregar un evento de click a cada botón
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtener todos los elementos con clase "page1"
    const page1Elements = document.querySelectorAll(".page1");

    // Ocultar todos los elementos con clase "page1"
    page1Elements.forEach((element) => {
      element.classList.add("hidden");
    });

    // Obtener todos los elementos con clase "page2 hidden"
    const page2Elements = document.querySelectorAll(".page2.hidden");

    // Mostrar todos los elementos con clase "page2 hidden"
    page2Elements.forEach((element) => {
      element.classList.remove("hidden");
    });
  });
});
