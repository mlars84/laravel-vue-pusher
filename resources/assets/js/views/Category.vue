<template>
  <v-container>
    <v-form @submit.prevent="submit()">
      <v-text-field
        v-model="categoryName"
        label="Category Name"
        type="text"
        required
      ></v-text-field>
      <v-btn
      v-if="editSlug"
        icon small
        color="warning"
        type="submit"
      >
      <v-icon>save</v-icon>
      </v-btn>
      <v-btn
        v-else
        icon small
        color="success"
        type="submit"
      >
      <v-icon>add</v-icon>
      </v-btn>
    </v-form>

    <v-card class="mt-4">
      <v-toolbar color="info" dark>
        <v-toolbar-title>Categories</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <div v-for="(category, index) in categories" :key="index">
          <v-list-tile>
            <v-list-tile-action>
              <v-btn
                icon small
                @click="edit(index)"
              >
              <v-icon color="warning1">edit</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ category.name }}
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon small
                @click="remove(category.slug)"
              >
              <v-icon color="red">delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Category',
  data: () => ({
    categoryName: null,
    categories: {},
    editSlug: null
  }),
  created () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      axios
        .get('api/category')
        .then(response => this.categories = response.data.data)
        .catch(error => console.error(error))
    },
    submit () {
      this.editSlug ? this.update() : this.create()
    },
    create () {
      axios
        .post('/api/category', {
          name: this.categoryName
        })
        .then(res => {
          this.getCategories()
          this.categoryName = null
        })
        .catch(err => console.error(err))
    },
    update () {
      axios
        .put(`/api/category/${this.editSlug}`, {
          name: this.categoryName
        })
        .then(res => {
          this.getCategories()
          this.categories = res.data.data
          this.editSlug = null
          this.categoryName = null
        })
        .catch(err => console.error(err))
    },
    edit (index) {
      this.categoryName = this.categories[index].name
      this.editSlug = this.categories[index].slug
      this.categories.splice(index, 1)
    },
    remove (slug) {
      axios
        .delete(`/api/category/${slug}`)
        .then(res => {
          this.getCategories()
          this.categories = res.data.data  
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>
