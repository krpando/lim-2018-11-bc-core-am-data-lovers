/* window.WORLDBANK = {
  filterIndicators,
  filterYears
}; */ 
/* global filterYears*/
// Función filtrado para búsqueda rápida
function filterIndicators(palabra, data) {
  const indicadores = data.map((arr) => {
    return arr.indicatorName;
  });
  return indicadores.filter((x) => {
    return x.toLowerCase().indexOf(palabra.toLowerCase()) > -1;
  });
}
// Función filtrado por años
function filterYears(data, año) {
  const yearData = [];
  for (let i = 0; i < data.length; i++) {
    yearData.push(data[i].data[año]);
  }
  return yearData;
}