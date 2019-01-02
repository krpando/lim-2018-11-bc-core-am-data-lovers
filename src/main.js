


















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
    (worldbank.filtradoCodigo(one, 'SG')).forEach(resultado);
    (worldbank.filtradoCodigo(one, 'SH')).forEach(resultado)});
  
  const economyThemes = document.getElementById('economy').addEventListener('click',() =>{
      (worldbank.filtradoCodigo(one, 'DT')).forEach(resultado);
      (worldbank.filtradoCodigo(one, 'HD')).forEach(resultado);
      (worldbank.filtradoCodigo(one, 'IC')).forEach(resultado);
      (worldbank.filtradoCodigo(one, 'MS')).forEach(resultado);
      (worldbank.filtradoCodigo(one, 'pe')).forEach(resultado)});
        
  
