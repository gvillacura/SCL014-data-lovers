
import {
  agregarRol,
  filterHouse,
} from '../src/data.js';


describe('agregarRol', () => {
  it('is a function', () => {
    expect(typeof agregarRol).toBe('function');
  });

  it('returns `agregarRol`', () => {
    expect(agregarRol()).toBe('agregarRol');
  });
});


describe('filterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  it('returns `filterHouse`', () => {
    expect(filterHouse()).toBe('filterHouse');
  });
});
