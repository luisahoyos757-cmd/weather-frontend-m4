// Arreglo con las ciudades y sus datos de clima
const lugares = [
  {
    id: 1,
    nombre: "Nueva York",
    icono: "☁️",
    tempActual: 22,
    estadoActual: "Nublado",
    humedad: "65%",
    viento: "10 km/h",
    sensacion: "20°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 18, max: 20, estado: "Nublado" },
      { dia: "Mar", min: 16, max: 18, estado: "Lluvioso" },
      { dia: "Mié", min: 20, max: 24, estado: "Soleado" },
      { dia: "Jue", min: 19, max: 24, estado: "Soleado" },
      { dia: "Vie", min: 18, max: 24, estado: "Nublado" },
      { dia: "Sáb", min: 19, max: 24, estado: "Soleado" },
      { dia: "Dom", min: 17, max: 24, estado: "Lluvioso" },
    ],
  },
  {
    id: 2,
    nombre: "Londres",
    icono: "💨",
    tempActual: 26,
    estadoActual: "Ventoso",
    humedad: "45%",
    viento: "5 km/h",
    sensacion: "25°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 18, max: 22, estado: "Ventoso" },
      { dia: "Mar", min: 20, max: 25, estado: "Soleado" },
      { dia: "Mié", min: 16, max: 19, estado: "Lluvioso" },
      { dia: "Jue", min: 16, max: 19, estado: "Lluvioso" },
      { dia: "Vie", min: 17, max: 19, estado: "Ventoso" },
      { dia: "Sáb", min: 17, max: 19, estado: "Nublado" },
      { dia: "Dom", min: 16, max: 19, estado: "Lluvioso" },
    ],
  },
  {
    id: 3,
    nombre: "París",
    icono: "☀️",
    tempActual: 28,
    estadoActual: "Soleado",
    humedad: "40%",
    viento: "8 km/h",
    sensacion: "29°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 22, max: 28, estado: "Soleado" },
      { dia: "Mar", min: 20, max: 24, estado: "Soleado" },
      { dia: "Mié", min: 18, max: 21, estado: "Nublado" },
      { dia: "Jue", min: 18, max: 21, estado: "Ventoso" },
      { dia: "Vie", min: 17, max: 21, estado: "Lluvioso" },
      { dia: "Sáb", min: 17, max: 21, estado: "Lluvioso" },
      { dia: "Dom", min: 17, max: 21, estado: "Lluvioso" },
    ],
  },
  {
    id: 4,
    nombre: "Tokio",
    icono: "☀️",
    tempActual: 32,
    estadoActual: "Soleado",
    humedad: "50%",
    viento: "12 km/h",
    sensacion: "33°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 25, max: 32, estado: "Soleado" },
      { dia: "Mar", min: 24, max: 30, estado: "Soleado" },
      { dia: "Mié", min: 22, max: 26, estado: "Soleado" },
      { dia: "Jue", min: 18, max: 21, estado: "Ventoso" },
      { dia: "Vie", min: 16, max: 19, estado: "Lluvioso" },
      { dia: "Sáb", min: 17, max: 20, estado: "Lluvioso" },
      { dia: "Dom", min: 18, max: 21, estado: "Lluvioso" },
    ],
  },
  {
    id: 5,
    nombre: "Singapur",
    icono: "🌤️",
    tempActual: 28,
    estadoActual: "Parcial",
    humedad: "70%",
    viento: "9 km/h",
    sensacion: "30°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 22, max: 28, estado: "Soleado" },
      { dia: "Mar", min: 17, max: 19, estado: "Nublado" },
      { dia: "Mié", min: 17, max: 19, estado: "Nublado" },
      { dia: "Jue", min: 18, max: 21, estado: "Lluvioso" },
      { dia: "Vie", min: 22, max: 26, estado: "Soleado" },
      { dia: "Sáb", min: 23, max: 27, estado: "Soleado" },
      { dia: "Dom", min: 17, max: 19, estado: "Ventoso" },
    ],
  },
  {
    id: 6,
    nombre: "Dubái",
    icono: "☀️",
    tempActual: 30,
    estadoActual: "Soleado",
    humedad: "35%",
    viento: "11 km/h",
    sensacion: "31°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 24, max: 30, estado: "Soleado" },
      { dia: "Mar", min: 16, max: 18, estado: "Nublado" },
      { dia: "Mié", min: 17, max: 19, estado: "Nublado" },
      { dia: "Jue", min: 15, max: 17, estado: "Lluvioso" },
      { dia: "Vie", min: 22, max: 26, estado: "Soleado" },
      { dia: "Sáb", min: 23, max: 27, estado: "Soleado" },
      { dia: "Dom", min: 17, max: 19, estado: "Ventoso" },
    ],
  },
  {
    id: 7,
    nombre: "Roma",
    icono: "🌧️",
    tempActual: 20,
    estadoActual: "Lluvioso",
    humedad: "60%",
    viento: "14 km/h",
    sensacion: "19°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 17, max: 20, estado: "Lluvioso" },
      { dia: "Mar", min: 16, max: 19, estado: "Nublado" },
      { dia: "Mié", min: 16, max: 19, estado: "Nublado" },
      { dia: "Jue", min: 18, max: 21, estado: "Lluvioso" },
      { dia: "Vie", min: 22, max: 26, estado: "Soleado" },
      { dia: "Sáb", min: 23, max: 27, estado: "Soleado" },
      { dia: "Dom", min: 17, max: 19, estado: "Ventoso" },
    ],
  },
  {
    id: 8,
    nombre: "Valdivia",
    icono: "💨",
    tempActual: 21,
    estadoActual: "Ventoso",
    humedad: "75%",
    viento: "18 km/h",
    sensacion: "20°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 18, max: 21, estado: "Ventoso" },
      { dia: "Mar", min: 16, max: 19, estado: "Ventoso" },
      { dia: "Mié", min: 16, max: 19, estado: "Nublado" },
      { dia: "Jue", min: 18, max: 21, estado: "Lluvioso" },
      { dia: "Vie", min: 20, max: 24, estado: "Soleado" },
      { dia: "Sáb", min: 19, max: 22, estado: "Soleado" },
      { dia: "Dom", min: 17, max: 19, estado: "Ventoso" },
    ],
  },
  {
    id: 9,
    nombre: "Bangkok",
    icono: "☀️",
    tempActual: 32,
    estadoActual: "Soleado",
    humedad: "68%",
    viento: "7 km/h",
    sensacion: "34°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 25, max: 32, estado: "Soleado" },
      { dia: "Mar", min: 24, max: 30, estado: "Soleado" },
      { dia: "Mié", min: 21, max: 25, estado: "Nublado" },
      { dia: "Jue", min: 18, max: 20, estado: "Lluvioso" },
      { dia: "Vie", min: 22, max: 26, estado: "Soleado" },
      { dia: "Sáb", min: 23, max: 27, estado: "Soleado" },
      { dia: "Dom", min: 17, max: 19, estado: "Ventoso" },
    ],
  },
  {
    id: 10,
    nombre: "Cali",
    icono: "🌧️",
    tempActual: 22,
    estadoActual: "Lluvia débil",
    humedad: "100%",
    viento: "10 km/h",
    sensacion: "22°C",
    pronosticoSemanal: [
      { dia: "Lun", min: 22, max: 28, estado: "Soleado" },
      { dia: "Mar", min: 17, max: 19, estado: "Nublado" },
      { dia: "Mié", min: 17, max: 19, estado: "Nublado" },
      { dia: "Jue", min: 18, max: 21, estado: "Lluvioso" },
      { dia: "Vie", min: 22, max: 26, estado: "Soleado" },
      { dia: "Sáb", min: 23, max: 27, estado: "Soleado" },
      { dia: "Dom", min: 17, max: 19, estado: "Ventoso" },
    ],
  },
];

// Función para mostrar las ciudades en la página principal
function mostrarLugares() {
  let lista = document.getElementById("lista-lugares");
  lista.innerHTML = "";

  for (let i = 0; i < lugares.length; i++) {
    lista.innerHTML += `
      <div class="col">
        <div class="card place-card text-center h-100">
          <div class="card-body">
            <h3 class="card-title place-card__title">${lugares[i].icono}<br>${lugares[i].nombre}</h3>
            <p class="card-text place-card__temp">Temperatura: ${lugares[i].tempActual}°C</p>
            <p class="card-text place-card__status">Estado: ${lugares[i].estadoActual}</p>
            <button class="btn btn-primary place-card__button" onclick="mostrarDetalle(${lugares[i].id})">
              Ver detalle
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

// Función para buscar una ciudad por su id
function buscarLugar(id) {
  for (let i = 0; i < lugares.length; i++) {
    if (lugares[i].id === id) {
      return lugares[i];
    }
  }
}

// Función para calcular las estadísticas de la semana
function calcularEstadisticas(pronosticoSemanal) {
  let minima = pronosticoSemanal[0].min;
  let maxima = pronosticoSemanal[0].max;
  let suma = 0;

  let soleados = 0;
  let nublados = 0;
  let lluviosos = 0;
  let ventosos = 0;

  for (let i = 0; i < pronosticoSemanal.length; i++) {
    if (pronosticoSemanal[i].min < minima) {
      minima = pronosticoSemanal[i].min;
    }

    if (pronosticoSemanal[i].max > maxima) {
      maxima = pronosticoSemanal[i].max;
    }

    suma = suma + pronosticoSemanal[i].max;

    if (pronosticoSemanal[i].estado === "Soleado") {
      soleados++;
    } else if (pronosticoSemanal[i].estado === "Nublado") {
      nublados++;
    } else if (pronosticoSemanal[i].estado === "Lluvioso") {
      lluviosos++;
    } else if (pronosticoSemanal[i].estado === "Ventoso") {
      ventosos++;
    }
  }

  let promedio = Math.round(suma / pronosticoSemanal.length);
  let resumen = "";

  if (soleados > lluviosos && soleados > nublados) {
    resumen = "Semana mayormente soleada.";
  } else if (lluviosos >= 3) {
    resumen = "Semana fría con varias lluvias.";
  } else if (nublados >= 3) {
    resumen = "Semana mayormente nublada.";
  } else if (ventosos >= 3) {
    resumen = "Semana con varios días ventosos.";
  } else {
    resumen = "Semana con clima variado.";
  }

  return {
    minima: minima,
    maxima: maxima,
    promedio: promedio,
    soleados: soleados,
    nublados: nublados,
    lluviosos: lluviosos,
    ventosos: ventosos,
    resumen: resumen,
  };
}

// Función para mostrar el detalle de la ciudad seleccionada
function mostrarDetalle(id) {
  let lugar = buscarLugar(id);
  let estadisticas = calcularEstadisticas(lugar.pronosticoSemanal);

  document.getElementById("nombre-ciudad").innerText = lugar.nombre;
  document.getElementById("temp").innerText = "Temperatura: " + lugar.tempActual + "°C";
  document.getElementById("humedad").innerText = "Humedad: " + lugar.humedad;
  document.getElementById("viento").innerText = "Viento: " + lugar.viento;
  document.getElementById("sensacion").innerText =
    "Sensación térmica: " + lugar.sensacion;

  let pronostico = "";

  for (let i = 0; i < lugar.pronosticoSemanal.length; i++) {
    pronostico += `
      <div class="col">
        <div class="border p-2 rounded">
          <p>${lugar.pronosticoSemanal[i].dia}</p>
          <p>${obtenerIcono(lugar.pronosticoSemanal[i].estado)}</p>
          <p>Min: ${lugar.pronosticoSemanal[i].min}°C</p>
          <p>Max: ${lugar.pronosticoSemanal[i].max}°C</p>
          <p>${lugar.pronosticoSemanal[i].estado}</p>
        </div>
      </div>
    `;
  }

  document.getElementById("detalle-semanal").innerHTML = pronostico;

  document.getElementById("estadisticas-semana").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Temperatura mínima: ${estadisticas.minima}°C</li>
      <li class="list-group-item">Temperatura máxima: ${estadisticas.maxima}°C</li>
      <li class="list-group-item">Temperatura promedio: ${estadisticas.promedio}°C</li>
      <li class="list-group-item">Días soleados: ${estadisticas.soleados}</li>
      <li class="list-group-item">Días nublados: ${estadisticas.nublados}</li>
      <li class="list-group-item">Días lluviosos: ${estadisticas.lluviosos}</li>
      <li class="list-group-item">Días ventosos: ${estadisticas.ventosos}</li>
      <li class="list-group-item"><strong>${estadisticas.resumen}</strong></li>
    </ul>
  `;

  document.getElementById("detalle").scrollIntoView({
    behavior: "smooth",
  });
}

// Función para obtener el ícono según el estado del clima
function obtenerIcono(estado) {
  if (estado === "Soleado") {
    return "☀️";
  } else if (estado === "Nublado") {
    return "☁️";
  } else if (estado === "Lluvioso") {
    return "🌧️";
  } else if (estado === "Ventoso") {
    return "💨";
  } else {
    return "🌤️";
  }
}

mostrarLugares();
mostrarDetalle(1);