import 'dotenv/config';
export class CheckoutOverviewPage {
    //Region 1
    constructor(page) {
        this.page = page;
        this.finish = page.locator('#finish');
    }

    //Region 2

    async clickFinishButton() {
        await this.finish.click();
    }
}