// Funcionalidad de búsqueda rápida
const palabraBtn = document.getElementById('searchBtn');
palabraBtn.addEventListener('click', () => {
 // let li = document.createElement('LI'); // Crea las bullets  
  //let txt = document.createTextNode(filterIndicators(document.getElementById('word').value));
  //li.appendChild(txt);
  document.getElementById('result').innerHTML = filterIndicators(document.getElementById('word').value);
  const hola = [DT.NFL.ILOG.CD,
    HD.HCI.OVRL.FE,
    HD.HCI.OVRL.LB.FE,
    HD.HCI.OVRL.UB.FE,
    IC.FRM.BKWC.ZS,
    IC.FRM.FEMM.ZS,
    IC.FRM.FEMO.ZS,
    IC.REG.DURS.FE,
    IC.TAX.LABR.CP.ZS,
    MS.MIL.TOTL.TF.ZS,
    per_allsp.ben_q1_tot,
    per_allsp.cov_pop_tot,
    per_lm_alllm.ben_q1_tot,
    ]
    let populationList = '';
    const population = WORLDBANK.PER.indicators
      .filter(pop => pop.indicatorCode.slice(0, 6) === 'SP.POP')
      .map(pop => pop.indicatorName)
      .forEach(pop => {
        const popList = `<li><a href=#> ${pop} </a></li>`;
        populationList += popList;
      });
    document.getElementById('population-list').innerHTML = populationList;
  /*  <ul>
  
      <li>hola</li>
    </ul>
  `
  // document.getElementById('result').innerHTML = filterIndicators(document.getElementById('word').value);
*/
});
