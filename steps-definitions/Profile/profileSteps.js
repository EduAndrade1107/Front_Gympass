const { Given, Then, When } = require('cucumber');

const profileActions = require('../../page-actions/Profile/profileActions.js');

When('I click on User Dependents Menu', () => {
    return profileActions.clickOnUserDependentsMenu();
});

Then('I should see User Profile page', () => {
    return profileActions.checkProfilePage();
});

Then('I should see the User Dependents List', () => {
    return profileActions.checkUserDependentsList();
});