<template>
  <div class="bawhead">
    <router-link to="/"><h1>마이 페이지</h1></router-link>
  </div>
  <MemberUpdatePage />
</template>

<script>
import MemberUpdatePage from '@/components/Member/MemberUpdatePage.vue';

export default {
  name : "MemberUpdate",
  components : {
    MemberUpdatePage,
  }
}
</script>

<style>

</style>