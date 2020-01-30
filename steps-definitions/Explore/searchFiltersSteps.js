const { Given, Then, When } = require('cucumber');

const searchFilterAcitons = require('../../page-actions/Explore/searchFilterActions.js');

Then('click value plan', () => {
    return searchFilterAcitons.sliderValorPlano()
  });

  Then('click hour functioning 24hs', () => {                     
    return searchFilterAcitons.selectHorarioFunc()                                                   
  });                                                                   

  Then('click owns', () => {
    return searchFilterAcitons.selectComodidades()
  });

  Then('click distance', () => {
    return searchFilterAcitons.selectOrdenarPor()
});

  Then('click order by', () => {
    return searchFilterAcitons.selectDistancia()
  });

  Then('click button to apply filters', () => {
    return searchFilterAcitons.btnAplicarFiltros()
  });
