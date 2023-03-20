// Obtener la fecha actual
var fecha = new Date();

// Restarle dos días a la fecha actual
fecha.setDate(fecha.getDate() - 2);

// Convertir la fecha a un string con el formato deseado
var fechaFormateada = fecha.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Asignar la fecha formateada al elemento HTML
document.getElementById("fecha").innerHTML = "Published on " + fechaFormateada;
