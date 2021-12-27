<template>
  <div class="bawhead">
    <router-link to="/"><h1>마이 페이지</h1></router-link>
  </div>
  <MypageInfo />
</template>

<script>
import MypageInfo from '@/components/Member/MypageInfo.vue';

export default {
  name : 'Mypage',
  components : {
    MypageInfo,
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>