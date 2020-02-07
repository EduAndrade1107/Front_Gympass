module.exports = {
    elements: {
        clickFavorite: {
            selector: '//*[@id="app"]/div/div[2]/div/section/div/div/div/div/div[2]/div[1]/div/span/div',
            locateStrategy: 'xpath'
        },
        unselectFavorite: {
            selector: '//*[@id="app"]/div/div[2]/div/section/div/div/div/div/div[2]/div[1]/div/span/div',
            locateStrategy: 'xpath'
        },
        assertLabelAvaliacao: {
            selector: '//section//h2[contains( text(), "Avaliações")]',
            locateStrategy: 'xpath'
        },
        assertLabelTodasAvaliacao: {
            selector: '//div//span[contains( text(), "Ver todas as avaliações")]',
            locateStrategy: 'xpath'
        },
        assertLabelMostarMais: {
            selector: '//div//span[contains( text(), "Mostrar mais aulas")]',
            locateStrategy: 'xpath'
        },
        assertLabelInformacoesGerais: {
            selector: '//section//h2[contains( text(), "Informações gerais")]',
            locateStrategy: 'xpath'
        },
        assertLabelEBomSaber: {
            selector: '//div//button[contains(text(), "É bom saber")]',
            locateStrategy: 'xpath'
        },
        clickEvaluation: {
            selector: '//*[@id="app"]/div/div[2]/div/div[3]/div/div[2]/section[3]/div/div[1]/div[2]/span',
            locateStrategy: 'xpath'
        },
        modalEvaluation: {
            selector: '//*[@id="modal"]/div/div/div[1]/div/span',
            locateStrategy: 'xpath'
        },

    }
}