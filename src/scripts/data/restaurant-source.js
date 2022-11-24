import API_ENDPOINT from '../globals/api-endpoints';

class RestoSource {
  static async resto_List() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST, {
      method: 'GET',
    });
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id), {
      method: 'GET',
    });
    return response.json();
  }
}

export default RestoSource;
