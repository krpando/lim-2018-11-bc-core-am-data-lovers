// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

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
  }
  window.filter(indicadores,search) = {
    if(indicadores){
      if(search){

      }
}*/
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