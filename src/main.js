import {
  agregarRol,
  filterHouse,
  filterRole,
  filterGender,
  filterName,
  

} from './data.js';
import data from './data/potter/potter.js';

const house = document.querySelector('#house');
const role = document.querySelector('#role');
const gender = document.querySelector('#gender');
const container = document.querySelector('#cartas');
const startPatronus = document.querySelector('#patronus');


let containerPatronus;
// Variables utilizadas para mostrar página de varitas.
const pageWand = document.querySelector('#wand');
// let containerWands;
let unicornCore;
let dragonCore;
let phoenixCore;
let unkownCore;

function showPatronus() {
  data.forEach((persona) => {
    if (persona.patronus === '') {
      return;
    }
    const personaElement = document.createElement('article');
    personaElement.classList.add('information');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const cardBackback = document.createElement('div');
    cardBackback.classList.add('cardBackback');
    const card = document.createElement('div');
    card.classList.add('card');

    // Agregamos un div para el nombre del personaje, le otorgamos una clase y obtenemos la data
    const personaNombreElement = document.createElement('div');
    personaNombreElement.classList.add('nombre-persona');
    personaNombreElement.innerHTML = `${persona.name}`;

    // Agregamos la imagen de la persona, le otorgamos una clase y obtenemos la data
    const fotoElement = document.createElement('img');
    fotoElement.classList.add('foto-persona');
    fotoElement.src = persona.image;

    // Agregamos un div para la patronus del personaje, le otorgamos una clase y obtenemos la data
    const personaPatronusElement = document.createElement('div');
    personaPatronusElement.classList.add('patronus-persona');
    personaPatronusElement.innerHTML = ` ${persona.patronus}`;


    // Agregamos la imagen del patronus, le otorgamos una clase y obtenemos la data
    const patronusElement = document.createElement('img');
    patronusElement.classList.add('foto-patronus');
    patronusElement.src = persona.imgPatronus;


    // Agregamos el div principal de tarjeta a "container".
    container.append(personaElement);
    personaElement.append(card);

    // Agregamos el div de la parte frontal y trasera al div principal de tarjeta.
    card.append(cardFront);
    card.append(cardBackback);

    // Agregamos la imagen y nombre a la parte frontal.
    cardFront.append(personaNombreElement);
    cardFront.append(fotoElement);

    // Agregamos el patronus en la parte trasera.
    cardBackback.append(personaPatronusElement);
    cardBackback.append(patronusElement);

    containerPatronus.append(personaElement);
  });
}

function patronusPage() {
  document.querySelector('#pagina_inicial').innerHTML = `
  <main>
    <section id="patronus_information" class="formato_cartas">
    </section>
  </main>
  <footer>
  <p> Adarleika and Geraldine &copy; Copyright 2020
  </footer>
  `;
  containerPatronus = document.querySelector('#patronus_information');
  showPatronus();
}
startPatronus.addEventListener('click', patronusPage);

function showData(characterData) {
  characterData.forEach((persona) => {
    // Div principal de tarjeta con un div para la parte frontal y otro para la parte trasera.
    const personaElement = document.createElement('article');
    personaElement.classList.add('information');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    const card = document.createElement('div');
    card.classList.add('card');

    // Agregamos un div para el nombre del personaje, le otorgamos una clase y obtenemos la data
    const personaNombreElement = document.createElement('div');
    personaNombreElement.classList.add('nombre-persona');
    personaNombreElement.innerHTML = `${persona.name}`;

    // Agregamos la imagen del personaje, le otorgamos una clase y obtenemos la data
    const fotoElement = document.createElement('img');
    fotoElement.classList.add('foto-persona');
    fotoElement.src = persona.image;

    // Agregamos un div para la casa del personaje, le otorgamos una clase y obtenemos la data
    const houseElement = document.createElement('div');
    houseElement.classList.add('house-persona');
    houseElement.innerHTML = `
    <span> House:</span> ${persona.house}`;

    // Agregamos un div para el género del personaje, le otorgamos una clase y obtenemos la data
    const genderElement = document.createElement('div');
    genderElement.classList.add('gender-persona');
    genderElement.innerHTML = `
    <span> Gender:</span> ${persona.gender}`;

    // Agregamos div para la fecha de nacimiento del personaje, otorgamos una clase y obtenemos data
    const birthElement = document.createElement('div');
    birthElement.classList.add('date-pf-birth');
    birthElement.innerHTML = `
    <span> Date of birth: </span>${persona.dateOfBirth}`;

    // Agregamos div para la ascendencia del personaje, le otorgamos una clase y obtenemos la data.

    const ancestryElement = document.createElement('div');
    ancestryElement.classList.add('ancestry-persona');
    ancestryElement.innerHTML = `
    <span> Ancestry:</span> ${persona.ancestry}`;

    // Agregamos un div para el rol del personaje, le otorgamos una clase y obtenemos la data.
    const rolePersona = agregarRol(persona);
    const roleElement = document.createElement('div');
    roleElement.classList.add('role-persona');
    roleElement.innerHTML = `
    <span> Role:</span> ${rolePersona}`;

    // Agregamos el div principal de tarjeta a "container".
    container.append(personaElement);
    personaElement.append(card);
    // Agregamos el div de la parte frontal y trasera al div principal de tarjeta.
    card.append(cardFront);
    card.append(cardBack);
    // Agregamos la imagen y nombre a la parte frontal.
    cardFront.append(personaNombreElement);
    cardFront.append(fotoElement);
    // Agregamos la casa, el género, fecha de nacimiento, ascendencia y rol a la parte trasera.
    cardBack.append(houseElement);
    cardBack.append(genderElement);
    cardBack.append(birthElement);
    cardBack.append(ancestryElement);
    cardBack.append(roleElement);
  });
}
showData(data);

// Filtro 'House'
function selectHouse() {
  document.querySelector('#role').value = '';
  document.querySelector('#gender').value = '';
  const houseFilter = house.value;
  const houseElement = filterHouse(houseFilter);
  container.innerHTML = '';
  showData(houseElement);
}

// Filtro 'Role'
function selectRole() {
  document.querySelector('#house').value = '';
  document.querySelector('#gender').value = '';
  const roleFilter = role.value;
  const roleElement = filterRole(roleFilter);
  container.innerHTML = '';
  showData(roleElement);
}

// Filtro 'Gender'
function selectGender() {
  document.querySelector('#house').value = '';
  document.querySelector('#role').value = '';
  const genderFilter = gender.value;
  const genderElement = filterGender(genderFilter);
  container.innerHTML = '';
  showData(genderElement);
}

// Buscador
const nameSearch = document.getElementById('nameSearch');
nameSearch.addEventListener('keyup', (event) => {
  const searchFilter = filterName(event);
  container.innerHTML = ''; 
  showData(searchFilter);
});


house.addEventListener('change', selectHouse);
role.addEventListener('change', selectRole);
gender.addEventListener('change', selectGender);

// Función para armar y obtener data de la página de varitas.
function showWands() {
  data.forEach((persona) => {
    if (persona.wand.wood === '' && persona.wand.length === '') {
      return;
    }
    if (persona.wand.core === 'unicorn hair' || persona.wand.core === 'unicorn tail-hair') {
      const personaElement = document.createElement('article');
      personaElement.classList.add('type-wand');
      unicornCore.append(personaElement);

      // Agregamos un div para el nombre del personaje, le otorgamos una clase y obtenemos la data
      const personaNombreElement = document.createElement('div');
      personaNombreElement.classList.add('nombre-persona');
      personaNombreElement.innerHTML = `${persona.name}`;
      personaElement.append(personaNombreElement);

      // Agregamos un div para la madera de la varita, le otorgamos una clase y obtenemos la data
      const woodElement = document.createElement('div');
      woodElement.classList.add('wood_of_wand');
      woodElement.innerHTML = `
        <span> Wood: </span>${persona.wand.wood}`;
      personaElement.append(woodElement);

      // Agregamos un div para el largo de la varita, le otorgamos una clase y obtenemos la data
      const lenghtElement = document.createElement('div');
      lenghtElement.classList.add('core_of_wand');
      lenghtElement.innerHTML = `
        <span> Length: </span>${persona.wand.length}`;
      personaElement.append(lenghtElement);
    }

    if (persona.wand.core === 'dragon heartstring') {
      const personaElement = document.createElement('article');
      personaElement.classList.add('type-wand');
      dragonCore.append(personaElement);

      // Agregamos un div para el nombre del personaje, le otorgamos una clase y obtenemos la data
      const personaNombreElement = document.createElement('div');
      personaNombreElement.classList.add('nombre-persona');
      personaNombreElement.innerHTML = `${persona.name}`;
      personaElement.append(personaNombreElement);

      // Agregamos un div para la madera de la varita, le otorgamos una clase y obtenemos la data
      const woodElement = document.createElement('div');
      woodElement.classList.add('wood_of_wand');
      woodElement.innerHTML = `
        <span> Wood: </span>${persona.wand.wood}`;
      personaElement.append(woodElement);

      // Agregamos un div para el largo de la varita, le otorgamos una clase y obtenemos la data
      const lenghtElement = document.createElement('div');
      lenghtElement.classList.add('core_of_wand');
      lenghtElement.innerHTML = `
        <span> Length: </span>${persona.wand.length}`;
      personaElement.append(lenghtElement);
    }

    if (persona.wand.core === 'phoenix feather') {
      const personaElement = document.createElement('article');
      personaElement.classList.add('type-wand');
      phoenixCore.append(personaElement);

      // Agregamos un div para el nombre del personaje, le otorgamos una clase y obtenemos la data
      const personaNombreElement = document.createElement('div');
      personaNombreElement.classList.add('nombre-persona');
      personaNombreElement.innerHTML = `${persona.name}`;
      personaElement.append(personaNombreElement);

      // Agregamos un div para la madera de la varita, le otorgamos una clase y obtenemos la data
      const woodElement = document.createElement('div');
      woodElement.classList.add('wood_of_wand');
      woodElement.innerHTML = `
        <span> Wood: </span>${persona.wand.wood}`;
      personaElement.append(woodElement);

      // Agregamos un div para el largo de la varita, le otorgamos una clase y obtenemos la data
      const lenghtElement = document.createElement('div');
      lenghtElement.classList.add('core_of_wand');
      lenghtElement.innerHTML = `
        <span> Length: </span>${persona.wand.length}`;
      personaElement.append(lenghtElement);
    }

    if (persona.wand.core === '' || persona.wand.core === 'thestral tail hair' || persona.wand.core === 'unknown') {
      if (persona.wand.core === '') {
        // eslint-disable-next-line no-param-reassign
        persona.wand.core = 'unknown';
      }
      const personaElement = document.createElement('article');
      personaElement.classList.add('type-wand');
      unkownCore.append(personaElement);

      // Agregamos un div para el nombre del personaje, le otorgamos una clase y obtenemos la data
      const personaNombreElement = document.createElement('div');
      personaNombreElement.classList.add('nombre-persona');
      personaNombreElement.innerHTML = `${persona.name}`;
      personaElement.append(personaNombreElement);

      // Agregamos un div para la madera de la varita, le otorgamos una clase y obtenemos la data
      const coreElement = document.createElement('div');
      coreElement.classList.add('core_of_wand');
      coreElement.innerHTML = `
         <span> Core: </span>${persona.wand.core}`;
      personaElement.append(coreElement);

      // Agregamos un div para la madera de la varita, le otorgamos una clase y obtenemos la data
      const woodElement = document.createElement('div');
      woodElement.classList.add('wood_of_wand');
      woodElement.innerHTML = `
        <span> Wood: </span>${persona.wand.wood}`;
      personaElement.append(woodElement);

      // Agregamos un div para el largo de la varita, le otorgamos una clase y obtenemos la data
      const lenghtElement = document.createElement('div');
      lenghtElement.classList.add('core_of_wand');
      lenghtElement.innerHTML = `
        <span> Length: </span>${persona.wand.length}`;
      personaElement.append(lenghtElement);
    }
  });
}

function wandPage() {
  document.querySelector('#pagina_inicial').innerHTML = `
    <main>
      <section id="wand_information" class = "formato_cartas ">
      <div class = "core-title">
        <h2 >Unicorn tail-hair core</h2>
        <div id = "unicorn_core" class = "core-wand">
          <div class = "img-wands"><img class="image-core" src="Media/Unicornio.png" alt=""></div></div>
      </div>
      <div class = "core-title">
        <h2 class = "core-title">Dragon heartstring core</h2>
        <div id = "dragon_core" class = "core-wand">
          <div class = "img-wands"><img class="image-core dragon-image" src="Media/dragon.png" alt=""></div>
        </div>
      </div>
      <div class = "core-title">
        <h2>Phoenix feather core</h2>
        <div id = "phoenix_core" class = "core-wand">
          <div class = "img-wands"><img class="image-core" src="Media/phoenix.png" alt=""></div>
        </div>
      </div>
      <div class = "core-title">
        <h2 ">Another core</h2>
        <div id = "unknown_core" class = "core-wand">
        <div class = "img-wands"><img class="image-core" src="Media/varita.png" alt=""></div>
        </div>
      </div>
      </section>
    </main>
    <footer>
    <p> Adarleika and Geraldine &copy; Copyright 2020
  </footer>
`;
  // containerWands = document.querySelector('#wand_information');
  unicornCore = document.querySelector('#unicorn_core');
  dragonCore = document.querySelector('#dragon_core');
  phoenixCore = document.querySelector('#phoenix_core');
  unkownCore = document.querySelector('#unknown_core');
  showWands();
}

pageWand.addEventListener('click', wandPage);

function start() {
  window.location = 'index.html';
}
let startButton = document.querySelector('.home');
startButton.addEventListener('click', start);
startButton = document.querySelector('.go-home');
startButton.addEventListener('click', start);
