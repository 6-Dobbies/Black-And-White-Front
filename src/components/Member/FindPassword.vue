<template>
<div class="bawbody">
  <div class="mt-4">
    <router-link to="/"><legend>BLACK AND WHITE</legend></router-link>
    <h1 style="text-align: center">비밀번호 찾기</h1>
  </div>
  <form @submit.prevent="submitForm" class="container h-100">
    <fieldset>
      <div class="form-group row">
        <label for="memberId" class="col-sm-4 col-form-label">아이디</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="memberId" placeholder="아이디를 입력해주세요" v-model="form.memberId" required>
        </div>
        <!-- <small v-if="condition[0] == true">아이디를 입력해주세요..</small> -->
      </div><br>

      <div class="form-group row">
      <label for="pwQuestion" class="col-sm-4 col-form-label">비밀번호 찾기 질문</label>
       <div class="col-sm-8"> 
        <select class="form-select" id="pwQuestion" v-model="form.pwQuestion" required>
          <option value="" disabled selected>질문을 선택해주세요.</option>
          <option>태어난 도시는 어디인가요?</option>
          <option>가장 기억에 남는 장소는 어디인가요?</option>
          <option>가장 감명 깊게 읽은 책은 무엇인가요?</option>
          <option>가장 행복했던 순간은 언제인가요?</option>
        </select>
       </div>
       <!-- <small v-if="condition[1] == true">질문을 선택해주세요..</small> -->
      </div><br>

      <div class="form-group row">
        <label for="pwAnswer" class="col-sm-4 col-form-label">비밀번호 찾기 답변</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="pwAnswer" placeholder="답을 입력해주세요" v-model="form.pwAnswer" required>
        </div>
      <!-- <small v-if="condition[2] == true">답을 입력해주세요..</small> -->
      </div><br>
    
      <div class="d-grid gap-2">
        <button class="btn btn-lg btn-primary" @click="[submitForm(), this.$router.replace('/loginpage')]">비밀번호찾기</button>
      </div><br>

      <div class="container px-5">
        <div class="row justify-content-center row gx-5">
          <div class="col-4">
            <router-link to="/loginpage"><button type="button" class="btn btn-primary" style="padding: 6px 21px">로그인 하기</button></router-link>
          </div>
          <div class="col-4">
            <router-link to="/findid"><button type="button" class="btn btn-primary" style="padding: 6px 21px">아이디 찾기</button></router-link>
          </div>
          <div class="col-4">
            <router-link to="/signuppage"><button type="button" class="btn btn-primary" style="padding: 6px 41px">회원가입</button></router-link>
          </div>
        </div>
      </div>
    </fieldset>
  </form>
</div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:80";

export default {
  name: "FindPassword",
  data() {
    return {
      // condition : [false,false,false,false,false,false,false,false,false],
      form : {
        memberId : "",
        pwQuestion : "",
        pwAnswer : "",
      },
    }
  },

  // watch : {
  //   memberId(a) {
  //     if (a == "") {
  //       this.condition[0] = true;
  //     } else {
  //       this.condition[0] = false;
  //     }
  //   },

  //   pwQuestion(a) {
  //     if (a == "") {
  //       this.condition[1] = true;
  //     } else {
  //       this.condition[1] = false;
  //     }
  //   },

  //   pwAnswer(a) {
  //     if (a == "") {
  //       this.condition[2] = true;
  //     } else {
  //       this.condition[2] = false;
  //     }
  //   },
  // },

  methods : {
    submitForm() {
      if(doubleSubmitCheck()) return;
      axios.patch("/email", JSON.stringify(this.form),
        { headers: { 'Content-Type': 'application/json' }})
      .then(res => {
        console.log(res.data);
        alert(res.data.data);
        this.$router.go();
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
}

var doubleSubmitFlag = false;
function doubleSubmitCheck(){
    if(doubleSubmitFlag){
        return doubleSubmitFlag;
    }else{
        doubleSubmitFlag = true;
        return false;
    }
}
</script>

<style>

.mpdiv {
  margin-bottom: 10px;
}

.mpcontainer {
    width: 500px;
}

legend {
  text-align: center;
  font-size: 40px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}

label {
  padding-top: 10px;
}

small {
  color : red;
}

select option[value=""][disabled] {
	display: none;
}

</style>







