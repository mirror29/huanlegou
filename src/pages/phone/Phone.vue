<template>
    <div>
        <header-title :headTitle='headTitle'></header-title>
        <li :click="phoneCall ()"> </li>
    </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'Phone',
  data () {
    return {
      headTitle: '联系我们'
    }
  },
  methods: {
    phoneCall () {
      window.location.href = 'tel://' + '13888888888'
      console.log('1651')
    }
  },
  components: {
    HeaderTitle
  }
}
</script>

<style lang="stylus" scoped>

</style>
