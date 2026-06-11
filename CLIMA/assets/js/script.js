const ciudadesBase = [
  { id: 1, nombre: "Nueva York", lat: 40.71, lon: -74.01 },
  { id: 2, nombre: "Londres", lat: 51.51, lon: -0.13 },
  { id: 3, nombre: "París", lat: 48.85, lon: 2.35 },
  { id: 4, nombre: "Tokio", lat: 35.68, lon: 139.69 },
  { id: 5, nombre: "Singapur", lat: 1.29, lon: 103.85 },
  { id: 6, nombre: "Dubái", lat: 25.27, lon: 55.3 },
  { id: 7, nombre: "Roma", lat: 41.89, lon: 12.49 },
  { id: 8, nombre: "Valdivia", lat: -39.81, lon: -73.25 },
  { id: 9, nombre: "Bangkok", lat: 13.75, lon: 100.5 },
  { id: 10, nombre: "Cali", lat: 3.45, lon: -76.53 },
];

class ApiClima {
  async obtenerClima(ciudad) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=7`;

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error("No se pudo cargar la información del clima");
    }

    const datos = await respuesta.json();
    return datos;
  }
}

class WeatherApp {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.lugares = [];
  }

  async iniciar() {
    this.mostrarMensaje("Cargando datos del clima...");

    try {
      await this.cargarLugares();
      this.mostrarLugares();
      this.mostrarDetalle(1);
      this.mostrarMensaje("");
    } catch (error) {
      console.error(error);
      this.mostrarMensaje(
        "No fue posible obtener información del clima. Intente nuevamente.",
      );
    }
  }

  async cargarLugares() {
    for (const ciudad of ciudadesBase) {
      const datos = await this.apiClient.obtenerClima(ciudad);
      const lugar = this.mapearDatos(ciudad, datos);
      this.lugares.push(lugar);
    }
  }

  mapearDatos(ciudad, datos) {
    const pronosticoSemanal = datos.daily.time.map((fecha, index) => {
      const clima = this.obtenerEstado(datos.daily.weather_code[index]);

     return {
  dia: this.obtenerDia(fecha),
  codigo: datos.daily.weather_code[index],
  min: Math.round(datos.daily.temperature_2m_min[index]),
  max: Math.round(datos.daily.temperature_2m_max[index]),
  estado: clima.estado,
  categoria: clima.categoria,
  lluvia: datos.daily.precipitation_probability_max[index],
};
    });

    const climaActual = this.obtenerEstado(datos.current.weather_code);

    return {
      id: ciudad.id,
      nombre: ciudad.nombre,
      icono: this.obtenerIcono(climaActual.categoria),
      tempActual: Math.round(datos.current.temperature_2m),
      estadoActual: climaActual.estado,
      humedad: datos.current.relative_humidity_2m + "%",
      viento: Math.round(datos.current.wind_speed_10m) + " km/h",
      sensacion: Math.round(datos.current.apparent_temperature) + "°C",
      pronosticoSemanal: pronosticoSemanal,
    };
  }

  mostrarLugares() {
    const lista = document.getElementById("lista-lugares");
    lista.innerHTML = "";

    this.lugares.forEach((lugar) => {
     lista.innerHTML += `
  <div class="col">
    <div class="card place-card h-100">
      <div class="card-body">

        <h3 class="card-title place-card__title">
          <span style="font-size:2rem">${lugar.icono}</span>
          <span>${lugar.nombre}</span>
        </h3>

        <p class="card-text place-card__temp">
          ${lugar.tempActual}°C
        </p>

        <p class="card-text place-card__status">
          ${lugar.estadoActual}
        </p>

        <button
          class="btn btn-primary place-card__button"
          onclick="app.mostrarDetalle(${lugar.id})">
          Ver detalle
        </button>

      </div>
    </div>
  </div>
`;
    });
  }

  buscarLugar(id) {
    return this.lugares.find((lugar) => lugar.id === id);
  }

  mostrarDetalle(id) {
    const lugar = this.buscarLugar(id);
    const estadisticas = this.calcularEstadisticas(lugar.pronosticoSemanal);
    const alertas = this.generarAlertas(estadisticas);

    document.getElementById("nombre-ciudad").innerText = lugar.nombre;
    document.getElementById("temp").innerText =
      `Temperatura: ${lugar.tempActual}°C`;
    document.getElementById("humedad").innerText = `Humedad: ${lugar.humedad}`;
    document.getElementById("viento").innerText = `Viento: ${lugar.viento}`;
    document.getElementById("sensacion").innerText =
      `Sensación térmica: ${lugar.sensacion}`;

    let pronostico = "";

    lugar.pronosticoSemanal.forEach((dia) => {
      pronostico += `
        <div class="col">
          <div class="border p-2 rounded">
            <p>${dia.dia}</p>
            <p>${this.obtenerIconoCodigo(dia.codigo)}</p>
            <p>Min: ${dia.min}°C</p>
            <p>Max: ${dia.max}°C</p>
            <p>${dia.estado}</p>
            <p>Lluvia: ${dia.lluvia}%</p>
          </div>
        </div>
      `;
    });

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
        <li class="list-group-item">Días con alta probabilidad de lluvia: ${estadisticas.diasAltaLluvia}</li>
        <li class="list-group-item"><strong>${estadisticas.resumen}</strong></li>
      </ul>
    `;

    document.getElementById("alertas-clima").innerHTML = `
      <div class="alert alert-warning text-center">
        ${alertas}
      </div>
    `;

    document.getElementById("detalle").scrollIntoView({
      behavior: "smooth",
    });
  }

  calcularEstadisticas(pronosticoSemanal) {
    let minima = pronosticoSemanal[0].min;
    let maxima = pronosticoSemanal[0].max;
    let suma = 0;

    let soleados = 0;
    let nublados = 0;
    let lluviosos = 0;
    let ventosos = 0;

    pronosticoSemanal.forEach((dia) => {
      if (dia.min < minima) minima = dia.min;
      if (dia.max > maxima) maxima = dia.max;

      suma += (dia.min + dia.max) / 2;

      if (dia.categoria === "Soleado") soleados++;
      else if (dia.categoria === "Nublado") nublados++;
      else if (dia.categoria === "Lluvioso") lluviosos++;
      else if (dia.categoria === "Ventoso") ventosos++;
    });

    const promedio = Math.round(suma / pronosticoSemanal.length);

    let resumen = "Semana con clima variado.";

    if (soleados > lluviosos && soleados > nublados) {
      resumen = "Semana mayormente soleada.";
    } else if (lluviosos >= 3) {
      resumen = "Semana con varias lluvias.";
    } else if (nublados >= 3) {
      resumen = "Semana mayormente nublada.";
    } else if (ventosos >= 3) {
      resumen = "Semana con varios días ventosos.";
    }

    const diasAltaLluvia = pronosticoSemanal.filter(
      (dia) => dia.lluvia >= 60,
    ).length;

    return {
      minima,
      maxima,
      promedio,
      soleados,
      nublados,
      lluviosos,
      ventosos,
      diasAltaLluvia,
      resumen,
    };
  }

  generarAlertas(estadisticas) {
    const alertas = [];

    if (estadisticas.promedio > 28) {
      alertas.push("🔥 Alerta de calor");
    }

    if (estadisticas.lluviosos >= 3) {
      alertas.push("🌧️ Semana lluviosa");
    }

    if (estadisticas.diasAltaLluvia >= 2) {
      alertas.push("☔ Alta probabilidad de precipitaciones");
    }

    if (estadisticas.ventosos >= 3) {
      alertas.push("💨 Varios días ventosos");
    }

    if (alertas.length === 0) {
      alertas.push("✅ No existen alertas importantes");
    }

    return alertas.join("<br>");
  }

  obtenerEstado(codigo) {
  const estados = {
    0: { estado: "Despejado", categoria: "Soleado" },
    1: { estado: "Principalmente despejado", categoria: "Soleado" },
    2: { estado: "Parcialmente nublado", categoria: "Nublado" },
    3: { estado: "Cubierto", categoria: "Nublado" },

    45: { estado: "Niebla", categoria: "Nublado" },
    48: { estado: "Niebla con escarcha", categoria: "Nublado" },

    51: { estado: "Llovizna ligera", categoria: "Lluvioso" },
    53: { estado: "Llovizna moderada", categoria: "Lluvioso" },
    55: { estado: "Llovizna intensa", categoria: "Lluvioso" },

    61: { estado: "Lluvia ligera", categoria: "Lluvioso" },
    63: { estado: "Lluvia moderada", categoria: "Lluvioso" },
    65: { estado: "Lluvia intensa", categoria: "Lluvioso" },

    71: { estado: "Nevada ligera", categoria: "Nublado" },
    73: { estado: "Nevada moderada", categoria: "Nublado" },
    75: { estado: "Nevada intensa", categoria: "Nublado" },

    80: { estado: "Chubascos ligeros", categoria: "Lluvioso" },
    81: { estado: "Chubascos moderados", categoria: "Lluvioso" },
    82: { estado: "Chubascos intensos", categoria: "Lluvioso" },

    95: { estado: "Tormenta", categoria: "Lluvioso" },
  };

  return estados[codigo] || {
    estado: "Desconocido",
    categoria: "Ventoso",
  };
}

obtenerIcono(categoria) {
  if (categoria === "Soleado") return "☀️";
  if (categoria === "Nublado") return "☁️";
  if (categoria === "Lluvioso") return "🌧️";
  if (categoria === "Ventoso") return "💨";

  return "🌤️";
}

obtenerIconoCodigo(codigo) {
  if (codigo === 0) return "☀️";
  if (codigo === 1) return "🌤️";
  if (codigo === 2) return "⛅";
  if (codigo === 3) return "☁️";

  if (codigo === 45 || codigo === 48) return "🌫️";

  if ([51, 53, 55].includes(codigo)) return "🌦️";

  if ([61, 63, 65].includes(codigo)) return "🌧️";

  if ([71, 73, 75].includes(codigo)) return "❄️";

  if ([80, 81, 82].includes(codigo)) return "🌦️";

  if (codigo >= 95) return "⛈️";

  return "🌤️";
}
  obtenerDia(fecha) {
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const fechaActual = new Date(fecha);
    return dias[fechaActual.getDay()];
  }

  mostrarMensaje(mensaje) {
    const contenedor = document.getElementById("mensaje-app");

    if (contenedor) {
      contenedor.innerText = mensaje;
    }
  }
}

const apiClient = new ApiClima();
const app = new WeatherApp(apiClient);

app.iniciar();
