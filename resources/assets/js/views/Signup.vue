<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-card>
        <v-container>
          <v-form @submit.prevent="signup">
            <v-text-field
              v-model="form.name"
              label="Name"
              type="text"
              required
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
            <v-text-field
              v-model="form.email"
              label="E-mail"
              type="email"
              required
            ></v-text-field>
            <!-- <span class="red--text" v-if="errors.email">{{errors.email}}</span> -->
            <v-text-field
              v-model="form.password"
              label="Password"
              type="password"
              required
            ></v-text-field>
            <!-- <span class="red--text" v-if="errors.password">{{errors.password}}</span> -->
            <v-text-field
              v-model="form.password_confirmation"
              label="Confirm Password"
              type="password"
              required
            ></v-text-field>
            <!-- <span class="red--text" v-if="errors.password_confirmation">{{errors.password_confirmation}}</span> -->
            <v-btn
              color="success"
              type="submit"
            >Sign up
            </v-btn>
            <v-btn to="/login">Login</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AppStorage from '../helpers/AppStorage'
export default {
  data: () => ({
    errors: {},
    form: {
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    }
  }),
  methods: {
    signup () {
      AppStorage.clear()
      axios
        .post('/api/auth/signup', this.form)
        .then(response => {
          User.responseAfterLogin(response)
          this.$router.push('forum')
        })
        .catch(error => {
          console.log(error)
          // this.errors = error.response.data.errors
        })
    }
  }
}
</script>

<style>

</style>
