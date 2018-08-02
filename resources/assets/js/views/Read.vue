<template>
  <div>
    <edit-question v-if="editMode" :question="question" />
    <show-question 
    :question="question" 
    v-if="question && !editMode"
  />
  </div>
</template>

<script>
import ShowQuestion from '../components/forum/ShowQuestion'
import EditQuestion from '../components/forum/EditQuestion'

export default {
  name: 'Read',
  components: { ShowQuestion, EditQuestion },
  data: () => ({
    question: null,
    editMode: false
  }),
  created () {
    axios
      .get(`/api/question/${this.$route.params.slug}`)
      .then(response => this.question = response.data.data)
      .catch(error => console.error(error))
    
    EventBus.$on('startEditing', () => {
      this.editMode = true
    })
  }
}
</script>

<style>

</style>
