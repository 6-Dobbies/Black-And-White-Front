<template>
  <div class="bawhead">
    <!-- <h6>{{name}}님, 환영합니다💜</h6> -->
    <br>
    <h1 style="color: #dee2e6">자유 게시판</h1>
    <hr class="bawline" style="height: 5px;">
  </div>
  <PostUpdatePage/>
</template>

<script>
// @ is an alias to /src
import PostUpdatePage from '@/components/Post/PostUpdatePage.vue'

export default {
  name: 'PostUpdate',
  components: {
    PostUpdatePage,
  },
  data() {
    return {
      name: ''
    }
  }
}
</script>
