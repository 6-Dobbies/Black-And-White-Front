<template>
  <div class="bawhead">
    <h6>{{name}}님, 환영합니다💜</h6>
    <br>
    <h1 style="color: #dee2e6">자유 게시판</h1>
    <hr class="bawline" style="height: 5px;">
  </div>
  <div>
    <PostWrite post="글글글"/>
  </div>
</template>



<script>
// @ is an alias to /src
import PostWrite from '@/components/Post/PostWrite.vue'

export default {
  name: 'PostWriter',
  components: {
    PostWrite,
  },
  data() {
    return {
      name: '6Dobbies'
    }
  }
}
</script>
