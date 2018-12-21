/* // Funcionalidad de búsqueda rápida
document.getElementById('searchBtn').addEventListener('click', () => {
  let palabraClave = document.getElementById('word');
  if (filterIndicators(palabraClave.value).join() === '') {
    document.getElementById('result').innerHTML = 'No se encontraron registros';
  } else {
    document.getElementById('result').innerHTML = `
  ${filterIndicators(palabraClave.value).join('</br>')} 
` ;  
  }
});  */
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
      <li>${resultado[i]}</li>
    </ul>
  ` ;
    }  
  }
});