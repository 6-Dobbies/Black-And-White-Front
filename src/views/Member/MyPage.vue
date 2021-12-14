<template>
  <!-- <div class="home">
    <h1>{{name}}님, 환영합니다💜</h1>
    <MyPageInfo msg="메세지???"/>
  </div> -->
  <MyPageInfo msg="메세지???"/>

</template>



<script>
// @ is an alias to /src
import MyPageInfo from '@/components/Member/MyPageInfo.vue'

export default {
  name: 'MyPage',
  components: {
    MyPageInfo,
  },
  data() {
    return {
      name: '6Dobbies'
    }
  }
}
</script>


