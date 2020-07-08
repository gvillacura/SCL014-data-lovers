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
const startPatronus = document.querySelector('#patronus');

let containerPatronus;

function patronusPage() {
  document.querySelector('#pagina_inicial').innerHTML = `
  <div id="filtros">
  <select id="house">
    <option value="">House</option>
    <option value="Gryffindor"> Gryffindor</option>
    <option value="Slytherin"> Slytherin</option>
    <option value="Ravenclaw"> Ravenclaw</option>
    <option value="Hufflepuff"> Hufflepuff</option>
  </select>
  <select id="role">
    <option value="">Role</option>
    <option value="Student"> Student</option>
    <option value="Staff"> Staff</option>
    <option value="No role"> No role</option>
  </select>
  <select id="gender">
    <option value="">Gender</option>
    <option value="female"> Female</option>
    <option value="male"> Male</option>
  </select>
</div>
  <main>
    <section id="patronus_information" class="formato_cartas">
    </section>
  </main>
  `;
  containerPatronus = document.querySelector("#patronus_information");
  showPatronus();
}



function showPatronus() {
  data.forEach((persona) => {
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






