<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question />
      </v-flex>
      sidebar  
    </v-layout>
  </v-container>
</template>

<script>
import Question from '../components/forum/Question'

export default {
  name: 'Forum',
  components: {
    Question
  },
  data: () => ({})
}
</script>

<style>

</style>
