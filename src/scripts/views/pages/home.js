import RestoSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="resto-list">
          <h1 class="resto-list__label">Explore Restaurants</h1>
          <div class="posts">
          </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestoSource.resto_List();
    const restaurantList = document.querySelector('.posts');
    restaurants.forEach((resto) => {
      restaurantList.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
