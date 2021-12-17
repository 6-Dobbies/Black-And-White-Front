<template>
  <div class="bawhead">
    <router-link to="/"><h1>BLACK  AND  WHITE</h1></router-link>
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
h1 {
  text-decoration: none;
}
</style>