<style lang="stylus" scoped>
  .name-input
    width: 100%
    height: @width

</style>

<template>
  <input type="text" class="name-input" :value="value" :placeholder="placeHolder"  @input="onInput" @keyup.enter="submit" required />
</template>
<script>

export default {
  name: 'nameInput',
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput (event) {
      const value = event.target.value
      this.$emit('input', value)
    },
    submit () {
      this.$emit('submit')
    }
  }
}
</script>
