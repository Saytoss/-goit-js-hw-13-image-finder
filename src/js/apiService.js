const baseUrl =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';

export default {
  page: 1,
  query: '',
  fetchImg() {
    const requestParam = `q=${this.query}&page=${this.page}&per_page=12&key=16429132-87648443c7058e02d90a34f5c`;

    return fetch(baseUrl + requestParam)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(input) {
    this.query = input;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
