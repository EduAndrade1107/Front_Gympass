const { Given, Then, When } = require('cucumber');

const loginActions = require('../page-actions/loginAcitons.js');

When('I insert an email {string}', (email) => {
    return loginActions.insertEmail(email);
});

When('I click on Continue button', () => {
    return loginActions.clickOnContinueButton();
});

When('I insert a password {string}', (password) => {
    return loginActions.insertPassword(password);
});

When('I click on Forget Password link', () => {
    return loginActions.clickOnForgetPasswordLink();
});

When('I click on Facebook Login button', () => {
    return loginActions.clickOnFacebookLoginButton();
});

Then('I should see a message stating that the instructional email has been sent', () => {
    return loginActions.checkForgetPasswordMessage();
});