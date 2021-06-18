<style lang="stylus">
  @require '../../stylus/flex'

  .dd-flex
    flex-mixin()

</style>

<template functional>
  <div  @click="$options.click($event,data)"
        :class="[data.staticClass, data.class, $options.classObject(props)]"
        class="dd-flex">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Flex',
  props: {
    column: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'start'
    },
    justify: {
      type: String,
      default: 'start'
    },
    grow: {
      type: Boolean,
      default: false
    }
  },
  classObject (props) {
    return {
      'dd-flex--column': props.column,
      'dd-flex--grow': props.grow,

      'dd-flex--justify-center': props.justify === 'center',
      'dd-flex--justify-end': props.justify === 'end',
      'dd-flex--justify-space-around': props.justify === 'space-around',
      'dd-flex--justify-space-between': props.justify === 'space-between',
      'dd-flex--justify-space-evenly': props.justify === 'space-evenly',

      'dd-flex--align-center': props.align === 'center',
      'dd-flex--align-end': props.align === 'end',
      'dd-flex--align-stretch': props.align === 'stretch'
    }
  },
  click ($event, data = {}) {
    if (data.on && data.on.click) data.on.click($event)
  }
}
</script>
