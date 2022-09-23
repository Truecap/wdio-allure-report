## Technology

- [Java Script](https://learn.javascript.ru/)
- [WebdriverIO](https://webdriver.io/)
- [Visual Studio Code](https://code.visualstudio.com/)



## Steps to run

- Clone the repository using "git clone "

- npm install


## Run test

# You should have installeted browsers (firefox/chrome) for local running ui tests

-You can start your test suite by using the run command and pointing to the WebdriverIO config that you just created:

npx wdio run ./wdio.conf.js

-If you like to run specific test files you can add a --spec parameter:

npx wdio run ./wdio.conf.js --spec example.e2e.js

-Or you can use npm run "scripts"

## Allure-report

# Installation
- The easiest way is to include @wdio/allure-reporter as a devDependency in your package.json.

{
  "devDependencies": {
    "@wdio/allure-reporter": "^7.0.0"
  }
}

- You can simply do it by:

npm install @wdio/allure-reporter --save-dev

# Configuration
- Configure the output directory in your wdio.conf.js file:

exports.config = {
    // ...
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    // ...
}

// wdio.conf.js
const allure = require('allure-commandline')

exports.config = {
    // ...
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
    // ...
}


