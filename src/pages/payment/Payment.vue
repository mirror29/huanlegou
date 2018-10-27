<template>
    <div>
        <header-title :headTitle='headTitle'></header-title>
        <consignee :user='userInfo.name' @myAddress="myAddress"></consignee>
        <order :name='goodsName' :price='price' @allPrice="allPrice" :goodsPic='goodsPic' :sumPrice='sumPrice'></order>
        <my-footer @payModal="showModal" :allPrice='myallPrice' :sumPrice='sumPrice' :allNumber='allNumber'></my-footer>
        <transition name="fade">
          <div class="payment border-top" v-show="show">
              <div class="pay-tit">
                  <p class="iconfont close" @click="closeModal">&#xe61d;</p>
                  <p class="pay-tit-text">付款详情</p>
                  <router-link :to="{name: 'Help'}" tag="li" class="iconfont help">
                    &#xe6bc;
                  </router-link>
              </div>
              <div class="pay-con">
                  <li class="border-bottom detail-li">
                    <p class="detail">订单详情<span>{{goodsName}}</span></p>
                  </li>
                  <li class="pay-type">
                    <h3>付款方式</h3>
                    <div>
                      <el-radio v-model="radio" label="1" class="pay-type-li border-bottom" size="medium" >
                        <div class="pay-type-tit">
                          <img src="@/assets/wechart.png" alt="">
                          <p>微信支付</p>
                        </div>
                      </el-radio>

                      <el-radio v-model="radio" label="2" class="pay-type-li border-bottom" size="medium" >
                        <div class="pay-type-tit">
                          <img src="@/assets/alibaba.jpg" alt="" class="zfubao-img">
                          <p>支付宝支付</p>
                        </div>
                      </el-radio>
                    </div>
                  </li>

                  <li class="pay-price">
                    <p>需付款</p>
                    <p v-if="myallPrice">{{myallPrice}} 元</p>
                    <p v-else>{{sumPrice}} 元</p>
                  </li>

                  <p class="pay-btn" @click="submitForm">确认付款</p>
              </div>
          </div>
        </transition>
    </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
import Consignee from '@/pages/payment/components/Consignee'
import Order from '@/pages/payment/components/Order'
import MyFooter from '@/pages/payment/components/Footer'
export default {
  name: 'Payment',
  data () {
    return {
      headTitle: '确认订单',
      radio: '1',
      show: false,
      // goodsId:'',
      goodsName: '',
      address: '',
      price: '',
      myallPrice: '',
      cartList: [],
      allNumber: '',
      userInfo: '',
      count: 1,
      sumPrice: '',
      orderId: ''
    }
  },
  components: {
    HeaderTitle,
    Consignee,
    Order,
    MyFooter
  },
  methods: {
    showModal (e) {
      this.show = e
      // console.log(e)
    },
    closeModal () {
      this.show = false
    },
    myAddress (data) {
      this.address = data
    },
    allPrice (data) {
      // console.log(data)
      this.myallPrice = data
    },
    submitForm (formName) {
      // console.log(this.form)
      if (this.goodsId) {
        let postData = this.qs.stringify({
          'goods.goodsId': this.goodsId,
          'customer.customerId': this.userInfo.customerId,
          consignee: this.userInfo.name,
          address: this.address,
          count: this.count,
          payAmount: this.myallPrice
        })
        this.axios({
          method: 'post',
          url: '/api/order/save',
          data: postData
        })
          .then(res => {
            // console.log(res)
            let orderId = res.data.data.orderId
            console.log(orderId)
            if (res.data.result === 'true') {
              if (this.radio === '1') {
              //  微信支付
              } else {
                //  支付宝
                window.location.href = 'http://192.168.31.6:8890/js/a/api/order/pay?paytype=1&out_trade_no=' + orderId
              }
            } else {
              alert(res.data.message)
            }
          }, res => {
            console.info('调用失败')
          })
      } else {
        for (const item of this.cartList) {
          let postData = this.qs.stringify({
            'goods.goodsId': item.goodsId,
            'customer.customerId': this.userInfo.customerId,
            consignee: this.userInfo.name,
            address: this.address,
            count: this.allNumber,
            payAmount: this.sumPrice
          })
          this.axios({
            method: 'post',
            url: '/api/order/save',
            data: postData
          })
            .then(res => {
              // console.log(res.data.data)
              let orderId = res.data.data.orderId
              console.log(this.orderId)
              if (res.data.result === 'true') {
              } else {
                alert(res.data.message)
              }
              if (this.radio === '1') {
              //  微信支付
              } else {
                //  支付宝
                window.location.href = 'http://192.168.31.6:8890/js/a/api/order/pay?paytype=1&out_trade_no=' + orderId
              }
            })
        }
      }
    }
  },
  mounted () {
    this.goodsId = this.$route.query.goodsId
    this.goodsPic = this.$route.query.urlp
    this.goodsName = this.$route.query.goodsName
    this.price = this.$route.query.price
    this.sumPrice = this.$route.query.sumPrice
    this.userInfo = JSON.parse(localStorage.userInfo)
    let cartList = localStorage.getItem('goodsList')
    if (cartList !== null) {
      this.cartList = JSON.parse(localStorage.cartList)
    }

    this.allNumber = 0
    for (const item of this.cartList) {
      this.allNumber += item.num1
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: height .8s;
  height: 7rem;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}
</style>

<style lang="stylus" scoped>
.payment
    position fixed
    bottom 0
    left 0
    right 0
    background-color #fff
    .pay-tit
       display flex
       justify-content space-between
       margin .2rem
    .pay-con
        margin .1rem .2rem
        .detail-li
            padding .2rem 0
            .detail
                color rgba(153, 153, 153, 1)
                font-size .34rem
                span
                    margin-left .4rem
    .pay-type
        h3
            font-size .34rem
            color rgba(153, 153, 153, 1)
            margin .15rem 0
        .pay-type-li
            display flex
            flex-direction: row-reverse
            justify-content space-between
            padding .25rem
            .pay-type-tit
                display flex
                img
                    height .4rem
                p
                    font-size .32rem
                    margin-left .15rem
                    line-height .4rem
                    text-align center
                .zfubao-img
                    height .5rem
          .el-radio+.el-radio
              margin 0
    .pay-price
        display flex
        justify-content space-between
        font-size .34rem
        padding .35rem .25rem
        border-bottom 1px solid #eee
        margin-bottom 1rem
    .pay-btn
        line-height 1rem
        text-align center;
        color #ffffff
        background-color rgba(255, 87, 51, 1)
        width 88vw
        border-radius 5px
        margin 0 auto
</style>
