import { capitalize } from "./src/helpers/capitalize";




const form = document.querySelector("#form");
const section = document.querySelector(".section");
const KEY = '261c103b267bb4657dc83a691b2eabda';
const LANG = "es"



function dataSetting () {

    return 
}

function extractorDeDatos (datos) {
    const velocidadViento = datos.wind.speed;
    const descripcion = capitalize(datos.weather[0].description)
    const humedad = datos.main.humidity
    const aproximatedTemp = Math.round(datos.main.temp) - 273 ;
    
    console.log(velocidadViento,descripcion,humedad,aproximatedTemp)

    const articulo = document.createElement("article");
    articulo.className="article";
    articulo.innerHTML = `
    <h2>Asi está el tiempo en Madrid</h2>
    <h3>${descripcion}</h3>
    <div class="icons">
      <div class="cajaicono">
        <i class="icon bi bi-droplet"></i>
        <p>humedad</p>
        <p class="bigtext">${humedad}%</p>
      </div>
      <div class="cajaicono">
      <i class="icon bi bi-wind"></i>
      <p>viento</p>
      <p class="bigtext">${velocidadViento}</p>
    </div>
      <div class="cajaicono">
      <i class="icon bi bi-thermometer"></i>
      <p>temperatura</p>
      <p class="bigtext">${aproximatedTemp}º</p>
    </div>
    </div>
    `
    
    section.append(articulo)

}


const llamadaApi= () => { fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${KEY}&lang=${LANG}`)
.then(response => response.json())
.then(response => extractorDeDatos(response))
.catch(err => console.error(err))
}


form.addEventListener('submit', () => dataSetting)