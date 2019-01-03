/* global WORLDBANK*/
/* global WorldBank*/

// Variable a usarse para todas las funciones
const inData = WORLDBANK.PER.indicators;

// Funcionalidad de búsqueda rápida
document.getElementById('searchBtn').addEventListener('click', () => {
  let palabraClave = document.getElementById('word');
  if (WorldBank.filterIndicatorsSearch(inData, palabraClave.value).join() === '') {
    document.getElementById('result').innerHTML = 'No se encontraron registros';
  } else {
    const resultado = WorldBank.filterIndicatorsSearch(inData, palabraClave.value);
    for (let i = 0; i < resultado.length; i++) {
      document.getElementById('result').innerHTML += `
        <ul>
          <li>${resultado[i]}</li>
        </ul>
        `;
    }  
  }
});
// Funcionalidad de búsqueda por temas
/*let btn = '';
document.getElementById('education').addEventListener('click', () => {
  switch (id){
    case education: 
    btn = 'SE';
    break;
    case social-dev:
    btn = 'SL';
    break;
    case gender:
    btn = 'SP' || 'SG' || 'SH';
    break;
    case economy:
    btn = 'DT'
    btn = 'HD'
    btn = 'IC'
    btn = 'MS'
    btn = 'pe'
    break;
  }
}*/
/*document.getElementById('education').addEventListener('click', () => { // Tema: Educación
  (WorldBank.filterThemes(inData,'SE')).forEach(resultado)
}); 
document.getElementById('social-dev').addEventListener('click', () => { // Tema: Desarrollo Social
  (WorldBank.filterThemes(inData,'SL')).forEach(resultado)
});
document.getElementById('gender').addEventListener('click', () => { // Tema: Género 
  (WorldBank.filterThemes(inData,'SP')).forEach(resultado);
  (WorldBank.filterThemes(inData,'SG')).forEach(resultado)
});
const resultado = document.getElementById('result').innerHTML += `
  <ul>
    <li>${themes.indicatorName}</li>
  </ul>
  `;*/

// Funcionalidad para mostrar tabla de indicadores y datos según años
document.getElementById('yearBtn').addEventListener('click', () => {
  let año = document.getElementById('year');
  const resultadoValores = WorldBank.filterYears(inData, parseInt(año.value));
  for (let i = 0; i < inData.length; i++) {
    const resultadoIndicadores = inData[i].indicatorName;
    if (resultadoValores[i] != 0) { // Condición para imprimir solo indicadores con valores
      document.getElementById('table').innerHTML += `
        <tr>
            <td>${resultadoIndicadores}</td>
            <td>${resultadoValores[i].toFixed(2)} %</td>
        </tr>
        ` ;
    }
  }
});

// Mostrar indicadores en lista desplegable
const indicadores = inData.map((arr) => {
  return arr.indicatorName;
});
const sortIndic = indicadores.sort();
  sortIndic.forEach((indicador) => {
    document.getElementById('indicators').innerHTML += `
    <select>  
      <option>${indicador}</option>
    </select>
  `
  })
 
// Funcionalidad para mostrar tabla de indicadores y datos según años
document.getElementById('sortBy').addEventListener('click', () => {
  const opSelected = document.getElementById('indicators').value;
  let indSelectedData = [];
  for (let i = 0; i < inData.length; i++) {
    if (inData[i].indicatorName === opSelected) {
          indSelectedData.push(inData[i].data);
    }
  }  
  for (let i = 0; i < indSelectedData[0].length; i++) {
    document.getElementById('table4sort').innerHTML += `
    <tr>
      <td>${Object.keys(indSelectedData[0].i)}</td>
      <td>${Object.values(indSelectedData[0].i)} %</td>
    </tr>
    `; 
  }
})  