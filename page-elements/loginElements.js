module.exports = {

    elements: {
        emailInput: {
            selector: '#person_search_info'
        },
        loginButton: {
            selector: '[type="submit"]'
        },
        passwordInput: {
            selector: '#person_password'
        },
        forgetPasswordLink: {
            selector: '//a[@class = "v4-link forgot-password"]',
            locateStrategy: 'xpath'
        },
        forgetPasswordMessage: {
            selector: '//div[@class = "alert alert-info alert-dismissible fade in"]',
            locateStrategy: 'xpath'
        },
        facebookLoginButton: {
            selector: '//a[@class="v4-button v4-button--facebook v4-button--block btn-facebook-login"]',
            locateStrategy: 'xpath'
        }
    }
}