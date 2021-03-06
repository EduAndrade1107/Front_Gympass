const report = require('cucumber-html-reporter');

module.exports = {

    createTestReport: () => {
        return report.generate({
            name: 'E2E End User Front',
            theme: 'bootstrap',
            jsonFile: 'report/cucumber_report.json',
            output: 'report/cucumber_report.html',
            output: 'tests_output/cucumber_report.xml',
            reportSuiteAsScenarios: true,
            launchReport: true
        });
    }
}