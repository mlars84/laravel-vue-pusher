<template>
  <v-container>
    <v-card>
      <v-container fluid>
        <v-card-title>
          <div>
            <div class="headline">
              {{ question.title }}
            </div>
            <span class="grey--text">{{ question.user }} said {{ question.created_at }}.</span>
          </div>
          <v-spacer></v-spacer>
          <v-btn color="teal">5 replies</v-btn>
        </v-card-title>
        <v-card-text v-html="body"></v-card-text>
      </v-container>
      <v-card-actions>
        <v-btn icon small @click="edit">
          <v-icon color="orange">edit</v-icon>
        </v-btn>
        <v-btn icon small @click="remove">
          <v-icon color="red">delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card> 
  </v-container>
</template>

<script>
import md from 'marked'

export default {
  name: 'ShowQuestion',
  props: {
    question: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      own: User.own(this.question.user_id)
    }
  },
  computed: {
    body () {
      return md.parse(this.question.body)
    }
  },
  methods: {
    edit () {
      EventBus.$emit('startEditing')
      axios
        .put(`/api/question/${this.question.slug}`, this.question)
        .then(response => console.log({response}))
        .catch(error => console.error({error}))
    },
    remove () {
      axios 
        .delete(`/api/question/${this.question.slug}`)
        .then(response => {
          this.$router.push('/forum')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>

</style>
 