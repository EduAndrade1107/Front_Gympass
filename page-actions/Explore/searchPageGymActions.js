const { client } = require('nightwatch-api');
const window = require('../../utils/windowContextUtils.js');
const gymPage = client.page.Explore.searchPageGymElements();

module.exports = {
    newTab: () => {
        window.changeWindowContext(client, 1)
        return gymPage
        .waitForElementPresent('@clickFavorite', 5000)    
    },
    clickFavorite: () => {
        return gymPage
        .click('@clickFavorite')
    },
    unselectFavorite: () => {
        return gymPage
        .click('@unselectFavorite')
    },
    assertLabelAvaliacao: () => {
        return gymPage
        .moveToElement('@assertLabelAvaliacao', 10, 10)
        .waitForElementPresent('@assertLabelAvaliacao')
        .pause(1000);
    },
    assertLabelTodasAvaliacao: () => {
        return gymPage
        .moveToElement('@assertLabelTodasAvaliacao', 10, 10)
        .waitForElementPresent('@assertLabelTodasAvaliacao')
        .pause(1000);
    },
    assertLabelMostarMais: () => {
        return gymPage
        .moveToElement('@assertLabelMostarMais', 10, 10)
        .waitForElementPresent('@assertLabelMostarMais')
        .pause(1000);
    },
    assertLabelInformacoesGerais: () => {
        return gymPage
        .moveToElement('@assertLabelInformacoesGerais', 10, 10)
        .waitForElementPresent('@assertLabelInformacoesGerais')
        .pause(1000);
    },
}