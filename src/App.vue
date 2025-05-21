<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>




<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>

