// Funcionalidad de búsqueda rápida
const palabraBtn = document.getElementById('searchBtn');
palabraBtn.addEventListener('click', () => {
  document.getElementById('result').innerHTML = filterIndicators(document.getElementById('word').value);
});