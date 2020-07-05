import {
  agregarRol,
  filterHouse,
  filterRole,
  filterGender,
} from './data.js';
import data from './data/potter/potter.js';

const house = document.querySelector('#house');
const role = document.querySelector('#role');
const gender = document.querySelector('#gender');

const container = document.querySelector('#cartas');

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
    <span> Date of birth:</span>${persona.dateOfBirth}`;

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

function selectHouse() {
  document.querySelector('#role').value = '';
  document.querySelector('#gender').value = '';
  const houseFilter = house.value;
  const houseElement = filterHouse(houseFilter);
  container.innerHTML = '';
  showData(houseElement);
}

function selectRole() {
  document.querySelector('#house').value = '';
  document.querySelector('#gender').value = '';
  const roleFilter = role.value;
  const roleElement = filterRole(roleFilter);
  container.innerHTML = '';
  showData(roleElement);
}

function selectGender() {
  document.querySelector('#house').value = '';
  document.querySelector('#role').value = '';
  const genderFilter = gender.value;
  const genderElement = filterGender(genderFilter);
  container.innerHTML = '';
  showData(genderElement);
}

house.addEventListener('change', selectHouse);
showData(data);
role.addEventListener('change', selectRole);
gender.addEventListener('change', selectGender);
