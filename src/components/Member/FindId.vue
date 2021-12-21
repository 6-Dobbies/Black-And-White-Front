<template>
<div class="bawbody">
  <div class="mt-4">
    <router-link to="/"><legend>BLACK AND WHITE</legend></router-link>
    <h1 style="text-align: center">아이디 찾기</h1>
  </div>
  <form @submit="submitForm" class="mpcontainer h-100">
    <fieldset>
      <div class="form-group row">
        <label for="email" class="form-label mt-4">이메일</label>
        <input type="text" class="form-control" id="email" placeholder="example@naver.com" v-model="form.email" required>
      </div>

      <div class="form-group row">
        <label for="birthYear" class="form-label mt-4">출생연도</label>
        <input type="text" class="form-control" id="birthYear" placeholder="숫자 4자리를 입력하세요" v-model="form.birthYear" required>
      </div><br><br>
    
      <div class="d-grid gap-2">
        <button class="btn btn-lg btn-primary" @click="[submitForm(), this.$router.replace('/loginpage')]">아이디 찾기</button>
      </div>

      <div style="padding-top: 50px;">
        <div class="three">
            <router-link to="/loginpage"><button type="button" class="btn btn-primary three-button">로그인 하기</button></router-link>
            <router-link to="/findpassword"><button type="button" class="btn btn-primary three-button">비밀번호 찾기</button></router-link>
            <router-link to="/signuppage"><button type="button" class="btn btn-primary three-button">회원가입</button></router-link>
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
  name : 'FindId',
  data() {
    return {
      form : {
        email : "",
        birthYear : "",
      },
    }
  },
  methods : {
    submitForm() {
      axios.post("/members/find/memberid", JSON.stringify(this.form),
        { headers: { 'Content-Type': 'application/json' }})
      .then(res => {
        console.log(res.data);
        alert("회원님의 id는 " + res.data.data + "입니다:)");
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
    /* justify-content: center; */
    width: 500px;
}

legend {
  text-align: center;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  padding-top: 10px;
}

.three {
  display: flex;
  justify-content: space-between;
}

.three-button {
  width: 135px;
}

</style>
