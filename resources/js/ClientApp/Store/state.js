const state = {
  loading: false,
  mainFilter: {
    selectedCategories: [],
    locations: [],
    page: 1
  },
  // user data facilitators start
  user: JSON.parse(localStorage.getItem('user')) || '',
  access_token: localStorage.getItem('access_token') || '',
  mainData: {
    user_entities: [],
    user_bookmarks: {
      data: []
    },
    categories: [],
    /*
    entities: {
      data: []
    }
    */
  }
}

export default state