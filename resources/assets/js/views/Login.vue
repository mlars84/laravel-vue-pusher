<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-card>
        <v-container>
          <v-form @submit.prevent="login()">
            <v-text-field
              v-model="form.email"
              label="E-mail"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.password"
              label="Password"
              type="password"
              required
            ></v-text-field>
            <v-btn
              color="success"
              type="submit"
            >Login
            </v-btn>
            <v-btn flat to="/signup">Sign up</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: null,
      password: null
    }
  }),
  created () {
    if (User.loggedIn()) {
      this.$router.push('forum')
    }
  },
  methods: {
    login () {
      User.login(this.form)
    }
  }
}
</script>

<style>

</style>
