import data from './data/potter/potter.js';


export const agregarRol = (persona) => {
  let role = '';
  // eslint-disable-next-line no-lone-blocks
  if (persona.hogwartsStudent) {
    role = 'Student';
  }
  if (persona.hogwartsStaff) {
    role = 'Staff';
  }
  if (!persona.hogwartsStaff && !persona.hogwartsStudent) {
    role = 'No role';
  }
  return role;
};

export const filterHouse = (house) => {
  if (house === '') {
    return data;
  }
  const personajesHome = data.filter(persona => persona.house === house);
  return personajesHome;
};

export const filterRole = (role) => {
  if (role === '') {
    return data;
  }
  const personajeHome = data.filter((persona) => {
    const characterRol = agregarRol(persona);
    return characterRol === role;
  });
  return personajeHome;
};

export const filterGender = (gender) => {
  if (gender === '') {
    return data;
  }
  const personajesHome = data.filter(persona => persona.gender === gender);
  return personajesHome;
};

export const filterName = (event) => {
  const term = event.target.value.toUpperCase();
  return data.filter(persona => persona.name.toUpperCase().indexOf(term) !== -1);
};


// export const example = () => 'example';

// export const anotherExample = () => 'OMG';
