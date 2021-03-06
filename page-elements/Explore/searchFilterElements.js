module.exports = {
    
    elements: {
        sliderValorPlano: {
            selector: '//*[@id="app"]/div/div[2]/div/div[4]/div/div[2]/div/div/div/div/div/div[1]/div/div/div[4]/div',
            locateStrategy: 'xpath'
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
            selector: '//*[@id="app"]/div/div[2]/div/div[4]/div/div[2]/div/div/div/div/div/div[5]',
            locateStrategy: 'xpath'
        },
        btnAplicarFiltros: {
            selector: '//button[contains(text(), "Aplicar filtros")]',
            locateStrategy: 'xpath'
        },
        clickPage: {
            selector: 'div[class="sc-jqIZGH gOxefV"]'
        }
    }
}