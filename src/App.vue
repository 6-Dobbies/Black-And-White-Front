<template>
  <Header/>
  <button @click="getData">테스트</button>
  <button @click="getDel">테스트(manager)</button>
  <router-link to="/membertable"><button>회원 전체</button></router-link>
  <Footer/>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:80";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {
    getData() {
      axios.get('/members/all')
      .then(res => {
        res.data.list.forEach(item => console.log(item))
        // const data = res.data
        // this.products = data
      })
      .catch(error => console.log(error))
    },
    getDel() {
      axios.get('/posts/del')
      .then(res => {
        res.data.list.forEach(item => console.log(item))
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
