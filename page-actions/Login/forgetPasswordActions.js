const { client } = require('nightwatch-api');

const forgetPassword = client.page.Login.forgetPasswordElements();

module.exports = {

    insertEmail: (email) => {
        return forgetPassword
                .waitForElementVisible('@emailInput')
                .setValue('@emailInput', email);
    },

    clickOnSendButton: () => {
        return forgetPassword
                .click('@sendButton');
    }
}