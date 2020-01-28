const { client } = require('nightwatch-api');

const profile = client.page.profileElements();

module.exports = {

    checkProfilePage: () => {
        return profile
                .expect
                .element('@profilePersonLink')
                .to.be.present;
    },

    clickOnUserDependentsMenu: () => {
        profile.pause(2500);

        return profile
                .moveToElement('@userPaymentHistory', 10, 10)
                .click('@userDependentsMenu');
    },
    
    checkUserDependentsList: () => {
        return profile
                .expect
                .element('@userDependentsList')
                .to.be.present;
    }
}