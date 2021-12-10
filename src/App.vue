<template>
  <Header/>
  <Footer/>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
#app {
  min-height: 100%;
  position: relative;
  background-color: #1a0933;
  padding-bottom: 200px;
}
</style>
