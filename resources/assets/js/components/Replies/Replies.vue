<template>
  <v-container>
    <reply 
      v-if="replies"
      v-for="(reply, index) in replies" 
      :key="index"
      :reply="reply"
      :questionSlug="questionSlug"
    />
  </v-container>
</template>

<script>
import Reply from './Reply'

export default {
  name: 'Replies',
  components: { Reply },
  props: {
    replies: {
      required: true,
      type: Array
    },
    questionSlug: {
      required: true,
      type: String
    }
  }
} 
</script>

<style>

</style>
