/* global WorldBank*/
require('../src/data.js');

// Para parámetro 'data'
const miniData = [
  {
    'data': {'1960':'', '1990':30.45, '2010':15.3567},
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
    'indicatorCode': 'SL.TLF.PART.FE.ZS'
  },
  {
    'data': {'1960':'', '1990':20.55555,'2010':55.008},
    'indicatorName': 'Fuerza laboral con educación intermedia (% del total)',
    'indicatorCode': 'SL.TLF.INTM.ZS'
  },
  {
    'data': {'1960':'', '1990':3.5,'2010':0.56},
    'indicatorName': 'Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)',
    'indicatorCode': 'SL.TLF.INTM.MA.ZS'
  }
];

// ----------- Testeando filterSearch ----------- //
// Para parámetro 'word'
const inputSearch = 'mujeres';
// Resultado esperado para filterSearch
const outputSearch = ['Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)'];

describe('filterSearch es una función', () => {
  it('Deberia ser una función', () => {
    expect(typeof WorldBank.filterIndicators).toBe('function');
  });

it('returns `deberia regresar la lista de indicadores filtrados por palabra clave`', () => {
    expect(WorldBank.filterIndicators(miniData, inputSearch)).toEqual(outputSearch);
  });
});

// ----------- Testeando filterThemes ----------- //
// Para parámetro 'themeCode'
const inputThemes = 'SL';
// Resultado esperado para filterThemes
const outputThemes = [
  'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)', 
  'Fuerza laboral con educación intermedia (% del total)',
  'Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)'
];

describe('filterThemes es una función', () => {
  it('Debería ser una función', () => {
    expect(typeof WorldBank.filterThemes).toBe('function');
  });

  it('returns `deberia regresar una lista con los indicadores filtrados por codigo`', () => {
    expect(WorldBank.filterThemes(miniData, inputThemes)).toEqual(outputThemes);
  });
});

// ----------- Testeando filterYears ----------- //
// Para parámetro 'year'
const inputByYears = '2010';
// Resultado esperado para filterYears
const outputByYears = [15.3567, 55.008, 0.56];

describe('filterYears es una función', () => {
  it('is a function', () => {
    expect(typeof WorldBank.filterYears).toBe('function');
  });

  it('returns `outputByYears`', () => {
    expect(WorldBank.filterYears(miniData, inputByYears)).toEqual(outputByYears);
  });
});

/* 
// ----------- Testeando sortData ----------- //
// Para parámetro 'dataType'
const inputSortOne = 'año';
const inputSortTwo = 'datos';
// Resultado esperado para sortData
const outputSort = [];

describe('sortData es una función', () => {
  it('is a function', () => {
    expect(typeof WorldBank.sortData).toBe('function');
  });
}); 
*/