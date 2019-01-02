


















const one = WORLDBANK.PER.indicators;
const resultado = (themes) => document.getElementById("cuadro").innerHTML += 
`<ul><li>${themes.indicatorName}</li></ul>`;

const educationThemes = document.getElementById('education').addEventListener('click',() =>{
worldbank.filtradoCodigo(one, 'SE').forEach(resultado)});

const developThemes = document.getElementById('social-dev').addEventListener('click',() =>{
  (worldbank.filtradoCodigo(one, 'SL')).forEach(resultado)});
  
  let arrayVacio=[];
  const genderThemes = document.getElementById('gender').addEventListener('click',() =>{
    (worldbank.filtradoCodigo(one, 'SP')).forEach(resultado);
    (worldbank.filtradoCodigo(one, 'SG')).forEach(resultado)});

  
