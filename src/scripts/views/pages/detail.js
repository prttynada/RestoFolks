import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import RestoSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class='post'></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestoSource.detailResto(url.id);
    const restaurant = await response.restaurant;
    const restaurantDetail = document.querySelector('.post');
    restaurantDetail.innerHTML = createRestoDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      restaurant,
    });
  },
};

export default Detail;
