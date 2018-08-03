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

    <v-container>
       <replies
        v-if="question.reply_count > 0" 
        :replies="question.replies"
        :questionSlug="question.slug"
      />

      <new-reply 
        class="mt-4"
        :questionSlug="question.slug"
      />
    </v-container>
  </div>
</template>

<script>
import ShowQuestion from '../components/forum/ShowQuestion'
import EditQuestion from '../components/forum/EditQuestion'
import Replies from '../components/reply/Replies'
import NewReply from '../components/reply/NewReply'

export default {
  name: 'Read',
  components: { ShowQuestion, EditQuestion, Replies, NewReply },
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
