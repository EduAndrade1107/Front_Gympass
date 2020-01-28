const { client } = require('nightwatch-api');
const window = require('../utils/windowContextUtils.js');
const gymPage = client.page.searchPageGymElements();

module.exports = {
    newTab: () => {
        window.changeWindowContext(client, 1)
        .waitForElementPresent('@clickFavorite', 20000)    
        return gymPage
        .waitForElementPresent('@clickFavorite', 20000)    
    },
    clickFavorite: () => {
        return gymPage
        .click('@clickFavorite')
            .pause(2000)
    },
    unselectFavorite: () => {
        return gymPage
        .expect.element('@unselectFavorite').to.be.present
        .pause(2000)
        .click('@clickFavorite')
        .pause(3000)
    }
}