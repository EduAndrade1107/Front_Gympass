const { client } = require('nightwatch-api');

const login = client.page.Login.loginElements();

module.exports = {

    insertEmail: (email) => {
        return login
                .waitForElementVisible('@emailInput')
                .setValue('@emailInput', email);
    },

    clickOnContinueButton: () => {
        return login
                .click('@loginButton');
    },

    insertPassword: (password) => {
        return login
                .waitForElementVisible('@passwordInput')
                .setValue('@passwordInput', password);
    },

    clickOnForgetPasswordLink: () => {
        return login
                .waitForElementVisible('@forgetPasswordLink')
                .click('@forgetPasswordLink');
    },

    checkForgetPasswordMessage: () => {
        return login
                .expect.element('@forgetPasswordMessage').to.be.present;
    },

    clickOnFacebookLoginButton: () => {
        return login
                .waitForElementVisible('@facebookLoginButton')
                .click('@facebookLoginButton');
    }
}