import 'dotenv/config';

export class LoginPage {
    //Region 1
    constructor(page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.loginError = page.locator('//h3[@data-test="error"]');
    }


    //Region 2
    async goToLoginPageUrl() {
        await this.page.goto(process.env.BaseUrl);
    }

    async enterUsername() {
        await this.username.fill(process.env.user_name);
    }

    async InvalidUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword() {
        await this.password.fill(process.env.password);
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }
    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async validLogin() {
        await this.username.fill(process.env.user_name);
        await this.password.fill(process.env.password);
        await this.loginButton.click();
    }

    async getLoginErrorMessage() {
        return await this.loginError.textContent();
    }

    async getLoginErrorLocator() {
        return await this.loginError;
    }
}