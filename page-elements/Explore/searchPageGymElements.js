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
            selector: '//*[@id="app"]/div/div[2]/div/div[3]/div/div[2]/section[3]/h2',
            locateStrategy: 'xpath'
        },
        assertLabelTodasAvaliacao: {
            selector: '//*[@id="app"]/div/div[2]/div/div[3]/div/div[2]/section[3]/div/div[2]/div[2]/span',
            locateStrategy: 'xpath'
        },
        assertLabelMostarMais: {
            selector: '//div//span[contains( text(), "Mostrar mais aulas")]',
            locateStrategy: 'xpath'
        },
        assertLabelInformacoesGerais: {
            selector: '//*[@id="app"]/div/div[2]/div/div[3]/div/div[2]/section[2]/h2    ',
            locateStrategy: 'xpath'
        },
        assertLabelEBomSaber: {
            selector: '//button[contains(text(), "É bom saber")]',
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