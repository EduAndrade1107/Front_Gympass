const { Given, Then, When } = require('cucumber');

const searchActions = require('../../page-actions/Explore/searchActions.js');

Given('I select gym', function () {
  searchActions.menuBusca();
  searchActions.inputAcademia();
  searchActions.clickEnter();
  return searchActions.clickCard();
});

When('I click on my Gyms', () => {
  return searchActions.menuBusca()
  });

  When('I enter the name of the academy', function () {
    return searchActions.inputAcademia()
  });

  When('click Enter', function () {
    return searchActions.clickEnter()
  });

  Then('so I see only one card in the search', function () {
    return searchActions.assertCard()
  });

  Then('I see button Filters', function () {
    return searchActions.assertBtnFiltros()
  });

  Then('I click the button Filters', function () {
    return searchActions.btnFiltros()
  });

 