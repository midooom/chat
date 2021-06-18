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
<template>
  <button class="dd-button" @click="onClick()" :class="classObject()">{{ action }}</button>
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
  methods: {
    classObject () {
      return {
        'dd-button--disabled': this.disabled,
        'dd-button--blue': this.blue,
        'dd-button--orange': this.orange
      }
    },
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
