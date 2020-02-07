let url_prod = 'https://gympass.com/';
let url_devint = 'https://conv.gympass-staging.com/pessoas/entrar?registration_type=reset'

module.exports = {

    url: url_prod,
    elements: {
        body: {
            selector: 'body'
        },
        loginButton: {   
            selector: '//a[@class = "button new outlined"]',
            locateStrategy: 'xpath'
        } 
    }
}