/* window.WORLDBANK = {
  busqueda
};
esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window */

// Función filtrado para búsqueda rápida




const filtradoCodigo = (one, wordslice) => {
  return one.filter(themes =>themes.indicatorCode.slice(0,2)===wordslice);
};


