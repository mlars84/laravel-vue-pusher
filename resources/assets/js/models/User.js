class User {
  login (data) {
    axios
      .post('/api/auth/login',data)
      .then(response => console.log(response))
      .catch(error => console.error(error.response.data))
  }
}

export default User = new User()