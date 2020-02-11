const { client } = require('nightwatch-api');
const window = require('../../utils/windowContextUtils.js');
const gymPage = client.page.Explore.searchPageGymElements();

module.exports = {
    newTab: () => {
        window.changeWindowContext(client, 1)
        return gymPage
            .waitForElementPresent('@clickFavorite', 10000)
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
    },
    assertLabelTodasAvaliacao: () => {
        return gymPage
            .moveToElement('@assertLabelTodasAvaliacao', 10, 10)
            .waitForElementPresent('@assertLabelTodasAvaliacao')
    },
    assertLabelMostrarMais: () => {
        return gymPage
            .moveToElement('@assertLabelMostrarMais', 10, 10)
            .waitForElementPresent('@assertLabelMostrarMais')
    },
    assertLabelEBomSaber: () => {
        return gymPage
            .moveToElement('@assertLabelEBomSaber', 10, 10)
            .waitForElementPresent('@assertLabelEBomSaber')
    },

    assertLabelInformacoesGerais: () => {
        return gymPage
            .moveToElement('@assertLabelInformacoesGerais', 10, 10)
            .waitForElementPresent('@assertLabelInformacoesGerais')
    },
    clickEvaluation: () => {
        return gymPage
        .click('@clickEvaluation')
    },
    modalEvaluation: () => {
        window.changeWindowContext(client, 1)
        return gymPage
        .click('@modalEvaluation')
    },
    closeWindow: () => {
        window.changeWindowContext(client, 0)
        .closeWindow()
        window.changeWindowContext(client, 0)
        return gymPage
        .pause(500)
    }
}