const { client } = require('nightwatch-api');
const search = client.page.searchElements();

module.exports = {
    menuBusca: () => {
        return search
            .assert.containsText('@menuBusca', "Busca")
            .click('@menuBusca');
    },
    btnFiltros: () => {
        return search
            .waitForElementVisible('@btnFiltros', 6000)
            .click('@btnFiltros');
    },
    assertBtnFiltros: () => {
        return search
            .waitForElementVisible('@btnFiltros');
    },
    inputAcademia: () => {
        return search
            .waitForElementPresent('@inputAcademia', 6000)
            .click('@inputAcademia')
            .pause(2500)
            .setValue('@inputAcademia', "Ride State")
    },
    clickEnter: () => {
        search
            .setValue('@inputAcademia', new Array(1) .fill(search.api.Keys.ENTER))
           .pause(1500)
            // .waitForElementPresent('@labelResultadoBusca', 6000)
            //.assert.containsText('@labelResultadoBusca', 'Resultados com ride state');
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
        .pause(1000)
        .click('@selectCard')
            //.assert.containsText('@assertCardEndereco', "Rua Coronel Joaquim Ferreira Lôbo, 152")
            //.assert.containsText('@assertCardDisponibilidade', "no seu plano")
           // .assert.containsText('@assertCardHorario', "Fecha às 22h");
    }
}