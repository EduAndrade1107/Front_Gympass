const { Given, Then, When } = require('cucumber');

const pageGym = require('../../page-actions/Explore/searchPageGymActions.js');

Given('a new page open', function () {
  return pageGym.newTab();
});

When('click favorite', function () {
  return pageGym.clickFavorite();
});

Then('I click write a review', function () {
  return pageGym.clickEvaluation()
});

Then('the evaluation mode is displayed', function () {
  pageGym.modalEvaluation()
  return pageGym.closeWindow()
});

Then('so I must see favorite gym', function () {
  pageGym.unselectFavorite()
  pageGym.assertLabelEBomSaber()
  pageGym.assertLabelInformacoesGerais()
  pageGym.assertLabelAvaliacao()
  pageGym.assertLabelTodasAvaliacao()
  return pageGym.closeWindow()
});          