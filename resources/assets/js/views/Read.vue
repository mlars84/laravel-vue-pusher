<template>
  <show-question :question="question" />
</template>

<script>
import ShowQuestion from '../components/forum/ShowQuestion'

export default {
  name: 'Read',
  components: { ShowQuestion },
  data: () => ({
    question: {}
  }),
  created () {
    axios
      .get(`/api/question/${this.$route.params.slug}`)
      .then(response => this.question = response.data.data)
      .catch(error => console.error(error))
  }
}
</script>

<style>

</style>
