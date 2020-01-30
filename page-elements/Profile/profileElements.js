module.exports = {

    elements: {
        profilePersonLink: {
            selector: '//div[@class="navigator-person-info"]',
            locateStrategy: 'xpath'
        },
        userDependentsMenu: {
            selector: '//div[@class="navigator-link-group secondary-collapse panel"][7]//ul//li[3]//a',
            locateStrategy: 'xpath'
        },
        userPaymentHistory: {
            selector: '//div[@class="navigator-link-group secondary-collapse panel"][8]//ul//li[3]//a',
            locateStrategy: 'xpath'
        },
        userDependentsList: {
            selector: '//div[@id="dependent_people"]//tbody//tr',
            locateStrategy: 'xpath'
        }
    }
}