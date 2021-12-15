<template>
  <div class="bawhead">
    <router-link to="/"><h1>BLACK  AND  WHITE</h1></router-link>
  </div>
  <MemberTable />
</template>

<script>
import MemberTable from '@/components/Member/MemberTable.vue';

export default {
  name : 'Member',
  components : {
    MemberTable,
  }
}
</script>

<style>
h1 {
  text-decoration: none;
}
</style>