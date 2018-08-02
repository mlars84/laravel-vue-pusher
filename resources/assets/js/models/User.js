import Token from '../helpers/Token'
import AppStorage from '../helpers/AppStorage'

class User {
  login (credentials) {
    axios
      .post('/api/auth/login', credentials)
      .then(response => {
        console.log(response)
        this.responseAfterLogin(response)
      })
      .catch(error => console.error(error.response.data))
  }

  responseAfterLogin (res) {
    const accessToken = res.data.access_token
    const username = res.data.user

    if (Token.isValid(accessToken)) {
      AppStorage.store(accessToken, username)
      window.location = '/forum'
    } 
  }

  hasToken() {
    const storedToken = AppStorage.getToken()
    if (storedToken) {
      return Token.isValid(storedToken) ? true : false
    }
    return false
  }

  loggedIn () {
    return this.hasToken()
  }

  logout () {
    AppStorage.clear()
    // window.location = '/forum'
  }

  name () {
    if (this.loggedIn()) {
      return AppStorage.getUser()
    }
  }

  id () {
    if (this.loggedIn()) {
      const payload = Token.payload(AppStorage.getToken())
      return payload.sub
    }
  }

  own (user_id) {
    return this.id() == user_id 
  }
}

export default User = new User() 