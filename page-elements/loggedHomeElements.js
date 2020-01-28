module.exports = {

    elements: {
        loggedMessage: {
            selector: '#flash'
        },
        userSideMenu: {
            selector: '//span[@class="visible-lg"]',
            locateStrategy: 'xpath'
        },
        profileOption: {
            selector: '//ul[@class="dropdown-menu"]//li[@class="hidden-xs"]',
            locateStrategy: 'xpath'
        }
    }
}