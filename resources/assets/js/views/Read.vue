<template>
  <div v-if="question">
    <edit-question 
      v-if="editMode" 
      :question="question" 
    />
    <show-question 
      :question="question" 
      v-if="!editMode"
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
    this.listen()
    this.getQuestion()
  },
  methods: {
    getQuestion () {
      axios
        .get(`/api/question/${this.$route.params.slug}`)
        .then(response => this.question = response.data.data)
        .catch(error => console.error(error))
    },
    listen () {
      EventBus.$on('startEditing', () => {
        this.editMode = true
      })

      EventBus.$on('stopEditing', () => {
        this.editMode = false
      })
    }
  }
}
</script>

<style>

</style>
