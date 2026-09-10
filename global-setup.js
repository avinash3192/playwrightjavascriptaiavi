import fs from 'fs';

async function globalSetup() {
    if (fs.existsSync('./allure-results')) {
        fs.rmSync('./allure-results', {
            recursive: true,
            force: true
        });
    }
}

export default globalSetup;