import {
  agregarRol,
  filterHouse,
} from '../src/data.js';

describe('agregarRol', () => {
  it('is a function', () => {
    expect(typeof agregarRol).toBe('function');
  });

  it('returns `hogwartsStudent`', () => {
    const data = {
      name: 'Cedric Diggory',
      hogwartsStaff: false,
      hogwartsStudent: true,
    };
    expect(agregarRol(data)).toBe('Student');
  });
});


describe('filterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  it('returns `filterHouse`', () => {
    const data = [{
      name: 'Cedric Diggory',
      species: 'human',
      gender: 'male',
      house: 'Hufflepuff',
      dateOfBirth: '',
      yearOfBirth: 1977,
      ancestry: '',
      eyeColour: 'grey',
      hairColour: 'brown',
      wand: {
        wood: 'ash',
        core: 'unicorn hair',
        length: 12.25,
      },
      patronus: '',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Robert Pattinson',
      alive: false,
      image: 'http://hp-api.herokuapp.com/images/cedric.png',
    }];
    expect(filterHouse('Hufflepuff')).toEqual(data);
  });
});
