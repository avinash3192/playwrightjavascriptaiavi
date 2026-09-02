import 'dotenv/config';
export class CheckoutStepTwo {
    //Region 1
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continue = page.locator('#continue');
    }

    //Region 2
    async enterFirstName() {
        await this.firstName.fill('Avinash');
    }

    async enterLastName() {
        await this.lastName.fill('Rao');
    }

    async enterPostalCode() {
        await this.postalCode.fill('560072');
    }

    async clickContinueButton() {
        await this.continue.click();
    }
}