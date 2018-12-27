<template>
    <div>
        <header-title :headTitle='headTitle'></header-title>
        <div class="container">
            <li class="icon">
                <img src="@/assets/success.png" alt="" v-if = "successPay === 'TRADE_SUCCESS'" >
                <img src="@/assets/fail.png" v-else>
            </li>
            <li class="text">
                <p v-if = "successPay === 'TRADE_SUCCESS'">支付成功</p>
                <p v-else>支付失败</p>
            </li>
            <li class="btn">
                <router-link :to="{path:'/'}" tag="p">返回首页</router-link>
                <router-link :to="{path:'/order'}" tag="p">查看订单</router-link>
            </li>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'Pay',
  data () {
    return {
      headTitle: '支付结果',
      successPay: ''
    }
  },
  components: {
    HeaderTitle
  },
  mounted () {
    let out = this.$route.query.out_trade_no
    let trade = this.$route.query.trade_no
    this.axios.get('/api/order/tradeQuery/?out_trade_no=' + out + '&trade_no=' + trade).then(res => {
      this.successPay = res.data.alipay_trade_query_response.trade_status
    //   this.list = res.data.list
    }, res => {
      console.info('调用失败')
    })
  }
}
</script>

<style lang="stylus" scoped>
.container
    margin-top 2rem
    .icon
        display flex
        justify-content center
        img
            height 2rem
    .text
        font-size .36rem
        margin .4rem 0 .2rem 0
        text-align center
    .btn
        display flex
        justify-content space-around
        margin .25rem 0
        p
            border 1px solid rgba(255, 87, 51, 1)
            border-radius 5px
            padding .2rem .3rem
            color rgba(255, 87, 51, 1)
            margin-top .3rem
</style>
