<template>
  <v-card v-if="own">
    <v-card-title>
      <div class="headline">{{ reply.user }}</div>
      <div class="ml-2 grey--text">said {{ reply.created_at }}</div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>{{ reply.reply }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        icon small
        @click="edit"
      >
        <v-icon color="orange">edit</v-icon>
      </v-btn>
      <v-btn
        icon small
        @click="remove"
      >
        <v-icon color="red">delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Reply',
  props: {
    reply: {
      required: true,
      type: Object
    },
    questionSlug: {
      required: true,
      type: String
    }
  },
  data: () => ({}),
  computed: {
    own () {
      return User.own(this.reply.user_id)
    }
  },
  methods: {
    edit () {
      axios 
        .put(`api/question/${this.questionSlug}/reply/${this.reply}`)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    },
    remove () {
      axios
        .delete(`api/question/${this.questionSlug}/reply/${this.reply.id}`)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>

