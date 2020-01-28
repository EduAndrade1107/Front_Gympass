module.exports = {

    url: 'https://www.gympass.com',
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