# App de Clima

## Descripción

Aplicación web desarrollada con HTML, CSS, Bootstrap y JavaScript que permite consultar información climática de distintas ciudades utilizando la API Open-Meteo.

La aplicación muestra el clima actual, el pronóstico semanal, estadísticas automáticas y alertas climáticas para cada ciudad seleccionada.

## Estructura de clases

La aplicación utiliza Programación Orientada a Objetos mediante las siguientes clases:

### ApiClima

Se encarga de realizar las consultas a la API Open-Meteo y obtener la información climática de cada ciudad.

### WeatherApp

Se encarga de administrar la lógica principal de la aplicación, procesar los datos recibidos, calcular estadísticas, generar alertas y actualizar dinámicamente la interfaz de usuario.

## API utilizada

**Nombre:** Open-Meteo

**Sitio web:** https://open-meteo.com/

La API Open-Meteo proporciona información meteorológica actual y pronósticos climáticos mediante coordenadas geográficas. En este proyecto se utiliza para obtener temperatura actual, humedad, sensación térmica, velocidad del viento, estado del clima y pronóstico semanal.

## Cálculo de estadísticas

Las estadísticas se generan automáticamente a partir del pronóstico semanal obtenido desde la API Open-Meteo.

-https://github.com/luisahoyos757-cmd/weather-frontend-m4.git

Con estos datos la aplicación también genera un resumen automático del comportamiento climático semanal y alertas según las condiciones detectadas.

-Luisa Hoyos 
