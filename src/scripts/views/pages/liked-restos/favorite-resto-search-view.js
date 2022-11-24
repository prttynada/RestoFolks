/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */

import { createRestoItemTemplate } from '../../templates/template-creator';

/* eslint-disable no-unused-vars */
class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <div class="resto-list">
        <input id="query" type="text" placeholder="Search Restaurant...">
        <h1 class="resto-list__label">Explore Restaurants</h1>
        <div id="posts" class="posts">
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestos(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(createRestoItemTemplate(restaurant)),
        ''
      );
    } else {
      html = this._getEmptyMovieTemplate();
    }

    document.getElementById('posts').innerHTML = html;

    document.getElementById('posts').dispatchEvent(new Event('resto:updated'));
  }

  _getEmptyMovieTemplate() {
    return '<div class="post-item__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
