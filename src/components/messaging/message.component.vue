<style scoped lang="stylus">
  @require '../../stylus/_vars'
  .message
    width fit-content
    height fit-content
    background-color white
    margin 0 20px 20px 20px
    padding 20px
    border-radius: 4px;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0
    position relative
    clear both
    &:before
      content ''
      position absolute
      width 0
      height 0
      bottom 40%
      right 99%
      border 1.05rem solid transparent;
      border-bottom-color white
      transform rotate(-90deg)
    &__meta-data
      font-size: 12pt;
      color $grey
    &--mine
      background-color $chocolate
      float right
      &:before
        transform rotate(90deg)
        left: 97%
        border-bottom-color $chocolate
</style>
<template>
<Flex grow align="center" justify="center" class="message" :class="{'message--mine': mine}">
  <Row v-if="!mine" class="message__meta-data">
    {{ author }}
  </Row>
  <Row>
    {{ content }}
  </Row>
  <Row class="message__meta-data">
    {{ timestamp }}
  </Row>
</Flex>
</template>

<script>
export default {
  name: 'Message',
  props: {
    mine: {
      type: Boolean,
      default: false
    },
    author: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    timestamp: {
      type: String,
      default: ''
    }
  }
}
</script>
