/* window.WORLDBANK = {
  busqueda
};
esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window */
/*
const one = WORLDBANK.PER.indicators;
const two = [];
const three = [];
let four = document.getElementById('año');

const lista = () => {
  for (let i = 0; i < one.length; i++) {
    two.push(one[i].indicatorName);
    three.push(one[i].data[four.value]);
    let tr = document.createElement('TR'); // Crea una fila
    let td1 = document.createElement('TD'); // Crea la columna indicadores    
    let txt = document.createTextNode(one[i].indicatorName);
    let td2 = document.createElement('TD'); // Crea la columna valores
    let nt = document.createTextNode(one[i].data[four.value]);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.appendChild(txt);
    td2.appendChild(nt);
    document.getElementById('lista').appendChild(tr);
  }
}; 

function filterIndicators(palabra) {
  const manual = one.map((arr) => {
    return arr.indicatorName;
  });
  return manual.filter((x) => {
    return x.toLowerCase().indexOf(palabra.toLowerCase()) > -1;
  });
}
function filterCodes(palabra) {
  const manual = one.map((arr) => {
    return arr.indicatorName;
  });
  return manual.filter((x) => {
    return x.toLowerCase().indexOf(palabra.toLowerCase()) > -1;
  });
}
*/
let populationList = '';
const population = WORLDBANK.PER.indicators
  .filter(pop => pop.indicatorCode.slice(0, 6) === 'SP.POP')
  .map(pop => pop.indicatorName)
  .forEach(pop => {
    const popList = `<li><a href=#> ${pop} </a></li>`;
    populationList += popList;
  });
document.getElementById('population-list').innerHTML = populationList;
/*
function filterIndicators(palabra2) {
  const manual2 = one.map((arr2) => {
    return arr2.indicatorCode;
  });
  return manual2.filter((x) => {
    return x.toLowerCase().indexOf(palabra2.toLowerCase()) > -1;
  });
}

*/
/* const ordenar = () => {
  console.log(two.sort());
} */
