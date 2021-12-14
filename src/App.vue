<template>
  <Header/>
  <button @click="getData">테스트</button>
  <Footer/>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {
    getData() {
      axios.get('http://localhost:8079/members/all')
      .then(res => {
        res.data.list.forEach(item => console.log(item.memberId))
        // const data = res.data
        // this.products = data
      })
      .catch(error => console.log(error))
    }
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
