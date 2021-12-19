<template>
<div class="bawbody">
  <form class="container h-100">
    <fieldset>
    <legend><h1>비밀번호 찾기</h1></legend>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">아이디</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="staticEmail" placeholder="아이디를 입력해주세요.">
        </div>
      </div><br>

      <div class="form-group row">
        <label for="exampleInputPassword1" class="col-sm-4 col-form-label">이메일</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="이메일을 입력해주세요.">
        </div>
      </div><br>

      <div class="form-group row">
      <label for="pwQuestion" class="col-sm-4 col-form-label">비밀번호 찾기 질문</label>
       <div class="col-sm-8"> 
        <select class="form-select" id="pwQuestion" v-model="pwQuestion" required>
          <option value="" disabled selected>질문을 선택해주세요.</option>
          <option>태어난 도시는 어디인가요?</option>
          <option>가장 기억에 남는 장소는 어디인가요?</option>
          <option>가장 감명 깊게 읽은 책은 무엇인가요?</option>
          <option>가장 행복했던 순간은 언제인가요?</option>
        </select>
       </div>
      <small v-if="condition2[3] == true">질문을 선택해주세요..</small>
      </div><br>

      <div class="form-group row">
        <label for="exampleInputPassword1" class="col-sm-4 col-form-label">본인확인질문</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="본인확인 답을 입력해주세요.">
        </div>
      </div><br>


    
      <div class="d-grid gap-2">
        <button class="btn btn-lg btn-primary" type="button">비밀번호찾기</button>
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
      condition : [false,false,false],
      condition2 : [false,false,false,false,false,false,false,false,false],
      memberId : "",
      pw : "",
      pwQuestion : "",
      pwAnswer : "",
      nickname : "",
      birthYear : "",
      gender : "",
      email : "",
      tier : "",
      region : "",
    }
  },

  watch : {
    nickname(a) {

      if (a == "") {
        this.condition2[0] = true;
      } else {
        this.condition2[0] = false;
      }  

      axios.post('/members/check/nickname',{
        nickname : a,
      })
      .then(res => {
        if (res.data == false) {
          this.condition[0] = true;
        } else {
          this.condition[0] = false;
        }
      })
      .catch(error => console.log(error));
    },

    memberId(a) {

      if (a == "") {
        this.condition2[1] = true;
      } else {
        this.condition2[1] = false;
      }  

      axios.post('/members/check/memberid', {
        memberId : a,
      })
      .then(res => {
        if (res.data == false) {
          this.condition[1] = true;
        } else {
          this.condition[1] = false;
        } 
      })
      .catch(error => console.log(error));
    },
    
    email(a) {

      let regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      
      if (a == "" || regEmail.test(a) == false) {
        this.condition2[7] = true;
      } else {
        this.condition2[7] = false;
      }

      axios.post('/members/check/email', {
        email : a,
      })
      .then(res => {
        console.log(res.data);
        if (res.data == false) {
          this.condition[2] = true;
        } else {
          this.condition[2] = false;
        }
      })
      .catch(error => console.log(error));
    },

    pw(a) {

      if (a == "") {
        this.condition2[2] = true;
      } else {
        this.condition2[2] = false;
      }
    },

    pwQuestion(a) {

      if (a == "") {
        this.condition2[3] = true;
      } else {
        this.condition2[3] = false;
      }
    },

    pwAnswer(a) {

      if (a == "") {
        this.condition2[4] = true;
      } else {
        this.condition2[4] = false;
      }
    },

    birthYear(a) {

      if (a == "") {
        this.condition2[5] = true;
      } else {
        this.condition2[5] = false;
      }
    },

    gender(a) {

      if (a == "") {
        this.condition2[6] = true;
      } else {
        this.condition2[6] = false;
      }
    },

    region(a) {

      if (a == "") {
        this.condition2[8] = true;
      } else {
        this.condition2[8] = false;
      }
    }
  },

  methods : {
    submitForm() {
      
      axios.post("/member",{
        data : 
          {
            memberId : this.memberId,
            pw : this.pw,
            pwQuestion : this.pwQuestion,
            pwAnswer : this.pwAnswer,
            nickname : this.nickname,
            birthYear : this.birthYear,
            gender : this.gender,
            email : this.email,
            region : this.region,
            tier : this.tier
          },
          "success": true,
          "code": 0,
          "message": "성공"
        })
      .then(res => {
        console.log(res.data);
        alert("회원가입이 완료되었습니다.");
        this.$router.push('/');
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
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







