<style lang="stylus" scoped>
  .name-input
    width: 100%
    height: @width

</style>

<template>
  <input type="text" class="name-input" v-model="username" :placeholder="placeHolder" required />
</template>
<script>

export default {
  name: 'nameInput',
  props: {
    placeHolder: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    username: ''
  })
}
</script>
