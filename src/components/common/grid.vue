<style lang="stylus">
  @require '../../stylus/grid'
  .dd-grid
    grid-mixin()
</style>

<template functional>
  <div class="dd-grid" :class="props.fluid ? 'dd-grid--fluid' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  }
}
</script>
