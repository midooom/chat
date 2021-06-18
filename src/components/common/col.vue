<style lang="stylus">
  @require '../../stylus/grid'
  .dd-col
    col-mixin()
</style>

<template functional>
  <div class="dd-col" :class="[data.staticClass, data.class, Object.keys(data.attrs || {})]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Col'
}
</script>
