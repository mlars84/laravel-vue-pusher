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
  name: 'EditQuestion',
  props: {
    question: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    question: {
      title: this.question.title,
      category: this.question.category,
      body: this.question.body
    }
  })
}
</script>

<style>

</style>
