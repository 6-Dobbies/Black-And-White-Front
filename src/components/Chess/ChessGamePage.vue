<template>
  <div class="bawbody">
    <div id="board1" style="width: 50px; margin-top : 100px"></div>
  </div>
</template>

<script>
import ChessBoard from "chessboardjs-vue";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:80";

export default {
  name : "ChessGamePage",
  mounted(){
    ChessBoard('board1',"start");
  }
}



</script>

<style>

</style>