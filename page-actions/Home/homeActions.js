const { client } = require('nightwatch-api');

const home = client.page.Home.homeElements();

module.exports = {

    openGympassHomePage: () => {
        return home
                .navigate()
                .waitForElementPresent('@body', 10000);
    },

    clickOnLoginButton: () => {
        return home
                .click('@loginButton');
    }
}