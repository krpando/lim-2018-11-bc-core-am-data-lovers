const busqueda = () => {
 
};

window.WORLDBANK = {
  busqueda
};
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// Función para enlistar en tabla indicadores y sus valores del año 2012

/* const filterData = (data, condition) => {
  const filterItems = query => {
    return fruits.filter((el) =>
      el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }
  
}  */

/* const one = WORLDBANK.PER.indicators;
const two = [];
const three = [];
let four = document.getElementById('año');
let five = document.getElementById('search-input');

const lista = () => {
  for (let i = 0; i < one.length; i++) {
    two.push(one[i].indicatorName);
    three.push(one[i].data[four.value]);
    let tr = document.createElement('TR'); // Crea una fila
    let td1 = document.createElement('TD'); // Crea la columna indicadores    
    let t = document.createTextNode(one[i].indicatorName);
    let td2 = document.createElement('TD'); // Crea la columna valores
    let nt = document.createTextNode(one[i].data[four.value]);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.appendChild(t);
    td2.appendChild(nt);
    document.getElementById('lista').appendChild(tr);
  }
}; */
/* const ordenar = () => {
  console.log(two.sort());
} 
window.filterIndicators = (two, search) => {
  if (search) {
      if (two) {
          search = search.toLowerCase();
          return two.filter(indic => indic && user.name && user.name.toLowerCase().indexOf(search) >= 0);
      }
  }
  return two;
} */
