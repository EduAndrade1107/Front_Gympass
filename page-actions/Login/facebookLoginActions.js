const { client } = require('nightwatch-api');
const window = require('../../utils/windowContextUtils.js');

const facebookLogin = client.page.Login.facebookLoginElements();

module.exports = {

    insertFacebookEmail: (facebookEmail) => {

        window.changeWindowContext(client, 1);

        return facebookLogin
                .waitForElementVisible('@facebookEmailInput')
                .setValue('@facebookEmailInput', facebookEmail);
    },

    insertFacebookPassword: (facebookPassword) => {
        return facebookLogin
                .setValue('@facebookPasswordInput', facebookPassword);
    },

    clickOnFacebookLoginButton: () => {
        facebookLogin
            .click('@facebookLoginButton');
        
        return window.changeWindowContext(client, 0);
    }
}