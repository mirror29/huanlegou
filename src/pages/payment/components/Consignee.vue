<template>
    <div class="container" @click="toAddress">
        <div class="left">
            <p class="title">{{user}}</p>
            <p class="address">收货地址：{{address}}</p>
        </div>
        <div class="right">
            <img src="@/assets/to.png" alt="" class="to">
        </div>
    </div>
</template>

<script>
export default{
  name: 'Consignee',
  props: {
    user: String
  },
  data () {
    return {
      address: ''
    }
  },
  methods: {
    toAddress () {
      this.$prompt('请输入收货地址', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        center: true
      }).then(({ value }) => {
        this.address = value
        this.$emit('myAddress', value)
      }).catch(() => {
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
    display flex
    justify-content space-between
    padding .32rem .2rem
    border-top 3px solid #ccc
    border-bottom  .18rem solid #eee
    .left
        .title
            font-size .34rem
        .address
          color #ccc
          margin-top .2rem
          line-height .3rem
    .right
        margin-top .22rem
        .to
          height .36rem
</style>

<style>
.el-message-box{
    width: 6rem;
}
</style>
