/* window.WORLDBANK = {
  busqueda
};
esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window */

// Función filtrado para búsqueda rápida

// Pintado de tabla en web
const one = WORLDBANK.PER.indicators;
const two = [];
const three = [];
let four = document.getElementById('año');

const lista = () => {
  for (let i = 0; i < one.length; i++) {
    two.push(one[i].indicatorCode);
    three.push(one[i].data[four.value]);
    let tr = document.createElement('TR'); // Crea una fila
    let td1 = document.createElement('TD'); // Crea la columna indicadores    
    let txt = document.createTextNode(one[i].indicatorCode);
    let td2 = document.createElement('TD'); // Crea la columna valores
    let nt = document.createTextNode(one[i].data[four.value]);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.appendChild(txt);
    td2.appendChild(nt);
    document.getElementById('lista').appendChild(tr);
  }
}; 

/* const ordenar = () => {
  console.log(two.sort());
} */
function filterIndicators(palabra) {
  const indicadores = one.map((arr) => {
    return arr.indicatorName;
  });
  return indicadores.filter((x) => {
    return x.toLowerCase().indexOf(palabra.toLowerCase()) > -1;
  });
}
function filterByCode (){

let str = ''; 
one
.filter(arr => arr.indicatorCode.slice(0, 6) === 'SP.POP')
.map( arr =>  arr.indicatorName)
.forEach(arr => {
    const popList12 = `${arr} `;
    str += popList12;
  });


// console.log(populationList12);
//////////////////////////
/////////////////////
/*var heyTwo2 = WORLDBANK.PER.indicators;
let aplicandoMap502 = heyTwo2.map(function (arr) {
  return arr.indicatorName});
  const manual = aplicandoMap502;
  function filterItems(palabra) {
    return manual.filter(function(x) {
      return x.toLowerCase().indexOf(palabra.toLowerCase()) > -1;
    });
  }*/
  //////let indicadores50= WORLDBANK.PER.indicators;
  /*let aplicandoMap50 = indicadores50.map(function (arr) {
    let creandoArray50= {};
    for( i = 0; i < indicadores50.length; i++) {
      let otroEmpty50 = {};
      otroEmpty50[arr.indicatorName]= arr.indicatorCode;
      creandoArray50=otroEmpty50;
      }
    console.log(creandoArray50)})///////////////
    */
