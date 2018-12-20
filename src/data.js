/* window.WORLDBANK = {
  busqueda
};
esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window */

<<<<<<< HEAD
window.example = example;*/

/*const primerPaso =WORLDBANK.PER.indicators;
let resultadoPrimerPaso=[];
for(let i=0;i<primerPaso.length;i++){
  resultadoPrimerPaso.push(primerPaso[i]);
  }
let segundoPaso = [];
for(var i=0;i<resultadoPrimerPaso.length;i++){
segundoPaso.push(resultadoPrimerPaso[i].indicatorCode);
  }
let palabra = document.getElementById("palabra").value
if(palabra==="indicadores"){
  document.write(segundoPaso.join(""));
=======
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
>>>>>>> d6cfc45713664bafd2fa8c012ca2a59d38353b4e
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

<<<<<<< HEAD
      }
}

const one=WORLDBANK.PER.indicators;
  const two=[];
  const three=[];
    for(i=0; i<one.length; i++) {
      two.push(one[i].indicatorName);
      three.push(one[i].data['2012']);
      let tr = document.createElement("TR");  
      let th1 = document.createElement("TH");      // Create a <button> element
      let t = document.createTextNode(one[i].indicatorName);
      let th2 = document.createElement("TH");        // Create a <button> element
      let nt = document.createTextNode(one[i].data['2012']);
      tr.appendChild(th1);
      tr.appendChild(th2);
      th1.appendChild(t);
      th2.appendChild(nt);
      document.getElementById('lista').appendChild(tr);
      // document.getElementById('lista').appendChild(nt);
      // debugger;
      
       
      
    };
    //document.getElementById('salida').innerHTML = `${two}`;
  
    let pill = WORLDBANK.PER.indicators;
    let pill2 = pill.map((ele) => {
      return ele;
    });
    console.log(pill2);
    const probandoMap3 = (data) =>{
      return data.map(data => Object.assign({}, data, {indicatorName: data.indicatorName.toUpperCase()}))
     };
     ////////////////
  const probandoWorldbank = 
  [
        {
          "data": {
            "1960": "",
            "1961": "",
            "1962": "",
            "1963": "",
            "1964": "",
            "1965": "",
            "1966": "",
            "1967": "",
            "1968": "",
            "1969": "",
            "1970": "",
            "1971": "",
            "1972": "",
            "1973": "",
            "1974": "",
            "1975": "",
            "1976": "",
            "1977": "",
            "1978": "",
            "1979": "",
            "1980": "",
            "1981": "",
            "1982": "",
            "1983": "",
            "1984": "",
            "1985": "",
            "1986": "",
            "1987": "",
            "1988": "",
            "1989": "",
            "1990": "",
            "1991": "",
            "1992": "",
            "1993": "",
            "1994": "",
            "1995": "",
            "1996": "",
            "1997": "",
            "1998": "",
            "1999": "",
            "2000": "",
            "2001": "",
            "2002": 31.4799995422363,
            "2003": 29.6299991607666,
            "2004": 27.6299991607666,
            "2005": 27.2099990844727,
            "2006": 26.9699993133545,
            "2007": 27.6700000762939,
            "2008": 26.9599990844727,
            "2009": 27.3600006103516,
            "2010": 25.3400001525879,
            "2011": 24.7999992370605,
            "2012": 25.0400009155273,
            "2013": 24.0900001525879,
            "2014": 24.2099990844727,
            "2015": 21.6800003051758,
            "2016": 23.7399997711182,
            "2017": 23.7600002288818
          },
          "countryName": "Perú",
          "countryCode": "PER",
          "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
          "indicatorCode": "SL.TLF.PART.FE.ZS"
        },
        {
          "data": {
            "1960": "",
            "1961": "",
            "1962": "",
            "1963": "",
            "1964": "",
            "1965": "",
            "1966": "",
            "1967": "",
            "1968": "",
            "1969": "",
            "1970": "",
            "1971": "",
            "1972": "",
            "1973": "",
            "1974": "",
            "1975": "",
            "1976": "",
            "1977": "",
            "1978": "",
            "1979": "",
            "1980": "",
            "1981": "",
            "1982": "",
            "1983": "",
            "1984": "",
            "1985": "",
            "1986": "",
            "1987": "",
            "1988": "",
            "1989": "",
            "1990": "",
            "1991": "",
            "1992": "",
            "1993": "",
            "1994": "",
            "1995": "",
            "1996": "",
            "1997": "",
            "1998": "",
            "1999": "",
            "2000": "",
            "2001": "",
            "2002": 57.3788986206055,
            "2003": 59.2597007751465,
            "2004": 60.5155982971191,
            "2005": 58.567699432373,
            "2006": 59.5596008300781,
            "2007": 62.5275993347168,
            "2008": 61.5718002319336,
            "2009": 63.0060997009277,
            "2010": 64.4614028930664,
            "2011": 64.3878021240234,
            "2012": 63.0351982116699,
            "2013": 62.2015991210938,
            "2014": 61.209400177002,
            "2015": 62.2141990661621,
            "2016": 61.5542984008789,
            "2017": 61.4822998046875
          },
          "countryName": "Perú",
          "countryCode": "PER",
          "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
          "indicatorCode": "SL.TLF.INTM.ZS"
        },
        {
          "data": {
            "1960": "",
            "1961": "",
            "1962": "",
            "1963": "",
            "1964": "",
            "1965": "",
            "1966": "",
            "1967": "",
            "1968": "",
            "1969": "",
            "1970": "",
            "1971": "",
            "1972": "",
            "1973": "",
            "1974": "",
            "1975": "",
            "1976": "",
            "1977": "",
            "1978": "",
            "1979": "",
            "1980": "",
            "1981": "",
            "1982": "",
            "1983": "",
            "1984": "",
            "1985": "",
            "1986": "",
            "1987": "",
            "1988": "",
            "1989": "",
            "1990": "",
            "1991": "",
            "1992": "",
            "1993": "",
            "1994": "",
            "1995": "",
            "1996": "",
            "1997": "",
            "1998": "",
            "1999": "",
            "2000": "",
            "2001": "",
            "2002": 70.0301971435547,
            "2003": 69.0485000610352,
            "2004": 70.3840026855469,
            "2005": 68.869499206543,
            "2006": 69.7163009643555,
            "2007": 72.8778991699219,
            "2008": 72.2699966430664,
            "2009": 72.4912033081055,
            "2010": 74.2916030883789,
            "2011": 73.6003036499023,
            "2012": 72.7871017456055,
            "2013": 72.2193984985352,
            "2014": 71.2494964599609,
            "2015": 71.3886032104492,
            "2016": 71.5625991821289,
            "2017": 71.3718032836914
          },
          "countryName": "Perú",
          "countryCode": "PER",
          "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
          "indicatorCode": "SL.TLF.INTM.MA.ZS"
        },
        {
          "data": {
            "1960": "",
            "1961": "",
            "1962": "",
            "1963": "",
            "1964": "",
            "1965": "",
            "1966": "",
            "1967": "",
            "1968": "",
            "1969": "",
            "1970": "",
            "1971": "",
            "1972": "",
            "1973": "",
            "1974": "",
            "1975": "",
            "1976": "",
            "1977": "",
            "1978": "",
            "1979": "",
            "1980": "",
            "1981": "",
            "1982": "",
            "1983": "",
            "1984": "",
            "1985": "",
            "1986": "",
            "1987": "",
            "1988": "",
            "1989": "",
            "1990": "",
            "1991": "",
            "1992": "",
            "1993": "",
            "1994": "",
            "1995": "",
            "1996": "",
            "1997": "",
            "1998": "",
            "1999": "",
            "2000": "",
            "2001": "",
            "2002": 81.3206024169922,
            "2003": 78.3061981201172,
            "2004": 79.7701034545898,
            "2005": 78.6303024291992,
            "2006": 79.3784027099609,
            "2007": 83.2306976318359,
            "2008": 82.6559982299805,
            "2009": 81.7598037719727,
            "2010": 83.8684005737305,
            "2011": 82.6969985961914,
            "2012": 82.2509002685547,
            "2013": 82.0475997924805,
            "2014": 81.1488037109375,
            "2015": 80.6026992797852,
            "2016": 81.2429962158203,
            "2017": 81.2020034790039
          },
          "countryName": "Perú",
          "countryCode": "PER",
          "indicatorName": "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)",
          "indicatorCode": "SL.TLF.INTM.FE.ZS"
        }
      ];
   
  const probandoMap = (data) => {
    return data.map(obj => {}, obj, {indicatorName: obj.indicatorName});
  };
 var data = WORLDBANK.PER.indicators;
 var probandoMap =  data.map(pop => pop.indicatorName
   return
 })*/
 let indicadores50= WORLDBANK.PER.indicators;
  let aplicandoMap50 = indicadores50.map(function (arr) {
let creandoArray50= [];
//for( i = 0; i < indicadores50.length; i++) {
  if(Object. values(indicadores50.data) > 0){
  let otroEmpty50 = [];
  otroEmpty50[arr.indicatorName] = arr.data;
  creandoArray50=otroEmpty50;
    }
  })
console.log(creandoArray50);


let indicadorres =WORLDBANK.PER.indicators;
const proveMap = (indicadorres) => {
  return indicadorres.map(obj => Object.assign({}, obj,{name:obj.indicatorName.toUpperCase()}));
};
console.log(proveMap);


var hey = WORLDBANK.PER.indicators;
let aplicandoMap50 = indicadores50.map(function (arr) {
  return arr.indicatorCode};
  ////////////
  const hey49 = WORLDBANK.PER.indicators;
let aplicandoMap49 = hey49.map(function (arr) {
  return arr.indicatorName});
  const hey51 = aplicandoMap49.sort();
});
////////////////////////////
var heyTwo = WORLDBANK.PER.indicators;
let aplicandoMap50 = indicadores50.map(function (arr) {
  return arr.indicatorCode});

const manual = aplicandoMap50;
  function filterItems(palabra) {
    return manual.filter(function(x) {
      return x.toLowerCase().indexOf(palabra.toLowerCase()) > -1;
    });
  }
  //////////
  var heyTwo2 = WORLDBANK.PER.indicators;
let aplicandoMap502 = heyTwo2.map(function (arr) {
  return arr.indicatorName});
  const manual = aplicandoMap502;
  function filterItems(palabra) {
    return manual.filter(function(x) {
      return x.toLowerCase().indexOf(palabra.toLowerCase()) > -1;
    });
  }
=======
/* const ordenar = () => {
  console.log(two.sort());
} */
>>>>>>> d6cfc45713664bafd2fa8c012ca2a59d38353b4e
