<template>
  <div class="bawbody">
    <div id="myBoard" class="small-board" style="width: 50%; margin-top: 100px"></div>
    <button id="showPositionBtn" @click="clickShowPositionBtn">위치</button>
  </div>
</template>

<script>
import ChessBoard from "chessboardjs-vue";
import axios from "axios";
axios.defaults.baseURL = "http://ec2-13-125-131-254.ap-northeast-2.compute.amazonaws.com";

export default {
  name: "ChessGamePage",
  data() {
    return {
      config: {
        draggable: true,
        dropOffBoard: "snapback", // this is the default
        position: "start",
      },
      board : "",
    };
  },
  mounted() {
    this.board = ChessBoard("myBoard", this.config);
    
  },
  methods: {
    clickShowPositionBtn() {
      console.log(this.board);
      console.log("Current position as an Object:");
      console.log(this.board.position());

      console.log("Current position as a FEN string:");
      console.log(this.board.fen());
    },
  },
};
</script>

<style></style>
