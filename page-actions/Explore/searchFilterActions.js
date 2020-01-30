const { client } = require('nightwatch-api');

const searchFilters = client.page.Explore.searchFilterElements();

module.exports = {
    sliderValorPlano: () => {
        return searchFilters
            .waitForElementVisible('@sliderValorPlano', 7000)
            .click('@sliderValorPlano')
            .setValue('@sliderValorPlano', new Array(5).fill(searchFilters.api.Keys.RIGHT_ARROW));

    },
    selectHorarioFunc: () => {
        return searchFilters
            .click('@selectHorarioFunc')
            .assert.containsText('@selectHorarioFunc', "24h");
    },
    selectComodidades: () => {
        return searchFilters
            .click('@selectComodidades')
            .click('@clickComodidades')
            .waitForElementPresent('@unselectComodidades', 5000)
            .click('@unselectComodidades')
    },
    selectOrdenarPor: () => {
        return searchFilters
            .moveToElement('@ordenarPorAvaliacoes', 10, 10)
            .click('@ordenarPorAvaliacoes');

    },
    selectDistancia: () => {
        return searchFilters
            .moveToElement('@selecionarDistancia', 10, 10)
            .click('@selecionarDistancia');
    },
    btnAplicarFiltros: () => {
        return searchFilters
            .click('@btnAplicarFiltros');
    }
}
