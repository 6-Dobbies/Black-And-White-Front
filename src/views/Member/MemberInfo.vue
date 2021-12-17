<template>
  <div class="bawhead">
    <router-link to="/"><h1>마이 페이지</h1></router-link>
  </div>
  <MemberDetail />
</template>

<script>
import MemberDetail from '@/components/Member/MemberDetail.vue';

export default {
  name : 'MemberInfo',
  components : {
    MemberDetail,
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>