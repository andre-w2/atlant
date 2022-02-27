<template>
  <nav-bar />
  <router-view />
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'MvcApp',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style src="@/assets/css/bootstrap.min.css"></style>
