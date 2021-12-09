<template>
<div>
  <div class="bawhead">
    <img alt="Chessboard" src="../assets/chess-background.jpg" style="width:100%">
  </div>
  <div class="home bawbody">
    <HelloWorld msg="♟Welcome to Black And White♟"/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, 
  }
}
</script>
