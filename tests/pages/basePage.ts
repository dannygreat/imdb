import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForLoadState(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }
}