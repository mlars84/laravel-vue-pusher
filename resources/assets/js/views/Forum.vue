<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <questions 
          v-for="(question, index) in questions"
          :key="index"
          :question="question"
        />
      </v-flex>
      sidebar  
    </v-layout>
  </v-container>
</template>

<script>
import Questions from '../components/forum/Questions'

export default {
  name: 'Forum',
  components: {
    Questions
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
