import { expect, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class DetailsPage extends BasePage {

    titleName: Locator = this.page.getByTestId('hero__pageTitle');
    rating: Locator = this.page.getByRole('link', { name: 'View User Ratings' });
    yearOfReleaseLinkLocator: Locator = this.page.locator('li[role="presentation"] a').filter({ hasText: /^\d{4}$/ });
}