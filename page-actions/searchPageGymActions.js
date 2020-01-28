const { client } = require('nightwatch-api');
const window = require('../utils/windowContextUtils.js');
const gymPage = client.page.searchPageGymElements();

module.exports = {
    newTab: () => {
        window.changeWindowContext(client, 1)
        .pause(2000)
        .waitForElementPresent('@clickFavorite', 20000)    
        return gymPage
        .waitForElementPresent('@clickFavorite', 20000)    
    },
    clickFavorite: () => {
        return gymPage
        .click('@clickFavorite')
    },
    unselectFavorite: () => {
        return gymPage
        .expect.element('@unselectFavorite').to.be.present
        .click('@clickFavorite')
    }
}