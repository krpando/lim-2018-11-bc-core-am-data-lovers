/* global WORLDBANK*/
/* global WorldBank*/
/* exported paises*/

// Disposición inicial de secciones
document.getElementById('section-search').style.display = 'none'; 
document.getElementById('section-years').style.display = 'none';
document.getElementById('section-sort').style.display = 'none';
document.getElementById('section-average').style.display = 'none';

// Uso del botón VOLVER AL INICIO para cada sección
document.getElementById('from-search').addEventListener('click', () => {
  document.getElementById('section-search').style.display = 'none';
  document.getElementById('section-options').style.display = 'block';
});
document.getElementById('from-years').addEventListener('click', () => {
  document.getElementById('section-years').style.display = 'none';
  document.getElementById('section-options').style.display = 'block';
});
document.getElementById('from-sort').addEventListener('click', () => {
  document.getElementById('section-sort').style.display = 'none';
  document.getElementById('section-options').style.display = 'block';
});
document.getElementById('from-average').addEventListener('click', () => {
  document.getElementById('section-average').style.display = 'none';
  document.getElementById('section-options').style.display = 'block';
});

// Funcionalidad de botones para opciones de navegación
document.getElementById('nav-years').addEventListener('click', () => {
  document.getElementById('section-options').style.display = 'none';
  document.getElementById('section-years').style.display = 'block';
});
document.getElementById('nav-sort').addEventListener('click', () => {
  document.getElementById('section-options').style.display = 'none';
  document.getElementById('section-sort').style.display = 'block';
});
document.getElementById('nav-average').addEventListener('click', () => {
  document.getElementById('section-options').style.display = 'none';
  document.getElementById('section-average').style.display = 'block';
});

// Elección de países para uso general de variable inData
let inData = WORLDBANK.PER.indicators;
const paises = () => {
  switch (document.getElementById('country').value) {
  case 'BRASIL' :
    inData = WORLDBANK.BRA.indicators;
    break;
  case 'CHILE' :
    inData = WORLDBANK.CHL.indicators;
    break;  
  case 'MÉXICO' :
    inData = WORLDBANK.MEX.indicators;
    break;
  default :
    inData = WORLDBANK.PER.indicators;
  }
  return inData;
};

// ------------------------------ Funcionalidad de búsqueda rápida ------------------------------ //
document.getElementById('search-btn').addEventListener('click', () => {
  document.getElementById('section-options').style.display = 'none'; // Disposición de secciones
  document.getElementById('section-search').style.display = 'block';
  document.getElementById('result').innerHTML = ''; // Limpiado de caja antes de impresión
  let inputWord = document.getElementById('word');
  if (WorldBank.filterSearch(inData, inputWord.value).join() === '') {
    document.getElementById('result').innerHTML = 'No se encontraron registros';
  } else {
    const outputSearch = WorldBank.filterSearch(inData, inputWord.value);
    for (let i = 0; i < outputSearch.length; i++) {
      document.getElementById('result').innerHTML += `
        <ul class="result">
          <li><a href="#sortSection" class="result">${outputSearch[i]}</a></li>
        </ul>
        `;
    }
  }
});

// ---------------------------- Funcionalidad de búsqueda por temas ---------------------------- //
document.getElementById('education').addEventListener('click', () => { // Tema: Educación
  document.getElementById('section-options').style.display = 'none';
  document.getElementById('section-search').style.display = 'block';
  document.getElementById('result').innerHTML = '';
  (WorldBank.filterThemes(inData, 'SE')).forEach(resultado);
});
document.getElementById('social-dev').addEventListener('click', () => { // Tema: Desarrollo Social
  document.getElementById('section-options').style.display = 'none';
  document.getElementById('section-search').style.display = 'block';
  document.getElementById('result').innerHTML = '';
  (WorldBank.filterThemes(inData, 'SL')).forEach(resultado);
});
document.getElementById('gender').addEventListener('click', () => { // Tema: Género 
  document.getElementById('section-options').style.display = 'none';
  document.getElementById('section-search').style.display = 'block';
  document.getElementById('result').innerHTML = '';
  (WorldBank.filterThemes(inData, 'SP')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'SG')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'SH')).forEach(resultado);
});
document.getElementById('economy').addEventListener('click', () => { // Tema: Economía 
  document.getElementById('section-options').style.display = 'none';
  document.getElementById('section-search').style.display = 'block';
  document.getElementById('result').innerHTML = '';
  (WorldBank.filterThemes(inData, 'DT')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'HD')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'IC')).forEach(resultado);
  (WorldBank.filterThemes(inData, 'pe')).forEach(resultado);
});
// Impresión de resultados en página
const resultado = (themes) => document.getElementById('result').innerHTML += `
  <ul class="result">
    <li><a href="#sortSection" class="result">${themes}</a></li>
  </ul>
  `;

// -------------- Funcionalidad para mostrar tabla de indicadores y datos según años -------------- //
document.getElementById('yearBtn').addEventListener('click', () => {
  document.getElementById('search-container').style.display = 'none';
  document.getElementById('table-years').innerHTML = ''; // Limpiado de caja antes de impresión
  let inputYear = document.getElementById('year');
  const resultadoValores = WorldBank.filterYears(inData, parseInt(inputYear.value));
  for (let i = 0; i < inData.length; i++) {
    const resultadoIndicadores = inData[i].indicatorName;
    if ((resultadoValores[i].toString())[1] === '.' || (resultadoValores[i].toString())[2] === '.') { // Condición para imprimir solo indicadores con valores
      document.getElementById('table-years').innerHTML += `
        <tr>
        <td>${resultadoIndicadores}</td>
        <td>${resultadoValores[i].toFixed(2)} %</td>
        </tr>
        `;
    } else if (resultadoValores[i] !== '') { // Condición para imprimir solo indicadores con valores
      document.getElementById('table-years').innerHTML += `
        <tr>
          <td>${resultadoIndicadores}</td>
          <td>${resultadoValores[i]}</td>
        </tr>
        `;
    }
  }
});

// --------------- Funcionalidad para mostrar tabla de años y datos según indicador --------------- //
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
  `;
});
// Aplicación de la función para impresión en página
document.getElementById('sortBy').addEventListener('click', () => {
  // Extraer nueva data en función a indicador elegido en lista desplegable 
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
    inDataIndicator.push({
      'year': values,
      'value': newInData[values]
    });
  }
  // Impresión en tablas
  document.getElementById('table4sort').innerHTML = ''; // Limpiado de caja antes de impresión
  let outputSort = WorldBank.sortData(inDataIndicator, typeSelected, orderSelected);
  let yearType = [];
  let valueType = [];
  for (let i = 0; i < outputSort.length; i++) {
    yearType.push(Object.values(outputSort[i])[0]); // Variable para años
    valueType.push(Object.values(outputSort[i])[1]); // Variable para valores o porcentajes
    if ((valueType[i].toString())[1] === '.' || (valueType[i].toString())[2] === '.') {
      document.getElementById('table4sort').innerHTML += `
      <tr>
        <td>${yearType[i]}</td>  
        <td>${valueType[i].toFixed(2)} %</td>
      </tr>
      `;
    } else if (valueType[i] !== '') { // Condición para imprimir solo años que contengan valores y obviar vacíos
      document.getElementById('table4sort').innerHTML += `
            <tr>
              <td>${yearType[i]}</td>  
              <td>${valueType[i]}</td>
            </tr>
            `;
    }
  }
});

// ----------------------------- Funcionalidad de cálculo del promedio ----------------------------- //
document.getElementById('computeStat').addEventListener('click', () => {
  // Extraer nueva data en función a indicador elegido en lista desplegable 
  const indicSelected = document.getElementById('indicators').value;
  let newInData = '';
  for (let i = 0; i < inData.length; i++) {
    if (inData[i].indicatorName === indicSelected) {
      newInData = Object.assign(inData[i].data);
    }
  }
  // Cambia objeto en newInData en objetos individuales con nombres de propiedades comunes
  let inDataIndicator = [];
  for (let values in newInData) {
    inDataIndicator.push({
      'year': values,
      'value': newInData[values]
    });
  }
  let inDataValues = [];
  for (let i = 0; i < inDataIndicator.length; i++) {
    if (inDataIndicator[i].value !== '') {
      inDataValues.push(inDataIndicator[i].value);
    }
  }
  let outputCompute = WorldBank.averageCompute(inDataValues);
  if ((outputCompute.toString())[1] === '.' || (outputCompute.toString())[2] === '.') { 
    document.getElementById('compute').innerHTML += `
    <p>${outputCompute.toFixed(2)} %</p>
    `;
  } else document.getElementById('compute').innerHTML += `
   <p>${outputCompute}</p>
   `;
});

// <<<<<<<<<<<< Copiado de referencia tipo APA >>>>>>>>>>>> //
document.getElementById('apa-btn').addEventListener('click', () => {
  const inputTemporal = document.createElement('input');
  let fecha = new Date(); 
  inputTemporal.type = 'text';
  inputTemporal.value = `"Banco Mundial. (${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}). Indicadores del Desarrollo Mundial: Perú. Obtenido de  https://datos.bancomundial.org/pais/peru?view=chart"`; 
  document.body.appendChild(inputTemporal);
  inputTemporal.select();
  document.execCommand('Copy');
  document.body.removeChild(inputTemporal);
  alert('El texto para referenciar la presente página en formato APA ha sido copiado');
}); 