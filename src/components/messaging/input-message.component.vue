<style lang="stylus" scoped>
  @require '../../stylus/_vars'
  .input-message
    position sticky
    bottom 0
    width 100%
    background-color $blue
    height 50px
    &__input
      width 100%
      height 80%
</style>

<template>
  <Row class="input-message">
    <Col xs8>
      <input class="input-message__input" :placeholder="placeHolder" :value="value" />
    </Col>
    <Col xs1 />
    <Col xs2>
      <Button :action="buttonAction" orange />
    </Col>
  </Row>
</template>
<script>

export default {
  name: 'MessageInput',
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
    buttonAction: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
