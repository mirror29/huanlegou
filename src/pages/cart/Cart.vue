<template>
    <div>
      <header-title :headTitle='headTitle'></header-title>
      <list></list>
      <footer-nav></footer-nav>
    </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
import HeaderTitle from '@/components/HeaderTitle'
import List from '@/pages/cart/components/List'
export default {
  name: 'Cart',
  data () {
    return {
      headTitle: '购物车'
    }
  },
  components: {
    FooterNav,
    HeaderTitle,
    List
  }
}
</script>
