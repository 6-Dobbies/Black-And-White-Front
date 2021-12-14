<template>
  <div class="bawhead">
    <router-link to="/"><legend>Black And White</legend></router-link>
  </div>
  <MemberTable />
</template>

<script>
import MemberTable from '@/components/MemberTable.vue';

export default {
  name : 'Member',
  components : {
    MemberTable,
  }
}
</script>
