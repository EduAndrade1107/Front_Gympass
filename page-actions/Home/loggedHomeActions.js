const { client } = require('nightwatch-api');

const loggedHome = client.page.Home.loggedHomeElements();

module.exports = {

    checkLoggedHome: () => {
        return loggedHome
                .expect
                .element('@loggedMessage')
                .to.be.present;
    },

    clickOnUserSideMenu: () => {
        return loggedHome
                .click('@userSideMenu');
    },

    clickOnProfileOption: () => {
        return loggedHome
                .waitForElementVisible('@profileOption')
                .click('@profileOption');
    }
}

