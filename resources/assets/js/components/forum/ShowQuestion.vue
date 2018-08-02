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
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ShowQuestion',
  props: {
    question: {
      required: true,
      type: Object
    }
  },
  data: () => ({})
}
</script>

<style>

</style>
