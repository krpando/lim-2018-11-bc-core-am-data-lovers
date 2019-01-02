/* global WorldBank*/
require('../src/data.js');

// Para parámetro 'data'
const miniData = [
  {
    "data": {"1960":"", "1990":30.45, "2010":15.3567},
    "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
    "indicatorCode": "SL.TLF.PART.FE.ZS"
  },
  {
    "data": {"1960":"", "1990":20.55555,"2010":55.008},
    "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
    "indicatorCode": "SL.TLF.INTM.ZS"
  },
  {
    "data": {"1960":"", "1990":3.5,"2010":0.56},
    "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
    "indicatorCode": "SL.TLF.INTM.MA.ZS"
  }
];
// Para parámetro 'palabra'
const inputSearchFast = 'mujeres';
// Resultado esperado para filterIndicators
const outputSearchFast = ['Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)'];

// Testeando filterIndicators
describe('filterIndicators es una función', () => {
  it('is a function', () => {
    expect(typeof WorldBank.filterIndicators).toBe('function');
  });

  it('returns `outputSearchFast`', () => {
    expect(WorldBank.filterIndicators(miniData, inputSearchFast)).toEqual(outputSearchFast);
  });
});

// Para parámetro 'palabra'
const inputByYears = '2010';
// Resultado esperado para filterIndicators
const outputByYears = [15.3567, 55.008, 0.56];

// Testeando filterYears
describe('filterYears es una función', () => {
  it('is a function', () => {
    expect(typeof WorldBank.filterYears).toBe('function');
  });

  it('returns `outputByYears`', () => {
    expect(WorldBank.filterYears(miniData, inputByYears)).toEqual(outputByYears);
  });
});

// Testeando sortData
describe('sortData es una función', () => {
  it('is a function', () => {
    expect(typeof WorldBank.sortData).toBe('function');
  });
});