<template>
  <div>
    <reply 
      v-if="replies"
      v-for="(reply, index) in content" 
      :key="index"
      :reply="reply"
      :questionSlug="questionSlug"
    />
  </div>
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
  },
  data () {
    return {
      content: this.replies
    }
  },
  created () {
    EventBus.$on('newReply', ($reply) => {
      this.content.unshift($reply)
    })
  }
} 
</script>

<style>

</style>
