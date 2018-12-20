// Funcionalidad de búsqueda rápida
const palabraBtn = document.getElementById('searchBtn');
palabraBtn.addEventListener('click', () => {
  let li = document.createElement('LI'); // Crea las bullets  
  let txt = document.createTextNode(filterIndicators(document.getElementById('word').value));
  li.appendChild(txt);
  document.getElementById('result').innerHTML += `
    <ul>
      <li>hola</li>
    </ul>
  `
  // document.getElementById('result').innerHTML = filterIndicators(document.getElementById('word').value);


});
