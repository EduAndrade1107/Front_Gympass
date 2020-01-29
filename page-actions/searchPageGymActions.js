const { client } = require('nightwatch-api');
const window = require('../utils/windowContextUtils.js');
const gymPage = client.page.searchPageGymElements();

module.exports = {
    newTab: () => {
        window.changeWindowContext(client, 1)
        return gymPage
        .waitForElementPresent('@clickFavorite', 5000)    
    },
    clickFavorite: () => {
        return gymPage
        .click('@clickFavorite')
    },
    unselectFavorite: () => {
        return gymPage
        .click('@unselectFavorite')
    }
}