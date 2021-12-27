<template>
  <div class="bawhead">
    <router-link to="/"><h1>회원 정보</h1></router-link>
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
