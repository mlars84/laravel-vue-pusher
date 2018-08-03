<template>
  <v-container>
    <v-form @submit.prevent="create()">
      <v-text-field
        v-model="categoryName"
        label="Category Name"
        type="text"
        required
      ></v-text-field>
      <v-btn
        icon small
        color="success"
        type="submit"
      >
      <v-icon>add</v-icon>
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Category',
  data: () => ({
    categoryName: null
  }),
  methods: {
    create () {
      axios
        .post('/api/category', {
          name: this.categoryName
        })
        .then(res => this.$router.push('/forum'))
        .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>
