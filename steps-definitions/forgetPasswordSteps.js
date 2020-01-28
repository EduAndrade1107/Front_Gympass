const { Given, Then, When } = require('cucumber');

const forgetPasswordActions = require('../page-actions/forgetPasswordActions.js');

When('I insert an email to receive instructions {string}', (email) => {
    return forgetPasswordActions.insertEmail(email);
});

When('I click on Send button', () => {
    return forgetPasswordActions.clickOnSendButton();
});