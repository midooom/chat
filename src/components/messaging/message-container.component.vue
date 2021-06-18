<style lang="stylus" scoped>
  .message-container
    height 100%
    & &__message
      max-width 70%
      height 50px
</style>

<template>
  <div class="message-container">
    <Message class="message-container__message"
    v-for="(message, i) in messages" :key="i" :author="message.author" :content="message.content"
    :timestamp="message.timestamp" :mine="message.mine" />
  </div>
</template>
<script>
import Message from './message.component.vue'

export default {
  components: { Message },
  name: 'MessageContainer',
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  }
}
</script>
