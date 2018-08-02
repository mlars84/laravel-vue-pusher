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
  data: () => ({}),
  computed: {
    body () {
      if (this.question.body) {
        return md.parse(this.question.body)
      }
    }
  }
}
</script>

<style>

</style>
 