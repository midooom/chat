<style lang="stylus">
@require '../../stylus/grid'
.dd-row
  row-mixin()
</style>

<template functional>
  <div class="dd-row" :class="[data.staticClass, data.class, $options.getClasses(props)]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    center: {
      type: Boolean,
      default: false
    }
  },
  getClasses (props) {
    return {
      'dd-row--center': !!props.center
    }
  }
}
</script>
