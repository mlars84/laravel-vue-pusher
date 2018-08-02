<template>
  <v-toolbar>
    <v-toolbar-title>Real Time Forum</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        flat
        v-for="item in items" 
        :key="item.title" 
        :to="item.to"
        v-if="item.show"
      >{{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { 'title': 'Forum', to: '/forum', show: true },
      { 'title': 'Question', to: '/question', show: User.loggedIn() },
      { 'title': 'Category', to: '/category', show: User.loggedIn() },
      { 'title': 'Login', to: '/login', show: !User.loggedIn() },
      { 'title': 'Logout', to: '/logout', show: User.loggedIn() }
    ]
  }),
  created () {
    EventBus.$on('logout', () => {
      User.logout()
      window.location = '/forum'
    })
  }
}
</script>

<style>

</style>
