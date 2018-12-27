<template>
    <div>
        <div class="container border-bottom" v-if="name">
            <div class="left">
                <li >
                    <img :src="url+goodsPic" alt="" class="img">
                </li>
                <li class="text">
                    <p class="title">{{name}}</p>
                    <p class="color">颜色分类：白</p>
                </li>
            </div>
            <div class="right">
                <p class="price">￥{{price}}</p>
                <p class="number">× {{number}}</p>
            </div>
        </div>

        <div class="container border-bottom" v-else v-for="item of cartList" :key="item.goodsId">
            <div class="left">
                <li >
                    <img :src="url+item.picture" alt="" class="img">
                </li>
                <li class="text">
                    <p class="title">{{item.goodsName}}</p>
                    <p class="color">颜色分类：白</p>
                </li>
            </div>
            <div class="right">
                <p class="price">￥{{item.price}}</p>
                <p class="number">× {{item.num1}}</p>
            </div>
        </div>

        <el-collapse accordion class="mode">
            <el-collapse-item>
                <template slot="title">
                    配送方式<i class="title-right">快递￥0</i>
                </template>
                <div>
                    <el-radio v-model="radio" label="1" class="radio">快递￥0</el-radio>
                </div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    运费险<i class="title-right">无</i>
                </template>
                <div>
                    <el-radio v-model="radio" label="1" class="radio">无</el-radio>
                </div>
            </el-collapse-item>
        </el-collapse>

        <div class="leave border-bottom">
            <p class="leave-title">卖家留言</p>
            <input placeholder="选填：对本次交易的说明（建议填写）" class="input">
        </div>

        <div class="order-price border-bottom">
            <p v-if="allPrice">共{{number}}件商品 小计：￥ {{allPrice}}</p>
            <p v-else>共{{allNumber}}件商品 小计：￥ {{sumPrice}}</p>
        </div>

        <div class="anonymous border-bottom">
            <p>匿名购买</p>
            <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
            </el-switch>
        </div>
    </div>
</template>

<script>
export default{
  name: 'Order',
  props: {
    name: String,
    price: String,
    goodsPic: String,
    sumPrice: String
  },
  data () {
    return {
      value1: true,
      value2: true,
      radio: '1',
      number: '1',
      url: 'http://192.168.31.6:8890',
      cartList: [],
      allNumber: ''
    }
  },
  computed: {
    allPrice: function () {
      this.$emit('allPrice', this.price * this.number)
      return this.price * this.number
    }
  },
  mounted () {
    this.cartList = JSON.parse(localStorage.cartList)
    this.allNumber = 0
    for (const item of this.cartList) {
      this.allNumber += item.num1
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
    display flex
    justify-content space-between
    padding .2rem
    .left
        display flex
        line-height .5rem
        .text
            margin-left .2rem
            .title
                font-size .3rem
            .color
                color #ccc
                margin-top .15rem
        .img
            height 1.8rem
            width 1.8rem
    .right
        line-height .55rem
        margin-top .2rem
        .price
            font-size .28rem
        .number
            color #ccc
.mode
    padding 0 .2rem
    .title-right
        float right
        margin-right .15rem
    .radio
        float right
        margin .1rem .6rem
.leave
    display flex
    padding .3rem .2rem
    justify-content space-between
    .leave-title
        margin-top .1rem
    .input
        flex:1
        text-align right
        margin-left .2rem
.order-price
    display flex
    padding .3rem .35rem
    justify-content flex-end
.anonymous
    display flex
    padding .3rem .35rem
    justify-content space-between
</style>
