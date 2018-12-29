 // Funcionalidad de búsqueda rápida
/*document.getElementById('searchBtn').addEventListener('click', () => {
  let palabraClave = document.getElementById('word');
  if (filterIndicators(palabraClave.value).join() === '') {
    document.getElementById('result').innerHTML = 'No se encontraron registros';
  } else {
    document.getElementById('result').innerHTML = `
  ${filterIndicators(palabraClave.value).join('</br>')} 
` ;  
  }
});  
// Funcionalidad de búsqueda rápida
document.getElementById('searchBtn').addEventListener('click', () => {
  let palabraClave = document.getElementById('word');
  if (filterIndicators(palabraClave.value).join() === '') {
    document.getElementById('result').innerHTML = 'No se encontraron registros';
  } else {
    const resultado = filterIndicators(palabraClave.value);
    for (let i = 0; i < resultado.length; i++) {
      document.getElementById('result').innerHTML += `
    <ul>
      <li>${resultado[i]}</li>.
    </ul>
  ` ;
    }  
  }
});

*/
const viernes = document.getElementById('search-btn').addEventListener('click',() =>{

})
const one = WORLDBANK.PER.indicators;
const resultado = (theme) => document.getElementById('result').innerHTML += 
`<ul>
    <li>${de.indicatorName}</li>
</ul>
` ;

const educationThemes = document.getElementById('education').addEventListener('click',() =>{
worldbank.filtradoCodigo(one, 'SE').forEach(resultado)});
/*
const developThemes = document.getElementById('social-dev').addEventListener('click',() =>{
worldbank.filtradoCodigo(one, 'SL').forEach(resultado)});
  */ /*
  <table id="prueba">
    <tr>
      <tr id="keys">${Object.keys(dev.data)}</tr>
      <tr id="values">${Object.values(dev.data)}</tr>
    </tr>
  </table> 
document.getElementById('result').innerHTML = devString;
})
});
  
 */

const developThemes = document.getElementById('social-dev').addEventListener('click',() =>{
  worldbank.filtradoCodigo(one, 'SL').forEach(resultado);
    /*<ul>
      <li>${Object.keys(de.data)}</li>
    </ul>
    <ul>
     <li>${Object.values(de.data)}</li>
    </ul>
    `;*/
  });
  const genderThemes = document.getElementById('gender').addEventListener('click',() =>{
    worldbank.filtradoCodigo(one, 'SL').forEach(de => {
      document.getElementById('result').innerHTML += `
      <ul>
        <li>${de.indicatorName}</li>
      </ul>
      `;
    })
    });
    
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

/*
const educationThemes = document.getElementById('education').addEventListener('click',() =>{
let educationString = [];
const resultado = document.getElementById('result');
worldbank.filtradoCodigo(one, 'SE').forEach(ed => {
  const educationList = `<div><a href =#> ${ed.indicatorName}</a></div>`;
  educationString.push(educationList);
  resultado.innerHTML=educationString;
})
}) 
*/
const safari = WORLDBANK.PER.indicators;
const provecho = safari.map(ed => ed.data);
const choca = provecho.map(de => Object.keys(de.data));
