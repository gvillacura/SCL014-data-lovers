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

export const filterGender = (gender) => {
  if (gender === '') {
    return data;
  }
  const personajesHome = data.filter(persona => persona.gender === gender);
  return personajesHome;
};

// export const example = () => 'example';

// export const anotherExample = () => 'OMG';
