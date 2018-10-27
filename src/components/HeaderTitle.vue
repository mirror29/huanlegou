<template>
    <div class="header">
        <i class="iconfont retrun" @click="backPage">&#xe605;</i>
        <p class="title">{{title}}</p>
    </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: ['headTitle'],
  data () {
    return {
      title: this.headTitle
    }
  },
  methods: {
    backPage () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
    line-height 1rem
    width: 100vw
    position relative
    .retrun
        position absolute
        margin-left .2rem
    .title
        text-align :center
        font-size :.4rem
</style>
