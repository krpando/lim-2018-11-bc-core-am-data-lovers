window.WorldBank = {
  
  // Función filtrado para búsqueda rápida
  filterSearch : (dataBase, word) => {
    const indicadores = dataBase.map((arr) => {
      return arr.indicatorName;
    });
    return indicadores.filter((x) => {
      return x.toLowerCase().indexOf(word.toLowerCase()) > -1;
    });
  },

  // Función filtrado para búsqueda por temas
  filterThemes : (dataBase, themeCode) => {
    return dataBase.filter(themes => themes.indicatorCode.slice(0,2) === themeCode);
  },

  // Función filtrado por años
  filterYears : (dataBase, year) => {
    const yearData = [];
    for (let i = 0; i < dataBase.length; i++) {
      yearData.push(dataBase[i].data[year]);
    }
    return yearData;
  },

  // Función ordenando data por años o valores (en construcción - Karla)
/*   sortData : (dataBase, dataType) => { // 'orden' es el tercer parámetro pero aun no se ha incluído
    const sorted = [];
    if(dataType === 'años') {
      const newData = (Object.keys(dataBase.data)).assign();
      sorted.push(newData.sort());
    } else {
      const newData = (Object.values(dataBase.data)).assign();
      sorted.push(newData.sort());
    }
    return sorted;
  } */
};