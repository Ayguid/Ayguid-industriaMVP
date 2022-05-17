const state = {
  loading: false,
  mainFilter: {
    selectedCategories: [],
    location: null
  },
  // user data facilitators start
  user: JSON.parse(localStorage.getItem('user')) || '',
  access_token: JSON.parse(localStorage.getItem('access_token')) || '',
  mainData: {
    user_entities: [],
    user_bookmarks: {
      data: []
    },
    filterChanged: false,
    parent_categories: [],
    entities: {
      data: []
    }
  }
}

export default state