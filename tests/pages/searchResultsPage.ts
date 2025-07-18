import { BasePage } from './basePage';

export class SearchPage extends BasePage {

    async clickOnMovie(title: string) {
        const movieOption = this.page
            .locator('[role="option"] div.searchResult__constTitle', { hasText: title })
            .first();

        await movieOption.waitFor({ state: 'visible' });
        await movieOption.click();
    }
}