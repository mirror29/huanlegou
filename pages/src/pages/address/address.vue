<template>
    <div>
        <header-title :headTitle='headTitle'></header-title>
        <div class="con">
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入..." v-model="address"></textarea>
            <router-link :to="{name: 'Payment',query:{address: address}}" class="btn" tag="p">
                保存
            </router-link>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'myaddress',
  data () {
    return {
      headTitle: '地址',
      address: ''
    }
  },
  components: {
    HeaderTitle
  }
}
</script>

<style lang="stylus" scoped>
.con
   margin .2rem
   textarea
       border 1px solid #eee
       width 100%
       padding .2rem
       font-size .3rem
       margin-top .4rem
    .btn
        color #fff
        background-color rgba(255, 87, 51, 1)
        width 100%
        line-height .9rem
        text-align center
        margin-top .6rem
        border-radius 5px
        font-size .3rem
</style>
