<template>
    <div>
        <header-title :headTitle='headTitle'></header-title>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
            <el-tab-pane label="全部" name="first" class="scrollload-container">
                <div class="tab-con" v-for="item of list" :key="item.id">
                    <div class="tab-li">
                        <li class="tab-li-tit">
                            <p class="time">{{item.createDate}}</p>
                            <p class="staus" v-if="item.status === '3'">已出库</p>
                        </li>
                        <li class="tab-li-con">
                            <div class="tab-li-left">
                                <img :src="url + item.goods.picture" alt="" class="list-img">
                                <div class="tab-li-msg">
                                    <p class="name">{{item.goods.goodsName}}</p>
                                    <p class="color">{{item.goods.remarks}}</p>
                                    <p class="watch" v-if="item.status === '2'">查看物流</p>
                                    <p class="watch" v-if="item.status === '3'">查看物流</p>
                                </div>
                            </div>
                            <div class="tab-li-right">
                                <p class="price">￥ {{item.goods.price}}</p>
                                <p class="number">× {{item.count}}</p>
                                <p class="status" v-if="item.status === '0'">待付款</p>
                                <p class="status" v-else-if="item.status === '1'">已取消</p>
                                <p class="status" v-else-if="item.status === '2'">已付款</p>
                                <p class="status" v-else-if="item.status === '3'">已发货</p>
                            </div>
                        </li>
                    </div>
                </div>
            </el-tab-pane>

            <el-tab-pane label="待付款" name="second">
                <div class="tab-con" v-for="item of list1" :key="item.id">
                    <div class="tab-li">
                        <li class="tab-li-tit">
                            <p class="time">{{item.createDate}}</p>
                            <!-- <p class="staus">已出库</p> -->
                        </li>
                        <li class="tab-li-con">
                            <div class="tab-li-left">
                                <img :src="url + item.goods.picture" alt="" class="list-img">
                                <div class="tab-li-msg">
                                    <p class="name">{{item.goods.goodsName}}</p>
                                    <p class="color">{{item.goods.remarks}}</p>
                                    <!-- <p class="watch">查看物流</p> -->
                                </div>
                            </div>
                            <div class="tab-li-right">
                                <p class="price">￥ {{item.goods.price}}</p>
                                <p class="number">× {{item.count}}</p>
                                <p class="status">待付款</p>
                            </div>
                        </li>
                    </div>
                </div>
            </el-tab-pane>

            <el-tab-pane label="已付款" name="third">
                <div class="tab-con" v-for="item of list2" :key="item.id">
                    <div class="tab-li">
                        <li class="tab-li-tit">
                            <p class="time">{{item.createDate}}</p>
                            <!-- <p class="staus">已出库</p> -->
                        </li>
                        <li class="tab-li-con">
                            <div class="tab-li-left">
                                <img :src="url + item.goods.picture" alt="" class="list-img">
                                <div class="tab-li-msg">
                                    <p class="name">{{item.goods.goodsName}}</p>
                                    <p class="color">{{item.goods.remarks}}</p>
                                    <p class="watch">查看物流</p>
                                </div>
                            </div>
                            <div class="tab-li-right">
                                <p class="price">￥ {{item.goods.price}}</p>
                                <p class="number">× {{item.count}}</p>
                                <p class="status">已付款</p>
                            </div>
                        </li>
                    </div>
                </div>
            </el-tab-pane>

            <el-tab-pane label="已发货" name="fourth">
                <div class="tab-con" v-for="item of list3" :key="item.id">
                    <div class="tab-li">
                        <li class="tab-li-tit">
                            <p class="time">{{item.createDate}}</p>
                            <!-- <p class="staus">已出库</p> -->
                        </li>
                        <li class="tab-li-con">
                            <div class="tab-li-left">
                                <img :src="url + item.goods.picture" alt="" class="list-img">
                                <div class="tab-li-msg">
                                    <p class="name">{{item.goods.goodsName}}</p>
                                    <p class="color">{{item.goods.remarks}}</p>
                                    <p class="watch">查看物流</p>
                                </div>
                            </div>
                            <div class="tab-li-right">
                                <p class="price">￥ {{item.goods.price}}</p>
                                <p class="number">× {{item.count}}</p>
                                <p class="status">已发货</p>
                            </div>
                        </li>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'Order',
  data () {
    return {
      headTitle: '我的订单',
      activeName: 'second',
      url: 'http://192.168.31.6:8890',
      list: [],
      list1: [],
      list2: [],
      list3: []
    }
  },
  components: {
    HeaderTitle
  },
  methods: {
    handleClick (tab, event) {
    //   console.log(tab, event)
    }
  },
  mounted () {
    let userInfo = JSON.parse(localStorage.userInfo)
    let userId = userInfo.customerId
    this.axios.get('/api/order/listData?customer.customerId=' + userId + '&status=').then(res => { //  全部
    //   console.log(res.data.list)
      this.list = res.data.list
    }, res => {
      console.info('调用失败')
    })
    this.axios.get('/api/order/listData?status=0&customer.customerId=' + userId).then(res => {
    //   console.log(res.data.list)
      this.list1 = res.data.list
    //   console.log(this.list1)
    }, res => {
      console.info('调用失败')
    })
    this.axios.get('/api/order/listData?status=2&customer.customerId=' + userId).then(res => {
    //   console.log(res.data.list)
      this.list2 = res.data.list
    }, res => {
      console.info('调用失败')
    })
    this.axios.get('/api/order/listData?status=3&customer.customerId=' + userId).then(res => {
      console.log(res.data.list)
      this.list3 = res.data.list
    }, res => {
      console.info('调用失败')
    })
  }
}
</script>

<style>
.el-tabs__nav-scroll {
    display: flex;
    justify-content: center;
}
.el-tabs__item.is-active{
    color: rgba(162, 162, 162, 1);
}
.el-tabs__item{
    padding: 0 .46rem;
}
.el-tabs__active-bar{
    background-color:  rgba(162, 162, 162, 1);
}
.tab{
    border-top: 2px solid #ccc
}
.tab-li-tit{
    display: flex;
    justify-content: space-between;
    padding: .25rem ;
}
.tab-li-con{
    display: flex;
    justify-content: space-between;
    padding: .2rem;
}
.list-img{
    height: 1.8rem;
    width: 1.8rem;
}
.tab-li-left{
    display: flex;
    line-height: .5rem;
}
.tab-li-msg{
    margin-left: .2rem;
}
.tab-li-right{
    line-height: .47rem;
    text-align: right;
}
.status{
    margin-top: .3rem;
}
.el-tabs__header{
    margin-bottom: .1rem;
}
.color{
    color: rgba(128, 128, 128, 1);
}
.watch{
    color: rgba(128, 128, 128, 1);
    border: 1px solid rgba(166, 166, 166, 1);
    line-height: .58rem;
    text-align: center;
    margin-top: .1rem;
    width: 22vw;
}
.number,.status{
    color: rgba(128, 128, 128, 1);
}
.tab-li{
    border-bottom: 2px solid #eee
}
.name{
    font-size: .3rem
}
</style>
