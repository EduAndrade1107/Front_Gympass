const { Given, Then, When } = require('cucumber');

const pageGym = require('../../page-actions/Explore/searchPageGymActions.js');

Given('a new page open', function () {                                 
    return  pageGym.newTab();                                                   
  });
  
  When('click favorite', function () {
    return pageGym.clickFavorite();
});

Then('so I must see favorite gym', function () {                      
  pageGym.unselectFavorite()
  pageGym.assertLabelMostarMais()
  pageGym.assertLabelInformacoesGerais()
  pageGym.assertLabelAvaliacao()
  return pageGym.assertLabelTodasAvaliacao()
});                                                                   