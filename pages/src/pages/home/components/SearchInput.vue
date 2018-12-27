<template>
    <div class="search-in">
        <div class="search">
            <i class="iconfont icon">&#xe631;</i>
            <input type="search" class="iconfont input" placeholder="智能科技">
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchInput'
}
</script>

<style lang="stylus" scoped>
.search-in
    line-height :.8rem
    background-color :#fff
    .search
        background-color :rgba(247, 247, 247, 1)
        border-radius 5px
        margin :8px 10px
        padding-left .35rem
        .input
            width 90%
            background-color :rgba(247, 247, 247, 1)
            font-size :.36rem
            color :#363636
        .icon
            color :#363636
            margin-right :.05rem
            font-size: .38rem
</style>
