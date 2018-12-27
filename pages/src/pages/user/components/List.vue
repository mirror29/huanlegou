<template>
    <div>
        <router-link :to="{name: 'Order'}" tag="li" class="list">
            <p class="text"><span class="iconfont">&#xe667;</span>我的订单</p>
            <img src="@/assets/to.png" alt="" class="list-to">
        </router-link>

        <el-collapse accordion class="coll">
            <el-collapse-item >
                <template slot="title">
                    <p class="coll-text">
                        <span class="iconfont coll-icon">&#xe628;</span>
                        我的收货地址
                    </p>
                </template>
                <div class="address">收货地址：北京市朝阳区xxxxxxxxxxxxxxxxxxxxxxxxxxxA座2025室</div>
            </el-collapse-item>
            <el-collapse-item >
                <template slot="title">
                    <p class="coll-text">
                        <span class="iconfont coll-icon">&#xe620;</span>
                        我的邀请码
                    </p>
                </template>
                <div class="invitation">
                    <img :src="urln + userInfo.qrCode" alt="" class="invitation-img">
                    <li class="invitation-li">
                        <p class="invitation-text">{{userInfo.inviteCode}}</p>
                        <p class="invitation-btn">点击分享</p>
                    </li>
                </div>
            </el-collapse-item>
        </el-collapse>

        <!-- <router-link :to="{name: 'Order'}" tag="li" class="list border-bottom"> -->
        <router-link :to="{name: 'Phone'}" tag="li" class="list">
            <p class="text"><span class="iconfont">&#xe632;</span>联系我们</p>
            <img src="@/assets/to.png" alt="" class="list-to">
        </router-link>
        <!-- </router-link> -->

        <router-link :to="{name: 'Help'}" tag="li" class="list">
            <p class="text"><span class="iconfont">&#xe6bc;</span>帮助</p>
            <img src="@/assets/to.png" alt="" class="list-to">
        </router-link>

        <router-link :to="{name:'Login'}" tag="p" class="login">
            切换账户
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      activeNames: ['1'],
      userInfo: '',
      urln: 'http://192.168.31.6:8890'
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    phoneCall () {
      window.location.href = 'tel://' + '13888888888'
    }
  },
  mounted () {
    this.userInfo = JSON.parse(localStorage.userInfo)
  }
}
</script>

<style lang="stylus" scoped>
.list
    display flex
    padding .35rem .4rem
    justify-content space-between
    border-bottom 1px solid #eee
    .list-to
        margin-top .1rem
        height .19rem
        width .19rem
    .text
        font-size .36rem
        span
            font-size .4rem
            margin-right  .1rem
            color rgba(191, 191, 191, 1)
.el-collapse-item__arrow
    margin-right 0
.coll
    padding 0 .22rem 0 .4rem
    .address
        font-size .3rem
    .el-icon-arrow-right:before
       height .28rem
    .coll-text
        font-size .36rem
        .coll-icon
            font-size .4rem
            color rgba(191, 191, 191, 1)
.invitation
    display flex
    padding-left .5rem
    .invitation-img
        height 1.6rem
        width  1.6rem
    .invitation-li
        margin-left .25rem
        .invitation-text
            font-size .36rem
        .invitation-btn
            width 30vw
            line-height .6rem
            text-align center
            background-color rgba(255, 87, 51, 1)
            color #fff
            margin-top .15rem
.login
    color #ffffff
    background-color rgba(255, 87, 51, 1)
    line-height .90rem
    text-align center
    margin .4rem .8rem
    font-size .32rem
    border-radius 5px
    display flex
    justify-content center
</style>
