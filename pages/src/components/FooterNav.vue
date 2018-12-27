<template>
  <div class="tabs">
    <!--命名路由-->
    <ul>
      <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not  be reported-->
      <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
      <router-link :to="{name:'Home'}" tag="li" exact>
        <div>
          <i class="icon iconfont">&#xe633;</i>
        </div>
        <div>首页</div>
      </router-link>
      <router-link :to="{name:'Cart'}" tag="li">
        <div>
          <i class="icon iconfont">&#xe601;</i>
        </div>
        <div>购物车</div>
      </router-link>
      <router-link :to="{name:'User'}" tag="li">
        <div>
          <i class="icon iconfont">&#xe61a;</i>
        </div>
        <div>我的</div>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FooterNav'
}
</script>

<style lang="less" type="text/less">
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
    width: 100%;
    z-index: 999;
    & > ul, & > ul > li {
      margin: 0;
      padding: 0;
    }
    ul {
      display: table;
      width: 100%;
      & > li {
        text-align: center;
        font-size: 16px;
        display: table-cell;
        padding: 8px 12px;
        color: #BFBFBF;
        cursor: pointer;
        &.router-link-active{
          color: #FF5733;
        }
        & > div {
          font-size: 14px;
          & > i {
            font-size: 30px;
          }
        }
      }
    }
  }
</style>
