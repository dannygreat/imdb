import { expect, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {

    searchBox: Locator = this.page.getByTestId('suggestion-search');
    goToNavigationMenu: Locator = this.page.getByLabel('Open navigation drawer');

    async navigateImdb() {
        await this.page.goto('/');
    }

    async searchFor(movie: string) {
        await this.searchBox.fill(movie);
    }

    async goToTop250() {
        await this.goToNavigationMenu.click();
    }
}