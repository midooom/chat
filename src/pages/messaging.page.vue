<style lang="stylus" scoped>
  .message-page
    position relative
    height 100vh
</style>
<template>
  <div class="message-page">
  <MessageContainer :messages="messages" />
  <InputMessage placeHolder="Type your message" buttonAction="Send" />
  </div>
</template>
<script>
import MessageContainer from '@/components/messaging/message-container.component'
import InputMessage from '@/components/messaging/input-message.component'
export default {
  components: {MessageContainer, InputMessage},
  name: 'MessagingPage',
  data: () => ({
    messages: [
      {author: 'mouafa', content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', timestamp: 'Tues 09:40'},
      {author: 'mouafa', content: 'lorem ipsum', timestamp: 'Tues 09:40', mine: true}
    ]
  })
}
</script>
