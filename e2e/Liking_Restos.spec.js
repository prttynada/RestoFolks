/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada resto untuk ditampilkan', '.post-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.post-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__name a');

  const firstResto = locate('.post-item__name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestoTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.post-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__name a');

  const firstResto = locate('.post-item__name a').first();
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  // unlike the resto
  I.seeElement('.post-item__name a');

  const firstLikedResto = locate('.post-item__name a').first();
  I.click(firstLikedResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada resto untuk ditampilkan', '.post-item__not__found');
});
