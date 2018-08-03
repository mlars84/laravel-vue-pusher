<template>
  <v-container fluid>
      <v-layout>
        <v-flex>
          <v-card>
            <v-container>
              <v-form @submit.prevent="update()">
                <v-text-field
                  v-model="question.title"
                  label="Title"
                  type="text"
                  required
                ></v-text-field>
                <markdown-editor
                  v-model="question.body"
                >
                </markdown-editor>
                <v-card-actions>
                  <v-btn
                    icon small
                    type="submit"
                  >
                  <v-icon color="success">save</v-icon>
                  </v-btn>
                  <v-btn
                    icon small
                    @click="cancel"
                  >
                  <v-icon color="warning">cancel</v-icon>
                  </v-btn>
                </v-card-actions> 
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
  methods: {
    update () {
      axios
        .put(`/api/question/${this.question.slug}`, this.question)
        .then(response => {
          this.$router.push('/forum')
        })
        .catch(error => console.error(error))
    },
    cancel () {
      EventBus.$emit('stopEditing')
    }
  }
}
</script>

<style>

</style>
