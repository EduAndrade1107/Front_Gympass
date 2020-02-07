module.exports = {

    elements: {
        menuBusca: {
            selector: 'a[href="https://www.gympass.com/negocios"]'
        },
        menuAjuda: {
            selector: 'a[href="https://www.gympass.com/pessoas/help"]'
        },
        menuComoFunciona: {
            selector: 'a[href="/como_funciona"]'
        },
        menuCheckin: {
            selector: 'a[href="https://www.gympass.com/checkin"]'
        },
        btnFiltros: {
            selector: '//button[contains(text(), "Filtros")]',
            locateStrategy: 'xpath'
        },
        inputAcademia: {
            selector: 'input[placeholder="Academia ou atividade"]'
        },
        selectAcademia: {
            selector: 'a[id="ListItem"]'
        },
        inputLocalizacaoAtual: {
            selector: 'input[class="input-autocomplete sc-rBLzX cjoCUt"]'
        },
        labelResultadoBusca: {
            selector: '//*[@id="app"]/div/div[2]/div/div[5]/div/div[2]/div/div[1]/div[1]/h2',
            locateStrategy: 'xpath'
        },
        assertCardEndereco: {
            selector: '//*[@id="app"]/div/div[2]/div/div[5]/div/div[2]/div/div[2]/div[1]/div/a[2]/div/div/div[1]/div[1]/address/div/div',
            locateStrategy: 'xpath'
        },
        assertCardDisponibilidade: {
            selector: '//span[contains(text(), "no seu plano")]',
            locateStrategy: 'xpath'
        },
        assertCardHorario: {
            selector: '//*[@id="app"]/div/div[2]/div/div[5]/div/div[2]/div/div[2]/div[1]/div/a[2]/div/div/div[1]/div[1]/span/time',
            locateStrategy: 'xpath'
        },
        selectCard: {
            selector: 'div[class="sc-eXEjpC kzCTZv"]'
        },
        selectGymList: {
            selector: 'a[id="ListItem"]'
        }
    }
}