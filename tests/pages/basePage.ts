import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForLoadState(_paramState: string): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }
}