const state = {
  // user data facilitators start
  response: '',
  errors: '',
  user: JSON.parse(localStorage.getItem('user')) || '',
  mainData: false
  //access_token: JSON.parse(localStorage.getItem('access_token')) || '',
}

export default state