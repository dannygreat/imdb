import { test, expect } from '../helpers';

test.describe('IMDb movie flows', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateImdb();
  });

  test('Search and validate movie', async ({ homePage, searchPage, detailsPage }) => {

    const movieName = 'Inception';

    await homePage.searchFor(movieName);
    await searchPage.clickOnMovie(movieName);

    await expect(detailsPage.titleName).toContainText(movieName);
  });

  test('Navigate to Top 250 and verify first movie', async ({ homePage, top250Page, detailsPage }) => {

    await homePage.goToTop250();
    await top250Page.waitForLoaded();

    await top250Page.clickFirstMovie();

    await expect(detailsPage.titleName).toBeVisible();
    await expect(detailsPage.rating).toBeVisible();
    await expect(detailsPage.yearOfReleaseLinkLocator).toBeVisible();
  });
});
