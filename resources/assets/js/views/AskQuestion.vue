<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-container>
            <v-form @submit.prevent="ask()">
              <v-text-field
                v-model="question.title"
                label="Title"
                type="text"
                required
              ></v-text-field>
              <v-select
                v-model="question.category_id"
                :items="categories"
                item-text="name"
                item-value="id"
                label="Category"
              >
              </v-select>
              <markdown-editor
                v-model="question.body"
              >
              </markdown-editor>
              <v-btn
                color="success"
                type="submit"
              >Ask
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'

export default {
  name: 'AskQuestion',
  components: { markdownEditor },
  data: () => ({
    question: {
      title: null,
      body: null,
      category_id: null
    },
    categories: {}
  }),
  created () {
    axios
      .get('api/category')
      .then(response => this.categories = response.data.data)
      .catch(error => console.error(error))
  },
  methods: {
    ask () {
      axios
        .post('api/question', {
          title: this.question.title,
          body: this.question.body,
          category_id: this.question.category_id,
          user_id: User.id()
        })
        .then(response => {
          this.$router.push(response.data.path)
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>
</style>
