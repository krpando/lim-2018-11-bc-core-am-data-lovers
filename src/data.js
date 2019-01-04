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
  filterThemes : (dataBase, codeSlice) => {
    const codeData = []; 
    for(let i = 0; i < dataBase.length; i++) {
      if((dataBase[i].indicatorCode).slice(0,2) === codeSlice) {
        codeData.push(dataBase[i].indicatorName);
      }
    } 
   return codeData;
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
  sortData : (dataBase, dataType, orderType) => { 
    let sorted = [];
    if(dataType === 'valores') {
      switch (orderType) {
        case 'mayor' :
        sorted = dataBase.sort((valueA, valueB) => valueA.value < valueB.value ? 1 : -1)
        break;
        case 'menor' :
        sorted = dataBase.sort((valueA, valueB) => valueA.value > valueB.value ? 1 : -1)
        break;
      }
    return sorted;
    }
  }  
/*  let yearType = Object.keys(dataBase.data);
    let valueType = Object.values(dataBase.data); 
    if(dataType === 'Año') {
      switch (orderType) {
        case 'Mayor':
          sorted = dataBase.sort((a, b) => a.años > b.años ? 1 : -1);
          break;
        case 'Menor':
          sorted = dataBase.sort((a, b) => a.años > b.años ? 1 : -1).reverse();
      }
    return sorted;
    }
} */  
}