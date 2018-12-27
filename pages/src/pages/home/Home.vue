<template>
    <div>
        <home-header></home-header>
        <search-input></search-input>
        <list></list>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import SearchInput from './components/SearchInput'
import List from './components/List'
import FooterNav from '@/components/FooterNav'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    HomeHeader,
    SearchInput,
    List,
    FooterNav
  },
  beforeCreate () {
    let session = localStorage.getItem('userInfo')
    // console.log(session)
    if (session === null) {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
