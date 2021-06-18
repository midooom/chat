import Button from '@/components/common/button.vue'
import Flex from '@/components/common/flex.vue'
import Col from '@/components/common/col.vue'
import Grid from '@/components/common/grid.vue'
import Row from '@/components/common/row.vue'

export default {
  install: (Vue) => {
    Vue.component('Button', Button)
    Vue.component('Flex', Flex)
    Vue.component('Col', Col)
    Vue.component('Grid', Grid)
    Vue.component('Row', Row)
  }
}
