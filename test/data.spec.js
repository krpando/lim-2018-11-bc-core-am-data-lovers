require('../src/data.js');

/* const input = [
  'Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15años) (estimación nacional)',
  'Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)', 
  'Fuerza laboral con educación intermedia (% del total)', 
  'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
  'Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)'
];

const output = [
  'Fuerza laboral con educación intermedia (% del total)', 
  'Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)',
  'Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15años) (estimación nacional)',
  'Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)'
]; */

describe('worldbank.busqueda', () => {
  it('debería ser una función', () => {
    expect(typeof busqueda).toBe('function');
  });
});

/* describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  }); */
