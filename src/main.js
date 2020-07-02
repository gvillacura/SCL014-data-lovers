import data from './data/potter/potter.js';

const container = document.querySelector('#cartas');

data.forEach((persona) => {
  // Div principal de tarjeta
  const personaElement = document.createElement('article');
  personaElement.classList.add('information');

  const personaNombreElement = document.createElement('div');
  personaNombreElement.innerHTML = `${persona.name}`;
  personaNombreElement.classList.add('nombre-persona');

  const fotoElement = document.createElement('img');
  fotoElement.src = persona.image;
  fotoElement.classList.add('foto-persona');

  personaElement.append(personaNombreElement);
  container.append(personaElement);
  personaElement.append(fotoElement);
});
