<template>
  <Header/>
  <div id="nav" style="color: #3cf281">
    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/board">Board</router-link> |
    <router-link to="/myPageInfo">회원가입</router-link> |
    <router-link to="/login">로그인</router-link> |
  </div>
  <Footer/>
  <router-view/>
</template>

<style>

</style>
