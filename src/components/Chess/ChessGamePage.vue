/* eslint-disable no-unused-vars */
<template>
  <div class="bawbody">
  
    <div id="myBoard" class="small-board" style="width: 40%; margin-top: 100px"></div>
    
    <fieldset class="form-group">
      <div class="form-group row" style="margin-top : 20px">
        <label for="customRange3" class="form-label" style="text-align : center">난이도</label>
        <div class="col-sm-12" >
          <input type="range" class="form-range" min="1" max="4" step="1" id="customRange3" v-model="difficulty">
        </div>
      </div>
    </fieldset>

    <div class="container px-4" style="margin-top : 20px">
      <div class="row justify-content-center">
        <div class="col-3 justify-content-right" style="padding-left : 110px">
          <button type="button" class="btn btn-secondary btn-lg" style="width : 135.86px; margin-bottom : 15px;" @click="testBtn2">AI 찬스</button>
        </div>
        <div class="col-3 ">
          <button type="button" class="btn btn-info btn-lg" @click="testBtn3">새로운 게임</button>
        </div>
      </div>
    </div>    
     <div class="form-group" style="margin-top : 20px">
      <input class="form-control" type="file" id="formFile" @change="uploadImage">
    </div>
  </div>
</template>

<script>
import ChessBoard from "chessboardjs-vue";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

export default {
  name: "ChessGamePage",
  data() {
    return {
      config: {
        draggable: true,
        position: "start",
        onDrop : this.onDrop,
        // sparePieces : true,
      },
      board : "",
      difficulty : 3,
    };
  },

  mounted() {
    this.board = ChessBoard("myBoard", this.config);
  },

  methods: {
    uploadImage() {   
      let file = document.getElementById('formFile');
     
        let fileList = file.files;
        
        let reader = new FileReader();
    
        reader.readAsDataURL(fileList[0]);

        let result = "";
        let fenImage = "";

        reader.onload = function  (event) {

          result = event.target.result;
          
          axios.post('/uploadimage', {
            image : result         
          })
          .then(res => {
            fenImage = res.data.split(' ')[0]; 
          })
          .catch( err => console.log(err));
        }
          this.board.position(fenImage);
    },

    onDrop(source, target, piece ) {
      console.log('Source: ' + source + target)
      console.log('Target: ' + target)
      console.log('Piece: ' + piece)

      let order = source + target;
      
      axios.post("/move", {
          order : order,
          dif : Number(this.difficulty)
      })
      .then(res => {
        console.log(res);
        if (res.data == "BLACK" || res.data == "WHITE") {
          alert(res.data + res.statusText);
          axios.post("/game", {
          // option : "move",
          // order : "c5c6",
          // notation : [],
          dif : this.difficulty
          })
          .then(res => {
            console.log(res);
            this.board.position(res.data.split(' ')[0]);
          })
          .catch(err => {
            console.log(err);
          });
        } else {
          this.board.position(res.statusText.split(' ')[0]);
          if (res.statusText.split(' ')[6] == "check") {
            alert("check");
          } 
        }
      })
      .catch(err => {
        console.log(err);
      });
      axios.post("/get", {
        option : "get",
        dif : this.difficulty
      })
      .then(res => {
        console.log(res.data.split(' ')[0]);
        this.board.position(res.data.split(' ')[0]);
      })
      .catch(err => {
        console.log(err);
      });
    },

    testBtn() {
      axios.post("/setgametest", {
          // option : "move",
        rawboard : "r1bqkb1r/pppppppp/2n2n2/8/8/2N2N2/PPPPPPPP/R1BQKB1R",
        dif : this.difficulty
      })
      .then(res => {
        console.log(res);
        this.board.position(res.data.split(' ')[0]);
      })
      .catch(err => {
        console.log(err);
      });
    },

    testBtn2() {
      axios.post("/aimove", {
          // option : "move",
          // order : "c5c6",
          // notation : [],
        dif : Number(this.difficulty)
      })
      .then(res => {
         if (res.data == "BLACK" || res.data == "WHITE") {
          alert(res.data + res.statusText);
          axios.post("/game", {
          // option : "move",
          // order : "c5c6",
          // notation : [],
          dif : Number(this.difficulty)
          })
          .then(res => {
            console.log(res);
            this.board.position(res.data.split(' ')[0]);
          })
          .catch(err => {
            console.log(err);
          });
        } else {
          this.board.position(res.statusText.split(' ')[0]);
          if (res.statusText.split(' ')[6] == "check") {
            alert("check");
          } 
        }
      })
      .catch(err => {
        console.log(err);
      });
    },

    testBtn3() {
      axios.post("/game", {
          // option : "move",
          // order : "c5c6",
          // notation : [],
        dif : Number(this.difficulty)
      })
      .then(res => {
        console.log(res);
        this.board.position(res.data.split(' ')[0]);
      })
      .catch(err => {
        console.log(err);
      });
    },
  }
};

</script>

<style>

</style>
