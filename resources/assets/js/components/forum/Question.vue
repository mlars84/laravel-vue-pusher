<template>
  <v-card class="mt-2">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">
          <router-link :to="question.path">
            {{ question.title }}
          </router-link>
        </h3>
        <div class="grey--text">{{ question.user }}  said {{ question.created_at }}.</div>
      </div>
    </v-card-title>
    <v-card-text v-html="parsedBody">
    </v-card-text>
    <v-spacer></v-spacer>
    <v-btn icon small @click="deleteQuestion">
      <v-icon color="red">close</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import md from 'marked'

export default {
  name: 'Questions',
  props: {
    question: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    parsedBody: null
  }),
  created () {
    this.parsedBody = md.parse(this.question.body)
  },
  methods: {
    deleteQuestion () {
      axios 
        .delete(`/api/question/${this.question.slug}`)
        .then(response => {
          location.reload()
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>

</style>
