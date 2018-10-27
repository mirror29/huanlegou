<template>
    <div class="footer border-top">
        <p class="text" v-if="allPrice">共1件，合计： ￥ {{allPrice}}</p>
        <p class="text" v-else>共{{allNumber}}件，合计： ￥ {{sumPrice}}</p>
        <p class="btn" @click="goPay">提交订单</p>
    </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: {
    allPrice: String,
    sumPrice: String,
    allNumber: String
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    goPay: function () {
      this.$emit('payModal', this.show)
    //   console.log(this.show)
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
    position fixed
    left 0
    right 0
    bottom 0
    display flex
    justify-content flex-end
    line-height 1.06rem
    .text
       color #000
       margin-right .2rem
    .btn
       background-color rgba(255, 87, 51, 1)
       color #fff
       text-align center
       width 2.5rem
</style>
