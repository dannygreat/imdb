import { test as base } from '@playwright/test';
import {
    BasePage, HomePage, DetailsPage, SearchPage, Top250Page
} from '../pages';

type Fixtures = {
    basePage: BasePage;
    homePage: HomePage;
    detailsPage: DetailsPage;
    searchPage: SearchPage;
    top250Page: Top250Page;
};

export const test = base.extend<Fixtures>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    detailsPage: async ({ page }, use) => {
        await use(new DetailsPage(page));
    },
    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },
    top250Page: async ({ page }, use) => {
        await use(new Top250Page(page));
    },
});

export { expect } from '@playwright/test';
