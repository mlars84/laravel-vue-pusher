<template>
  <v-container>
    <v-list two-line>
      <template>
        <v-subheader>
          {{ question.user }} said {{ question.created_at }}.
        </v-subheader>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title v-html="question.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="question.body"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'Read',
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
