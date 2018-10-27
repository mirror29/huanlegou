<template>
    <div>
        <home-header></home-header>
        <user-title></user-title>
        <user-list></user-list>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
import HomeHeader from './components/Header'
import UserTitle from './components/Title'
import UserList from './components/List'

export default {
  name: 'User',
  components: {
    FooterNav,
    HomeHeader,
    UserTitle,
    UserList
  }
}
</script>
