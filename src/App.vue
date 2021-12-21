<template>
  <header>
      <div class="bs-docs-section clearfix">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
            <router-link to="/" style="text-decoration: none;"><a class="navbar-brand">Black And White</a></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
                <router-link to="/" style="text-decoration: none;">
                  <li class="nav-item"><a class="nav-link active">Home<span class="visually-hidden">(current)</span></a></li>
                </router-link>

                <li class="nav-item dropdown">
                <a class="nav-link  active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Board</a>
                <div class="dropdown-menu">
                  <router-link to="/board" style="text-decoration: none;"><a class="dropdown-item">자유 게시판</a></router-link>
                  <router-link to="/board" style="text-decoration: none;"><a class="dropdown-item">공략 게시판</a></router-link>
                </div>
                </li>
                
                <li class="nav-item dropdown">
                <a class="nav-link  active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Game</a>
                <div class="dropdown-menu">
                  <router-link to="/chessgamepage" style="text-decoration: none;"><a class="dropdown-item">♟ Chess</a></router-link>
                  <a class="dropdown-item">🃏 Card</a>
                </div>
                </li>

                <router-link to="/membertable" style="text-decoration: none;">
                  <li class="nav-item"><a class="nav-link active">MemberAll</a></li>
                </router-link>
            </ul>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary" v-if="isToken" v-show="isToken == true" @click="[logout(), this.$router.push('/')]">로그아웃</button>
                <router-link to="/loginpage" v-else><button type="button" class="btn btn-secondary" v-show="isToken == false">로그인</button></router-link>
                <router-link to="/signuppage"><button type="button" class="btn btn-secondary">회원가입</button></router-link>
              </div>
            </div>
            </div>
            </nav>
          </div>
        </div>
      </div>
  </header>
  <!-- <button @click="getData">테스트</button>
  <button @click="getDel">테스트(manager)</button> -->
  <BAWFooter/>
  <router-view/>  
</template>

<script>
import BAWFooter from './components/common/BAWFooter.vue';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:80";

export default {
  name: "App",
  components: {
    BAWFooter
  },
  methods: {
    logout() {
        localStorage.removeItem("token");
        this.$router.go();
    }
    // getData() {
    //   axios.get('/members/all')
    //   .then(res => {
    //     res.data.list.forEach(item => console.log(item))
    //     // const data = res.data
    //     // this.products = data
    //   })
    //   .catch(error => console.log(error))
    // },
    // getDel() {
    //   axios.get('/posts/del')
    //   .then(res => {
    //     res.data.list.forEach(item => console.log(item))
    //     // const data = res.data
    //     // this.products = data
    //   })
    //   .catch(error => console.log(error))
    // },
  },
  computed : {
		isToken() {
      if(localStorage.getItem("token")) {
        return true;
      }else {
        return false;
      }
		}
	}
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
