/* global filterIndicators*/
/* global filterYears*/
/* global WORLDBANK*/
// Funcionalidad de búsqueda rápida
document.getElementById('searchBtn').addEventListener('click', () => {
  let palabraClave = document.getElementById('word');
  if (filterIndicators(palabraClave.value, WORLDBANK.PER.indicators).join() === '') {
    document.getElementById('result').innerHTML = 'No se encontraron registros';
  } else {
    const resultado = filterIndicators(palabraClave.value, WORLDBANK.PER.indicators);
    for (let i = 0; i < resultado.length; i++) {
      document.getElementById('result').innerHTML += `
    <ul>
      <li>${resultado[i]}</li>
    </ul>
  ` ;
    }  
  }
});
// Funcionalidad para mostrar tabla
document.getElementById('yearBtn').addEventListener('click', () => {
  let año = document.getElementById('año');
  const indicadores = WORLDBANK.PER.indicators;
  const resultadoValores = filterYears(indicadores, parseInt(año.value));
  for (let i = 0; i < indicadores.length; i++) {
    const resultadoIndicadores = indicadores[i].indicatorName;
    document.getElementById('table').innerHTML += `
    <tr>
      <td>${resultadoIndicadores}</td>
      <td>${resultadoValores[i]}</td>
    </tr>
  ` ;
  }
});