<template>
    <div>
        <header-title :headTitle='headTitle'></header-title>
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <p class="title">发货时间？</p>
                </template>
                <div class="container">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <p class="title">更改密码</p>
                </template>
                <div class="container">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'Help',
  data () {
    return {
      headTitle: '帮助',
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  },
  components: {
    HeaderTitle
  }
}
</script>

<style lang="stylus" scoped>
.title
    font-size .36rem
    padding 0 .3rem
.container
    font-size .28rem
    padding 0 .4rem
</style>
