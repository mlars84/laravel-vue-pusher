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

    <replies
      v-if="question.reply_count > 0" 
      :replies="question.replies"
      :questionSlug="question.slug"
    />
  </div>
</template>

<script>
import ShowQuestion from '../components/forum/ShowQuestion'
import EditQuestion from '../components/forum/EditQuestion'
import Replies from '../components/Replies/Replies'

export default {
  name: 'Read',
  components: { ShowQuestion, EditQuestion, Replies },
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
