const pokemonCcontainer = document.querySelector('.pokemon-container')

let fetchPokemon = (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data)
    })
}
let fetchPokemons = (number) => {
  for (let i = 0; i <= number; i++) {
    fetchPokemon(i)
  }
}

let createPokemon = (pokemon) => {
  const card = document.createElement('div')
  card.classList.add('pokemon-block')

  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')

  const img = document.createElement('img')
  img.src = pokemon.sprites.front_default

  imgContainer.appendChild(img)

  const number = document.createElement('p')
  number.classList.add('pokemon-number')
  number.textContent = `Pokemon : ${pokemon.id}
  `

  const name = document.createElement('p')
  name.classList.add('pokemon-name')
  name.textContent = pokemon.name

  let btnPokemon = document.createElement('button')
  btnPokemon.classList.add('poke-btn')
  btnPokemon.textContent = 'ME VOY '
  btnPokemon.addEventListener('click', () => {
    card.remove()
  })
  // body.appendChild(btnPokemon)

  card.appendChild(imgContainer)
  card.appendChild(number)
  card.appendChild(name)
  card.appendChild(btnPokemon)

  pokemonCcontainer.appendChild(card)
}
fetchPokemons(9)

// const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
// const getCharacter = async () => {
//   //1) traer todos los personasje s con el url de su informacion
//   let apiResponse = await fetch(`${baseURL}`)
//   let data = await apiResponse.json()
//   let characters = data.results

//   //traer la informacion para cada personaje
//   const finalCharacters = await Promise.all(
//     characters.map(async (item) => {
//       const character = await fetch(`${item.url}`)
//       let data = await character.json()
//       return data
//     }),
//   )

//   return finalCharacters
// }

// const drawCharacters = (personajes) => {
//   const container = document.querySelector('.pokemon-container')
//   const cards = personajes.map((item) => {
//     const card = document.createElement('div')
//     const name = document.createElement('h2')
//     const image = document.createElement('img')

//     name.innerHTML = item.name
//     image.src = item.sprites.back_default
//     card.appendChild(name)
//     card.appendChild(image)
//     return card
//   })

//   cards.forEach((card) => container.appendChild(card))
// }

// const init = async () => {
//   const personajes = await getCharacter()
//   drawCharacters(personajes)
// }

// window.addEventListener('DOMContentLoaded', init)
