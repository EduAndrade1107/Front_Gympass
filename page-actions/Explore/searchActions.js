const { client } = require('nightwatch-api');
const search = client.page.Explore.searchElements();

module.exports = {
    menuBusca: () => {
        return search
            //.assert.containsText('@menuBusca', "Busca")
            .waitForElementPresent('@menuBusca', 20000)
            .click('@menuBusca');
    },
    btnFiltros: () => {
        return search
            .waitForElementPresent('@btnFiltros', 20000)
            .pause(15000)
            .click('@btnFiltros');
    },
    assertBtnFiltros: () => {
        return search
            .waitForElementPresent('@btnFiltros');
    },
    inputAcademia: () => {
        return search
            .waitForElementPresent('@inputAcademia', 20000)
            .click('@inputAcademia')
            .setValue('@inputAcademia', "Ride State")
    },
    selectGymList: () => {
        return search
            .click('@selectGymList')
    },
    clickEnter: () => {
        search
            .setValue('@inputAcademia', new Array(1) .fill(search.api.Keys.ENTER))
    },
    inputLocalizacaoAtual: () => {
        return search
            .setValue('@inputLocalizacaoAtual', "Rua Coronel Joaquim Ferreira Lôbo, 152")
            .assert.containsText('@labelResultadoBusca', 'Resultados com Ride State');
    },
    assertCard: () => {
        return search
            //.assert.containsText('@assertCardEndereco', "Rua Coronel Joaquim Ferreira Lôbo, 152")
            //.assert.containsText('@assertCardDisponibilidade', "no seu plano")
           // .assert.containsText('@assertCardHorario', "Fecha às 22h");
    },
    clickCard: () => {
        return search
        .waitForElementPresent('@selectCard', 10000)
        .click('@selectCard')
    }
}