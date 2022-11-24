/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((restaurant) => restaurant.id == id);
  },

  getAllRestos() {
    return favoriteRestos;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestos
    if (this.getResto(restaurant.id)) {
      return;
    }

    favoriteRestos.push(restaurant);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy resto yang ada
    // kecuali resto dengan id == id
    favoriteRestos = favoriteRestos.filter((restaurant) => restaurant.id != id);
  },
  async searchRestos(query) {
    return (await this.getAllRestos()).filter((restaurant) => {
      const loweredCaseRestoTitle = (restaurant.name || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestos = []));

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
