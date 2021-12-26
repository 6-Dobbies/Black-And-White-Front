<template>
  <div class="bawhead">
    <router-link to="/"><h1>정보 수정</h1></router-link>
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
