/* window.WORLDBANK = {
  busqueda
};
esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window */

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

/* const ordenar = () => {
  console.log(two.sort());
} */
