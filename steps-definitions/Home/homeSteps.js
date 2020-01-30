const { Given, Then, When } = require('cucumber');

const homeActions = require('../../page-actions/Home/homeActions.js');
const loginActions = require('../../page-actions/Login/loginAcitons.js');

Given('I am logged in Gympass webpage with valid {string} and {string}', (email, password) => {
    homeActions.openGympassHomePage();
    homeActions.clickOnLoginButton();
    loginActions.insertEmail(email);
    loginActions.clickOnContinueButton();
    loginActions.insertPassword(password);
    return loginActions.clickOnContinueButton();
});

Given('I am in Gympass home page', () => {
    return homeActions.openGympassHomePage();
});

When('I click on Log In button', () => {
    homeActions.clickOnLoginButton();
});
