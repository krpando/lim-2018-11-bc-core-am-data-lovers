/* global WORLDBANK*/
/* global WorldBank*/

// Variable a usarse para todas las funciones
const inData = WORLDBANK.PER.indicators;

// ---------------- Funcionalidad de búsqueda rápida ---------------- //
document.getElementById('searchBtn').addEventListener('click', () => {
  let inputWord = document.getElementById('word');
  if (WorldBank.filterSearch(inData, inputWord.value).join() === '') {
    document.getElementById('result').innerHTML = 'No se encontraron registros';
  } else {
    const outputSearch = WorldBank.filterSearch(inData, inputWord.value);
    for (let i = 0; i < outputSearch.length; i++) {
      document.getElementById('result').innerHTML += `
        <ul>
          <li>${outputSearch[i]}</li>
        </ul>
        `;
    }  
  }
});
/* // ---------------- Funcionalidad de búsqueda por temas ----------------//
document.getElementById('education').addEventListener('click', () => { // Tema: Educación
  (WorldBank.filterThemes(inData,'SE')).forEach(resultado)
}); 
document.getElementById('social-dev').addEventListener('click', () => { // Tema: Desarrollo Social
  (WorldBank.filterThemes(inData,'SL')).forEach(resultado)
});
document.getElementById('gender').addEventListener('click', () => { // Tema: Género 
  (WorldBank.filterThemes(inData,'SP')).forEach(resultado);
  (WorldBank.filterThemes(inData,'SG')).forEach(resultado);
  (WorldBank.filterThemes(inData,'SH')).forEach(resultado)
});
document.getElementById('economy').addEventListener('click', () => { // Tema: Economía 
  (WorldBank.filterThemes(inData,'DT')).forEach(resultado);
  (WorldBank.filterThemes(inData,'HD')).forEach(resultado);
  (WorldBank.filterThemes(inData,'IC')).forEach(resultado);
  (WorldBank.filterThemes(inData,'pe')).forEach(resultado)
});
const resultado = (inData) => document.getElementById('result').innerHTML += `
  <ul>
    <li>${[i]]}</li>
  </ul>
  `; */

// ---------------- Funcionalidad para mostrar tabla de indicadores y datos según años ---------------- //
document.getElementById('yearBtn').addEventListener('click', () => {
  let inputYear = document.getElementById('year');
  const resultadoValores = WorldBank.filterYears(inData, parseInt(inputYear.value));
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

// ---------------- Funcionalidad para mostrar tabla de años y datos según indicador ---------------- //
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
  });
// Extraer nueva data en función a indicador elegido en lista desplegable 
document.getElementById('sortBy').addEventListener('click', () => {
  const indicSelected = document.getElementById('indicators').value;
  const typeSelected = document.getElementById('data-type').value;
  const orderSelected = document.getElementById('order-type').value;
  let newInData = '';
  for (let i = 0; i < inData.length; i++) {
    if (inData[i].indicatorName === indicSelected) {
      newInData = Object.assign(inData[i].data);
    }
  }
  // Cambia objeto en newInData en objetos individuales con nombres de propiedades comunes
  let inDataIndicator = [];
  for (let values in newInData) { 
    inDataIndicator.push({"year" : values, "value" : inDataIndicator[values]});
  }
  // Aplicación de la función para impresión en página
    let outputSort = WorldBank.sortData(inDataIndicator, typeSelected, orderSelected);
    let yearType = ''; // Variable para años
    let valueType = ''; // Variable para valores o porcentajes
    yearType = Object.keys(outputSort);
    valueType = Object.values(outputSort); 
    for (let i = 0; i < outputSort.length; i++) {
      if (valueType[i] !== '') { // Condición para imprimir solo años que contengan valores
        document.getElementById('table4sort').innerHTML += `
          <tr>
            <td>${yearType[i]}</td>  
            <td>${valueType[i]}</td>
          </tr>
          `;
      }
    }  
}); 