const { Given, Then, When } = require('cucumber');

const facebookLogin = require('../page-actions/facebookLoginActions.js');

When('I insert a Facebook email {string}', (facebookEmail) => {
    return facebookLogin.insertFacebookEmail(facebookEmail);
});

When('I insert a Facebook password {string}', (facebookPassword) => {
    return facebookLogin.insertFacebookPassword(facebookPassword);
});

When('I click on Login button', () => {
    return facebookLogin.clickOnFacebookLoginButton();
});