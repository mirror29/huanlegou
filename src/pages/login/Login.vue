<template>
    <div>
        <header-title :headTitle='headTitle'></header-title>
        <div class="container">
            <div class="input">
                <p>账户</p>
                <input type="number" placeholder="手机号" class="number" v-model="phonenumber">
            </div>
            <div class="input">
                <p>登录密码</p>
                <input type="password" placeholder="请输入密码" class="number" v-model="password">
            </div>

            <p class="login" @click="loginIn">登录</p>

            <li class="foot">
                <router-link :to="{name:'Register'}" tag="p">
                    新用户注册
                </router-link>
                <!-- <router-link :to="{name:'Forget'}" tag="p">
                    忘记密码？
                </router-link> -->
            </li>

        </div>
    </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'Login',
  data () {
    return {
      headTitle: '登录',
      phonenumber: '',
      password: ''
    }
  },
  components: {
    HeaderTitle
  },
  methods: {
    loginIn () {
      let postData = this.qs.stringify({
        phone: this.phonenumber,
        password: this.password
      })
      this.axios({
        method: 'post',
        url: '/api/customer/login',
        data: postData
      })
        .then(res => {
          console.log(res)
          if (res.data.result === 'true') {
            localStorage.setItem('userInfo', JSON.stringify(res.data.data))
            this.$router.push('/')
          } else {
            alert(res.data.message)
          }
        }, res => {
          console.info('调用失败')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
    border-top 2px solid #ccc
    padding .4rem .3rem
    .input
        display flex
        justify-content space-between
        border 1px solid #eee
        padding .2rem
        margin-bottom .15rem
        p
            margin-top .08rem
            font-size .3rem
        .number
            width 65vw
    .login
        color #ffffff
        background-color rgba(255, 87, 51, 1)
        width 90vw
        text-align center
        line-height .85rem
        margin-top .4rem
        font-size .32rem
        border-radius 5px
    .foot
        display flex
        justify-content space-between
        margin-top .3rem
</style>
