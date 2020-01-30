module.exports = {
    
    elements: {
        sliderValorPlano: {
            selector: 'div[class="sc-iiUIRa jwkJSc"]'
        },
        labelMensagemslider: {
            selector: 'p[class="sc-fyjhYU jsWdUC"]'
        },
        labelDisponivelPor: {
            selector: 'div[id="planInformation"]'
        },
        selectHorarioFunc: {
            selector: 'div[id="24h"]'
        },
        selectComodidades: {
            selector: '//div//span[contains(text(), "Selecione um ou mais itens")]',
            locateStrategy: 'xpath'
        },
        clickComodidades: {
            selector: '//li//div[contains(text(), "Ambiente Climatizado")]',
            locateStrategy: 'xpath'
        },
        unselectComodidades: {
            selector: '//div//span[contains(text(), "Selecione um ou mais itens")]',
            locateStrategy: 'xpath'
        },
        assertComodidade: {
            selector: 'span[class="sc-jKmXuR cXEKqA"]'
        },
        ordenarPorDistancia: {
            selector: 'div[id="distance"]'
        },
        ordenarPorAvaliacoes: {
            selector: 'div[id="rating"]'
        },
        selecionarDistancia: {
            selector: '//h1[contains(text(), "Distância")]',
            locateStrategy: 'xpath'
        },
        btnAplicarFiltros: {
            selector: 'button[class="sc-feryYK bfsbpv"]'
        },
        clickPage: {
            selector: 'div[class="sc-jqIZGH gOxefV"]'
        }
    }
}