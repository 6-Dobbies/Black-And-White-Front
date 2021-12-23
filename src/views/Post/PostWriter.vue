<template>
  <div class="bawhead">
    <br>
    <h1 style="color: #dee2e6">자유 게시판</h1>
    <hr class="bawline" style="height: 5px;">
  </div>
  <PostWrite/>
</template>

<script>
// @ is an alias to /src
import PostWrite from '@/components/Post/PostWrite.vue'

export default {
  name: 'PostWriter',
  components: {
    PostWrite,
  }
}
</script>
