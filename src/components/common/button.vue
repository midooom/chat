<style lang="stylus" scoped>
  @require '../../stylus/_vars'
  .dd-button
    cursor pointer
    width 100%
    height @width
    border 1px solid transparent;
    border-radius 4px
    padding 1px 2px
    &--disabled
      cursor not-allowed
      background-color grey
    &--blue
      background-color $blue
    &--orange
      background-color $orange
</style>
<template functional>
  <button class="dd-button" :class="[$options.classObject(props)]">{{ props.action }}</button>
</template>
<script>

export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    action: {
      type: String,
      default: ''
    },
    blue: {
      type: Boolean,
      default: false
    },
    orange: {
      type: Boolean,
      default: false
    }
  },
  classObject (props) {
    return {
      'dd-button--disabled': props.disabled,
      'dd-button--blue': props.blue,
      'dd-button--orange': props.orange
    }
  }
}
</script>
