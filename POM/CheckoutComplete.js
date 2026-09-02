// import 'dotenv/config';
export class CheckoutComplete {
    //Region 1
    constructor(page) {
        this.page = page;
        this.completeHeader = page.locator('.complete-header');
        this.checkoutCompleteText = page.locator('.title');
    }

    //Region 2

    async getCompleteHeaderText() {
        return await this.completeHeader.textContent();
    }

    async getCheckoutCompleteText() {
        return await this.checkoutCompleteText.textContent();
    }

    async getCompleteHeaderLoc() {
        return await this.completeHeader;
    }

    async getCheckoutCompleteLoc() {
        return await this.checkoutCompleteText;
    }

    async verifyCompleteHeaderText(expectedText) {
        const actualText = await this.completeHeader.textContent();
        if (actualText.trim() === expectedText)
            console.log(`Complete header text is verified successfully`);
        else
            console.log(`Complete header text verification failed`);
    }
}