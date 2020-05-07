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
                        '--no-sandbox',
                        '--disable-dev-shm-usage'
                    ],
                    excludeSwitches: [
                        'enable-automation'
                    ],
                    useAutomationExtension: true
                }
            }
        }
    },
    // webdriver: {
    //     start_process: true,
    //     port: 4444,
    //     server_path: require('geckodriver').path,
    //     cli_args: [
    //       // very verbose geckodriver logs
    //       // '-vv'
    //     ]
    //   },
    
    //   test_settings: {
    //     default: {
    //       desiredCapabilities : {
    //         browserName : 'firefox',
    //         alwaysMatch: {
    //           // Enable this if you encounter unexpected SSL certificate errors in Firefox
    //           // acceptInsecureCerts: true,
    //           'moz:firefoxOptions': {
    //             args: [
    //                     'start-fullscreen',
    //                     'start-maximized',
    //                     '--disable-infobars',
    //                     '--disable-notifications',
    //                     '--ignore-ssl-errors',
    //                     '-env=headless',
    //                     '--disable-gpu',
    //                     '--no-sandbox',
    //                     '--disable-dev-shm-usage',
    //                     '--verbose'
    //             ],
    //           }
    //         }
    //       }
    //     }
    //   },
}