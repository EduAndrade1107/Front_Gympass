require('babel-core/register');

const chromedriver = require('chromedriver');

module.exports = {

    page_objects_path: './page-elements',

    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515,
    },
    "test_workers": {
        "enabled": true,
        "workers": 4
      },
    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: [
                        'start-fullscreen',
                        'start-maximized',
                        '--disable-infobars',
                        '--disable-notifications',
                        '--ignore-ssl-errors',
                        '-env=headless',
                        '--disable-gpu',
                        '--disable-impl-side-painting',
                        '--disable-gpu-sandbox',
                        '--disable-accelerated-2d-canvas',
                        '--disable-accelerated-jpeg-decoding',
                        '--no-sandbox',
                        '--test-type=ui'
                    ],
                    excludeSwitches: [
                        'enable-automation'
                    ],
                    useAutomationExtension: true
                }
            }
        }
    },
}