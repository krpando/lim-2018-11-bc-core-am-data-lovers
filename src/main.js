/* global WORLDBANK*/
/* global WorldBank*/

// Funcionalidad de búsqueda rápida
document.getElementById('searchBtn').addEventListener('click', () => {
    let palabraClave = document.getElementById('word');
    if (WorldBank.filterIndicators(palabraClave.value, WORLDBANK.PER.indicators).join() === '') {
      document.getElementById('result').innerHTML = 'No se encontraron registros';
    } else {
      const resultado = WorldBank.filterIndicators(palabraClave.value, WORLDBANK.PER.indicators);
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
    let año = document.getElementById('year');
    const indicadores = WORLDBANK.PER.indicators;
    const resultadoValores = WorldBank.filterYears(indicadores, parseInt(año.value));
    for (let i = 0; i < indicadores.length; i++) {
      const resultadoIndicadores = indicadores[i].indicatorName;
      if (resultadoValores[i] != 0) { // Condición para imprimir solo indicadores con valores
      document.getElementById('table').innerHTML += `
        <tr>
            <td>${resultadoIndicadores}</td>
            <td>${resultadoValores[i].toFixed(2)} %</td>
        </tr>
    ` ;
    }}
  });