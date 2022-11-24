/* eslint-disable no-new */
/* eslint-disable import/extensions */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoSearchView from './liked-restos/favorite-resto-search-view';
import FavoriteRestoSearchPresenter from './liked-restos/favorite-resto-search-presenter';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({
      view,
      favoriteRestos: FavoriteRestoIdb,
    });
  },
};

export default Favorite;
