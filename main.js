
const btn = document.querySelector('.btn')
const section = document.querySelector('.section')


console.log("proyect started")

function pintaDatos(datos){
  console.log(datos.joke)
  const newJoke =document.createElement('article');
  console.log(newJoke)
  newJoke.className = 'chiste';

  newJoke.innerHTML = `
  <img src="./src/jokeface.jpg" alt="">
  <p>${datos.joke}</p>
  `

  section.appendChild(newJoke);
}

btn.onclick = () => {

  fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((resp) => resp.json() )
    .then((data) => { pintaDatos(data) })
    .catch((err) => console.error(err))

}