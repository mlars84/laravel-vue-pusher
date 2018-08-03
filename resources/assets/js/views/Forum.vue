<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question
          v-for="(question, index) in questions"
          :key="index"
          :question="question"
        />
      </v-flex>
      <v-flex xs4>
        <app-sidebar /> 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Question from '../components/forum/Question'
import AppSidebar from '../components/forum/AppSidebar'

export default {
  name: 'Forum',
  components: {
    Question,
    AppSidebar
  },
  data: () => ({
    questions: {}
  }),
  created () {
    axios
      .get('/api/question')
      .then(response => this.questions = response.data.data)
      .catch(error => console.error(error))
  }
}
</script>

<style>

</style>
