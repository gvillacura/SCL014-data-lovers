/* eslint-disable indent */
import {
  agregarRol,
  filterHouse,
  filterGender,
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

describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('returns `filter Gender`', () => {
    const data = [{
        name: 'Hermione Granger',
        species: 'human',
        gender: 'female',
        house: 'Gryffindor',
        dateOfBirth: '19-09-1979',
        yearOfBirth: 1979,
        ancestry: 'muggleborn',
        eyeColour: 'brown',
        hairColour: 'brown',
        wand: {
          wood: 'vine',
          core: 'dragon heartstring',
          length: '',
        },
        patronus: 'otter',
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: 'Emma Watson',
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
      {
        name: 'Minerva McGonagall',
        species: 'human',
        gender: 'female',
        house: 'Gryffindor',
        dateOfBirth: '04-10-1925',
        yearOfBirth: 1925,
        ancestry: '',
        eyeColour: '',
        hairColour: 'black',
        wand: {
          wood: '',
          core: '',
          length: '',
        },
        patronus: 'tabby cat',
        hogwartsStudent: false,
        hogwartsStaff: true,
        actor: 'Dame Maggie Smith',
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
      },
      {
        name: 'Cho Chang',
        species: 'human',
        gender: 'female',
        house: 'Ravenclaw',
        dateOfBirth: '',
        yearOfBirth: '',
        ancestry: '',
        eyeColour: 'brown',
        hairColour: 'black',
        wand: {
          wood: '',
          core: '',
          length: '',
        },
        patronus: 'swan',
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: 'Katie Leung',
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/cho.jpg',
      },
      {
        name: 'Luna Lovegood',
        species: 'human',
        gender: 'female',
        house: 'Ravenclaw',
        dateOfBirth: '13-02-1981',
        yearOfBirth: 1981,
        ancestry: '',
        eyeColour: 'grey',
        hairColour: 'blonde',
        wand: {
          wood: '',
          core: '',
          length: '',
        },
        patronus: 'hare',
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: 'Evanna Lynch',
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/luna.jpg',
      },
      {
        name: 'Ginny Weasley',
        species: 'human',
        gender: 'female',
        house: 'Gryffindor',
        dateOfBirth: '11-08-1981',
        yearOfBirth: 1981,
        ancestry: 'pure-blood',
        eyeColour: 'brown',
        hairColour: 'red',
        wand: {
          wood: 'yew',
          core: '',
          length: '',
        },
        patronus: 'horse',
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: 'Bonnie Wright',
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/ginny.jpg',
      },
      {
        name: 'Bellatrix Lestrange',
        species: 'human',
        gender: 'female',
        house: 'Slytherin',
        dateOfBirth: '',
        yearOfBirth: 1951,
        ancestry: 'pure-blood',
        eyeColour: 'brown',
        hairColour: 'black',
        wand: {
          wood: 'walnut',
          core: 'dragon heartstring',
          length: 12.75,
        },
        patronus: '',
        hogwartsStudent: false,
        hogwartsStaff: false,
        actor: 'Helena Bonham Carter',
        alive: false,
        image: 'http://hp-api.herokuapp.com/images/bellatrix.jpg',
      },
      {
        name: 'Dolores Umbridge',
        species: 'human',
        gender: 'female',
        house: 'Slytherin',
        dateOfBirth: '',
        yearOfBirth: '',
        ancestry: 'half-blood',
        eyeColour: 'brown',
        hairColour: 'grey',
        wand: {
          wood: 'birch',
          core: 'dragon heartstring',
          length: 8,
        },
        patronus: 'persian cat',
        hogwartsStudent: false,
        hogwartsStaff: true,
        actor: 'Imelda Staunton',
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/umbridge.jpg',
      },
      {
        name: 'Mrs Norris',
        species: 'cat',
        gender: 'female',
        house: '',
        dateOfBirth: '',
        yearOfBirth: '',
        ancestry: '',
        eyeColour: 'yellow',
        hairColour: 'brown',
        wand: {
          wood: '',
          core: '',
          length: '',
        },
        patronus: '',
        hogwartsStudent: false,
        hogwartsStaff: true,
        actor: 'Maxime, Alanis and Tommy the cats',
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/norris.JPG',
      },
    ];
    expect(filterGender('female')).toEqual(data);
  });
});
