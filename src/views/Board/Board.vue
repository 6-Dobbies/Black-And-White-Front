<template>
  <div class="bawhead">
    <h6>{{name}}님, 환영합니다💜</h6>
    <br>
    <h1 style="color: #dee2e6">자유 게시판</h1>
    <hr class="bawline" style="height: 5px;">
  </div>
  <div class="bawbody">
    <BoardTable msg="메세지???"/>
  </div>
</template>



<script>
// @ is an alias to /src
import BoardTable from '@/components/Board/BoardTable.vue'

export default {
  name: 'Board',
  components: {
    BoardTable
  },
  data() {
    return {
      name: '6Dobbies'
    }
  }
}
</script>
