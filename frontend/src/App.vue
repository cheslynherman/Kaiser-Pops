<template>
  <NavBar/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import FooterComp from './components/FooterComp.vue'
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar,
    FooterComp
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap');
#app {
  font-family: 'Sedgwick Ave Display', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #272829;
}

::-webkit-scrollbar {
  display: none;
}

body {
  background-color: #FFDD83;
}

</style>
