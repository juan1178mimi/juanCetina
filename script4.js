document.addEventListener('DOMContentLoaded', function () {
  // Elementos
  const body = document.body;
  const btnClaro = document.getElementById("temaClaro");
  const btnOscuro = document.getElementById("temaOscuro");
  const btnColor = document.getElementById("temaColor");
  const contadorEl = document.getElementById("contador");
  const area = document.getElementById("area");
  const formulario = document.getElementById("miFormulario");
  const input = document.getElementById("miInput");

  let cambios = 0;

  // Cambiar tema (mantiene sólo el cambio de color del tema)
  function aplicarTema(clase) {
    body.classList.remove('tema-claro','tema-oscuro','tema-color');
    body.classList.add(clase);
    cambios++;
    contadorEl.textContent = cambios;
    // (No tocamos el formulario ni el contenido del área aquí)
  }

  btnClaro.addEventListener("click", () => aplicarTema('tema-claro'));
  btnOscuro.addEventListener("click", () => aplicarTema('tema-oscuro'));
  btnColor.addEventListener("click", () => aplicarTema('tema-color'));

  // Formulario => cumple la tarea: prevenir envío, obtener valor y validar no vacío
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // evita recargar la página

    const valor = input.value.trim();

    if (valor === "") {
      area.textContent = "⚠️ El campo no puede estar vacío";
      area.style.color = "red";
      input.focus();
    } else {
      area.textContent = "✅ Valor ingresado: " + valor;
      area.style.color = "green";
      // opcional: limpiar el input
      input.value = "";
    }
  });

  // poner tema inicial visible
  body.classList.add('tema-claro');
});
