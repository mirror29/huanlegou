<template>
    <div class="title">
        <img src="@/assets/user-img.jpg" alt="" class="title-img">
        <li class="title-text">
            <p v-if="login" class="name">{{name}}</p>
            <router-link :to="{name:'Login'}" v-else tag="p" class="name">
               登录
            </router-link>
            <p class="phone">{{phone}}</p>
        </li>
    </div>
</template>

<script>
export default {
  name: 'UserTitle',
  data () {
    return {
      login: false,
      name: '',
      phone: ''
    }
  },
  mounted () {
    let userInfo = JSON.parse(localStorage.userInfo)
    if (userInfo.phone !== '') {
      this.login = true
      this.name = userInfo.name
      this.phone = userInfo.phone
    }
    console.log(userInfo)
  }
}
</script>

<style lang="stylus" scoped>
.title
    display flex
    border-top 2px solid #ccc
    padding .6rem .5rem
    border-bottom 1px solid #eee
    .title-img
        height 1.5rem
        width 1.5rem
        border-radius 50%
    .title-text
        line-height .6rem
        margin-left .25rem
        margin-top .2rem
        .phone
            color rgba(128, 128, 128, 1)
            font-size .32rem
        .name
            font-size .36rem
</style>
