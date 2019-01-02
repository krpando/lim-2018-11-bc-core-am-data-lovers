/* global WorldBank*/
require('../src/data.js');

const inputSearchFast = 'mujeres';
const miniData = [
  {
    "data": {"1960":"", "1990":"30.45","2010":"15.3567"},
    "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
    "indicatorCode": "SL.TLF.PART.FE.ZS"
  },
  {
    "data": {"1960":"", "1990":"20.55555","2010":"55.008"},
    "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
    "indicatorCode": "SL.TLF.INTM.ZS"
  },
  {
    "data": {"1960":"", "1990":"3.5","2010":"0.56"},
    "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
    "indicatorCode": "SL.TLF.INTM.MA.ZS"
  }
];
const outputSearchFast = ['Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)'];

describe('filterIndicators es una función', () => {
  it('is a function', () => {
    expect(typeof WorldBank.filterIndicators).toBe('function');
  });
  it('returns `outputSearchFast`', () => {
    expect(WorldBank.filterIndicators(inputSearchFast, miniData)).toEqual(outputSearchFast);
  });
});

describe('filterIndicators es una función', () => {
  it('is a function', () => {
    expect(typeof WorldBank.filterYears).toBe('function');
  });
});