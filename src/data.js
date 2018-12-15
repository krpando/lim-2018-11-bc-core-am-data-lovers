// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/
const primerPaso =WORLDBANK.PER.indicators;
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
    }
  }
