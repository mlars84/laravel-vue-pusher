<template>
  <v-card>
    <v-toolbar dark dense class="mt-2">
      <v-toolbar-title>Categories</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-tile v-for="(category, index) in categories" :key="index">
        <v-list-tile-content>
          <router-link :to="{path: '/category', params: { category_id: category.id }}">
            <v-list-tile-title>{{ category.name }}</v-list-tile-title>
          </router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'AppSidebar',
  data: () => ({
    categories: {}
  }),
  created () {
    axios
      .get('api/category')
      .then(response => this.categories = response.data.data)
      .catch(error => console.error(error))
  }
}
</script>

<style>

</style>
