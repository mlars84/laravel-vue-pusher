<template>
  <div>
    <div class="headline">New Reply</div>
    <markdown-editor
      v-model="reply.body"
    >
    </markdown-editor>
    <v-btn 
      dark
      @click="add"
      color="success"
    >
    Reply
    </v-btn>
  </div>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'

export default {
  name: 'NewReply',
  props: {
    questionSlug: {
      required: true,
      type: String
    }
  },
  data: () => ({
    reply: {
      body: null,
      user_id: User.id()
    }
  }),
  methods: {
    add () {
      axios
        .post(`/api/question/${this.questionSlug}/reply`, this.reply)
        .then(res => {
          this.reply = {}
          EventBus.$emit('newReply', res.data.reply)
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>
