const { client } = require('nightwatch-api');

const login = client.page.Login.loginElements();

module.exports = {

    insertEmail: (email) => {
        return login
                .waitForElementPresent('@emailInput', 10000)
                .setValue('@emailInput', email);
    },

    clickOnContinueButton: () => {
        return login
                .click('@loginButton');
    },

    insertPassword: (password) => {
        return login
                .waitForElementPresent('@passwordInput', 10000)
                .setValue('@passwordInput', password);
    },

    clickOnForgetPasswordLink: () => {
        return login
                .waitForElementPresent('@forgetPasswordLink', 10000)
                .click('@forgetPasswordLink');
    },

    checkForgetPasswordMessage: () => {
        return login
                .expect.element('@forgetPasswordMessage').to.be.present;
    },

    clickOnFacebookLoginButton: () => {
        return login
                .waitForElementPresent('@facebookLoginButton', 10000)
                .click('@facebookLoginButton');
    }
}