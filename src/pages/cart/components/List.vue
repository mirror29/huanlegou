<template>
    <div class="container">
        <slip-del
            v-for="(item, i) in list"
            :key="i"
            ref="slipDel"
            del-text="删除商品"
            @slip-open="slipOpen"
            @del-click="del(i)"
        >
            <div class="demo-item">
                    <div class="list">
                        <!-- <div class="head">
                            <p>分享 | </p>
                            <p class="edit"> 编辑</p>
                        </div> -->
                        <div class="list-con">
                            <li @click="clickSelect(item)" class="select-img">
                                <div v-if="item.select">
                                    <img src="@/assets/select.png" alt="">
                                </div>
                                <div v-else class="select"></div>
                            </li>
                            <li class="detail">
                                <img :src='url+item.picture' alt="" class="detail-img">
                                <p>{{item.goodsName}}</p>
                            </li>
                            <li class="right">
                                <p>￥ {{item.price}}</p>
                                <p class="number">× {{item.num1}}</p>
                            </li>
                            <el-input-number
                                v-model="item.num1" @change="handleChange"
                                :min="1" :max="999" label="描述文字"
                                size="mini" class="foot-num">
                            </el-input-number>
                        </div>
                    </div>
            </div>
            <div slot="del" class="del">删除</div>
        </slip-del>

        <div class="foot border-top">
            <div class="foot-left">
                <li @click="clickAllSelect" class="select-img">
                    <div v-if="allSelect">
                        <img src="@/assets/select.png" alt="">
                    </div>
                    <div v-else class="select"></div>
                </li>
                <li class="all">
                    <p>全选</p>
                </li>
            </div>
            <div class="foot-right">
                <li class="right-text">
                    <p>合计：￥ {{sumPrice}}</p>
                    <p>不含运费</p>
                </li>
                <!-- <router-link class="foot-btn" tag="p" :to="{name:'Payment'}" @click="toPayment"> -->
                <p class="foot-btn" @click="toPayment">结算</p>
            </div>
        </div>
    </div>
</template>

<script>
import SlipDel from 'vue-slip-delete'
export default {
  name: 'List',
  data () {
    return {
      url: 'http://192.168.31.6:8890',
      allSelect: false,
      list: [],
      sumPrice: '0',
      cartArr: []
    }
  },
  components: {
    SlipDel
  },
  methods: {
    clickSelect (item) {
      item.select = !item.select
      this.getTotalMoney()
    },
    clickAllSelect () {
      // 全选
      this.allSelect = !this.allSelect
      var _this = this
      this.list.forEach(function (item, index) {
        if (typeof item.select === 'undefined') {
          _this.$set(item, 'select', _this.allSelect)
        } else {
          item.select = _this.allSelect
        }
      })
      this.getTotalMoney()
    },
    handleChange (value) {
    //   console.log(value)
      this.getTotalMoney()
    },
    getTotalMoney: function () {
      // 计算总价
      let _this = this
      this.sumPrice = 0
      this.list.forEach(function (item, index) {
        if (item.select) {
          _this.sumPrice += item.num1 * item.price
        //   console.log(_this.sumPrice)
        }
      })
    },
    toPayment () {
      for (const item of this.list) {
        if (item.select) {
          let cartArr = this.cartArr
          cartArr.push(item)
          localStorage.setItem('cartList', JSON.stringify(cartArr))
          this.$router.push({name: 'Payment', query: {sumPrice: this.sumPrice}})
        //   console.log(cartArr)
        }
      }
    },
    slipOpen (vm) {
      // 无需手动关闭
    },
    del (i) {
      // 删除回调
      this.list.splice(i, 1)
      localStorage.setItem('goodsList', JSON.stringify(this.list))
    }
  },
  mounted () {
    this.list = JSON.parse(localStorage.goodsList)
    console.log(this.list)
  }
}
</script>

<style lang="stylus" scoped>
.container
  background-color rgba(248, 246, 246, 1)
  border-top 3px solid #ccc
  padding-bottom .15rem
  margin-bottom 2.4rem
  .foot
    display flex
    justify-content space-between
    background-color #fff
    position fixed
    bottom 1.2rem
    left 0
    right 0
    z-index 999
    .foot-left
        display flex
        margin-top .35rem
        margin-left .2rem
       .select-img
          margin-right .18rem
          img
              height .46rem
              width .46rem
              border 1px solid  #fff
          .select
              height .46rem
              width .46rem
              border-radius 50%
              border 1px solid  #ccc
       .all
           font-size .3rem
           margin-top .1rem
    .foot-right
        display flex
        .foot-btn
            color #ffffff
            background-color rgba(255, 87, 51, 1)
            line-height 1.1rem
            text-align center
            height 100%
            width 33vw
        .right-text
            line-height .55rem
            font-size .3rem
            margin-right .2rem
  .del
    background-color rgba(255, 87, 51, 1)
    text-align center
    padding-top .2rem
    // line-height 2.48rem
    line-height 2.18rem
  .list
    background-color #fff
    margin-bottom .15rem
    padding-top .2rem
    .head
      display flex
      justify-content flex-end
      margin-right .2rem
      color rgba(128, 128, 128, 1)
      .edit
        margin-left .1rem
    .list-con
       display flex
       justify-content flex-start
       position relative
       padding .2rem
       .select-img
          margin-top .45rem
          margin-right .2rem
          img
            height .46rem
            width .46rem
            border 1px solid  #fff
          .select
            height .46rem
            width .46rem
            border-radius 50%
            border 1px solid  #ccc
        .detail
          display flex
          width 80%
          .detail-img
            height 1.8rem
            width 1.8rem
          p
            color rgba(51, 51, 51, 1)
            font-size .3rem
            max-height 1.2rem
            margin-left .15rem
            line-height .4rem
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
       .right
          position absolute
          right .3rem
          line-height .4rem
          p
            text-align right
          .number
            color #ccc
        .foot-num
          display flex
          align-self flex-end
</style>
