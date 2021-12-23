<template>
  <div class="bawhead">
    <br>
    <h1 style="color: #dee2e6">자유 게시판</h1>
    <hr class="bawline" style="height: 5px;">
  </div>
  <PostDetail/>
</template>

<script>
// @ is an alias to /src
import PostDetail from '@/components/Post/PostDetail.vue'

export default {
  name: 'BoardClick',
  components: {
    PostDetail,
  }
}
</script>
