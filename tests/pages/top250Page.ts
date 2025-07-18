import { expect, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class Top250Page extends BasePage {

    top250Link: Locator = this.page.getByLabel('Go to Top 250 movies');

    async waitForLoaded() {
        await this.top250Link.click();
        await this.waitForLoadState();
    }

    async clickFirstMovie() {
        await this.page.locator('li.ipc-metadata-list-summary-item')
            .first()
            .locator('a.ipc-lockup-overlay')
            .click();
    }
}