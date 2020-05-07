const { client } = require('nightwatch-api');
const search = client.page.Explore.searchElements();

module.exports = {
    menuBusca: () => {
        return search
            .assert.containsText('@menuBusca', "Busca")
            .click('@menuBusca');
    },
    btnFiltros: () => {
        return search
            .waitForElementVisible('@btnFiltros', 10000)
            .click('@btnFiltros');
    },
    assertBtnFiltros: () => {
        return search
            .waitForElementVisible('@btnFiltros');
    },
    inputAcademia: () => {
        return search
            .waitForElementPresent('@inputAcademia', 10000)
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