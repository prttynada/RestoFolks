/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoItemTemplate = (restaurant) => `
    <article id="post-item" class='post-item'>
        <img
            class="lazyload"
            class="post-item__thumbnail"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
            alt="${restaurant.name || '-'}"
        />
        <div class="post-item__content">
            <h1 class="post-item__name">
                <a class="post-item__title" href="#/detail/${restaurant.id}">${
  restaurant.name || '-'
}</a>
            </h1>
            <p class="post-item__description">${
              restaurant.description || '-'
            }</p>
        </div>
    </article>
`;

const createRestoDetailTemplate = (restaurant) => `
    <article class='item'>
        <h2 class="item__name">${restaurant.name}</h2>
        <img class="item__poster" src="${
          CONFIG.BASE_IMAGE_URL + restaurant.pictureId
        }" alt="${restaurant.name}" />
        <div class="item__header">
            <p class="item__rating"> Rating: ⭐️<span>${
              restaurant.rating
            }</span></p>
            <h4>Address</h4>
            <p>${restaurant.address}</p>
            <h4>City</h4>
            <p>${restaurant.city}</p>
        </div>
        <div class="item__info">
            <div class="item__description">
                <h3>Description</h3>
                <p>${restaurant.description}</p>
            </div>
            <div class="item__menu">
                <h3>Menu</h3>
                <div class="item__menu__foods">
                    <h4>Foods</h4>
                    <ol>
                        ${restaurant.menus.foods
                          .map(
                            // eslint-disable-next-line comma-dangle
                            (food) => `<li> ${food.name} </li>`
                          )
                          .join('')}
                    </ol>
                </div>
                <div class="item__menu__drinks">
                    <h4>Drinks</h4>
                    <ol>
                        ${restaurant.menus.drinks
                          .map(
                            // eslint-disable-next-line comma-dangle
                            (drink) => `<li> ${drink.name} </li>`
                          )
                          .join('')}
                    </ol>
                </div>
            </div>
            <div class="item__reviews">
                <h3>Customer Reviews</h3>
                <ol>
                    ${restaurant.customerReviews
                      .map(
                        (review) => `
                        <li>
                            <h4>${review.name}<h4>
                            <p class="item__reviews__date">${review.date}<p>
                            <p>${review.review}<p>
                        </li>`
                      )
                      .join('')}
                <ol>
            </div>
        </div>
    </article>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
