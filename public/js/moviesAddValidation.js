window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let form = document.querySelector("form");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  const tituloPelicula = document.querySelector("#title");
  const mensajeErrorTitulo = document.querySelector("#mensajeErrorTitulo");
  const errores = [];
  function validarTitulo() {
    if (tituloPelicula.value === "") {
      errores.push("Este campo no debe quedar vacío.");
      mensajeErrorTitulo.innerText = "Este campo no debe quedar vacío.";
      mensajeErrorTitulo.classList.add("is-invalid");
      tituloPelicula.classList.remove("is-valid");
    } else {
      mensajeErrorTitulo.innerText = "";
      mensajeErrorTitulo.classList.remove("is-invalid");
      tituloPelicula.classList.add("is-valid");
    }
  }

  tituloPelicula.addEventListener("blur", validarTitulo);
  tituloPelicula.addEventListener("focus", validarTitulo);

  const calificacion = document.querySelector("#rating");
  const mensajeErrorCalificacion = document.querySelector(
    "#mensajeErrorCalificacion"
  );

  function validarCalificacion() {
    const calificacionValue = parseFloat(calificacion.value);

    if (calificacion.value === "") {
      mensajeErrorCalificacion.innerText = "Este campo no debe quedar vacío.";
      mensajeErrorCalificacion.classList.add("is-invalid");
      calificacion.classList.remove("is-valid");
    } else if (
      isNaN(calificacionValue) ||
      calificacionValue < 0 ||
      calificacionValue > 10
    ) {
      mensajeErrorCalificacion.innerText =
        "La calificación debe estar entre 0 y 10.";
      mensajeErrorCalificacion.classList.add("is-invalid");
      calificacion.classList.remove("is-valid");
    } else {
      mensajeErrorCalificacion.innerText = "";
      mensajeErrorCalificacion.classList.remove("is-invalid");
      calificacion.classList.add("is-valid");
    }
  }
  calificacion.addEventListener("focus", validarCalificacion);
  calificacion.addEventListener("blur", validarCalificacion);

  const awards = document.querySelector("#awards");
  const mensajeErrorAwards = document.querySelector("#mensajeErrorAwards");

  function validarAwards() {
    const awardsValue = parseInt(awards.value);

    if (awards.value === "") {
      mensajeErrorAwards.innerText = "Este campo no debe quedar vacío.";
      mensajeErrorAwards.classList.add("is-invalid");
      awards.classList.remove("is-valid");
    } else if (isNaN(awardsValue) || awardsValue < 0 || awardsValue > 10) {
      mensajeErrorAwards.innerText = "Los premios deben estar entre 0 y 10.";
      mensajeErrorAwards.classList.add("is-invalid");
      awards.classList.remove("is-valid");
    } else {
      mensajeErrorAwards.innerText = "";
      mensajeErrorAwards.classList.remove("is-invalid");
      awards.classList.add("is-valid");
    }
  }

  awards.addEventListener("focus", validarAwards);
  awards.addEventListener("blur", validarAwards);

  const fecha = document.querySelector("#release_date");
  const mensajeErrorFecha = document.querySelector("#mensajeErrorFecha");

  function validarFecha() {
    if (fecha.value === "") {
      mensajeErrorFecha.innerText = "Este campo no debe quedar vacío.";
      mensajeErrorFecha.classList.add("is-invalid");
      fecha.classList.remove("is-valid");
    } else {
      mensajeErrorFecha.innerText = "";
      mensajeErrorFecha.classList.remove("is-invalid");
      fecha.classList.add("is-valid");
    }
  }

  fecha.addEventListener("blur", validarFecha);
  fecha.addEventListener("focus", validarFecha);

  const duracion = document.querySelector("#length");
  const mensajeErrorDuracion = document.querySelector("#mensajeErrorDuracion");

  function validarDuracion() {
    const duracionValue = parseInt(duracion.value);

    if (duracion.value === "") {
      mensajeErrorDuracion.innerText = "Este campo no debe quedar vacío.";
      mensajeErrorDuracion.classList.add("is-invalid");
      duracion.classList.remove("is-valid");
    } else if (
      isNaN(duracionValue) ||
      duracionValue < 60 ||
      duracionValue > 360
    ) {
      mensajeErrorDuracion.innerText =
        "La duración debe estar entre 60 y 360 minutos.";
      mensajeErrorDuracion.classList.add("is-invalid");
      duracion.classList.remove("is-valid");
    } else {
      mensajeErrorDuracion.innerText = "";
      mensajeErrorDuracion.classList.remove("is-invalid");
      duracion.classList.add("is-valid");
    }
  }

  duracion.addEventListener("focus", validarDuracion);
  duracion.addEventListener("blur", validarDuracion);

  const genero = document.querySelector("#genre_id");
  const mensajeErrorGenero = document.querySelector("#mensajeErrorGenero");

  function validarGenero() {
    if (genero.value === "") {
      mensajeErrorGenero.innerText = "Debe seleccionar un género.";
      mensajeErrorGenero.classList.add("is-invalid");
      genero.classList.remove("is-valid");
    } else {
      mensajeErrorGenero.innerText = "";
      mensajeErrorGenero.classList.remove("is-invalid");
      genero.classList.add("is-valid");
    }
  }

  genero.addEventListener("change", validarGenero);

  form.addEventListener("submit", function (event) {
    errores.length = 0;
    validarTitulo();
    validarCalificacion();
    validarAwards();
    validarFecha();
    validarDuracion();
    validarGenero();
    const ulErrores = document.querySelector(".errores");
    ulErrores.innerHTML = "";
    if (errores.length > 0) {
      ulErrores.classList.add("alert-warning");
      errores.forEach((error) => {
        ulErrores.innerHTML += `<li>${error}</li>`;
      });

      event.preventDefault();
    } else {
      alert("La película se guardó satisfactoriamente.");
    }
  });
};
