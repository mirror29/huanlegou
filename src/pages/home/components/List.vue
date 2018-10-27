<template>
    <div class="list-con" >
        <div v-for="(item) of list" :key="item.goodsId">
            <div class="list-li">
                <router-link :to="{name:'Payment',query:{goodsId: item.goodsId,goodsName: item.goodsName,price: item.price,urlp: item.picture}}">
                    <img :src=url+item.picture alt="" class="list-img">
                </router-link>
                <h2 class="list-title">{{item.goodsName}}</h2>
                <li class="information">
                    <p class="price">￥{{item.price}}</p>
                    <p class="number">月销 8085笔</p>
                </li>
                <li class="list-btn">
                    <el-button class="buy" size="small">
                        <router-link :to="{path:'/Payment',query:{goodsId: item.goodsId,goodsName: item.goodsName,price:item.price,urlp: item.picture}}" tag="p">点击购买</router-link>
                    </el-button>
                    <p class="iconfont cart" @click="showModal(item)">&#xe61c;</p>
                </li>
            </div>
        </div>
        <div class="modal" v-show="show">
            <p>成功加入购物车</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      list: [],
      show: false,
      timeout: 1000,
      url: 'http://192.168.31.6:8890',
      listArray: [],
      num1: 0,
      newArray: []
    }
  },
  methods: {
    showModal (item) {
      let session = localStorage.getItem('userInfo')//  判断用户是否登录
      if (session === null) {
        this.$router.push({name: 'Login'})
      } else {
        this.show = true
        setTimeout(() => {
          this.show = false
        }, this.timeout)
        console.log(item.num1)
        if (item.num1 === undefined) {
          item.num1 = 1
        } else {
          item.num1++
        }
        let cartList = localStorage.getItem('goodsList')
        if (cartList === null) { //  判断是否有购物车缓存
          this.listArray.unshift(item)
          localStorage.setItem('goodsList', JSON.stringify(this.listArray))
        } else {
          this.listArray = JSON.parse(localStorage.goodsList)
          this.listArray.unshift(item)
          let hash = {}
          this.listArray = this.listArray.reduce((preVal, curVal) => { //  利用累计器判断对象id去重
            if (hash[curVal.id]) {
            //   console.log(curVal.num1)
            } else {
              hash[curVal.id] = true && preVal.push(curVal)
            }
            // hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal)
            return preVal
          }, [])
          console.log(this.listArray)
          localStorage.setItem('goodsList', JSON.stringify(this.listArray))
        }
      }
    }
  },
  mounted () {
    this.axios.post('/api/goods/listData/').then(res => {
    //   console.log(res.data)
      this.list = res.data.list
    }, res => {
      console.info('调用失败')
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.list-con
    display :flex
    flex-wrap :wrap
    justify-content space-around
    background-color:#eee
    padding-bottom 1.4rem
    position relative
    padding-left .1rem
    padding-right .1rem
    .list-li
        width :42.5vw
        margin 8px 3px 0 3px
        background-color #ffffff
        border-radius 5px
        padding .12rem
        .list-img
            width: 100%
            height 2.5rem
        .list-title
            font-size : .36rem
            margin .2rem 0
            ellipsis()
        .information
            display: flex
            justify-content space-between
            margin .3rem 0
            .price
                color rgba(212, 48, 48, 1)
                font-size .32rem
            .number
                color rgba(102, 102, 102, 1)
                font-size .28rem
        .list-btn
            display: flex
            justify-content space-between
            .buy
                background-color $bgColor
                color #fff
                width 70%
                p{
                    color #ffffff
                }
            .cart
                font-size .5rem
                color rgba(153, 153, 153, 1)
                margin-right .15rem
    .modal
        position absolute
        top 40%
        left 54%
        margin-top -100px
        margin-left -100px
        opacity .8
        background-color #363636
        padding .3rem .6rem
        border-radius 5px
        p
            color #ffffff
            text-align center
            font-size .3rem
</style>
