<style scoped lang="stylus">
  .container
    height 100%
  .formInput
    height 20%
    max-height 28px
</style>
<template>
<div class="container">
  <Flex grow align="center" justify="center" class="container">
    <Col xs10 md4 class="formInput">
      <name-input placeHolder="Enter your username" :value="username" v-model="username" @submit="submit()" />
    </Col>
    <Col xs6 md2 class="formInput">
      <Button action="Submit" @click="submit()" blue />
    </Col>
  </Flex>
</div>
</template>

<script>
import NameInput from '@/components/landing/name-input.component.vue'
export default {
  components: { NameInput },
  name: 'LandingPage',
  data: () => ({
    username: ''
  }),
  methods: {
    submit() {
      this.$store.dispatch('setUsername', this.username)
      this.$router.push('/messaging')
    }
  }
}
</script>
