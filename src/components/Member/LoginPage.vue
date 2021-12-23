<template>
<div class="bawbody">
  <div class="mt-4">
    <router-link to="/"><legend>BLACK AND WHITE</legend></router-link>
    <h1 style="text-align: center">로그인</h1>
  </div>
  <form @submit.prevent="submitForm" class="mpcontainer h-100">
    <fieldset>
      <div class="form-group row">
        <label for="memberId" class="form-label mt-4">아이디</label>
        <input type="text" class="form-control" placeholder="아이디를 입력해주세요." id="memberId" v-model="form.memberId" required>
      </div>

      <div class="form-group row">
        <label for="pw" class="form-label mt-4">비밀번호</label>
        <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요." id="pw" v-model="form.pw" required>
      </div><br><br>
    
      <div class="d-grid gap-2">
        <button class="btn btn-lg btn-primary" @click="[submitForm(), this.$router.replace('/')]">로그인</button>
      </div>

      <div style="padding-top: 50px;">
        <div class="three">
            <router-link to="/findpassword"><button type="button" class="btn btn-primary three-button">비밀번호 찾기</button></router-link>
            <router-link to="/findid"><button type="button" class="btn btn-primary three-button">아이디 찾기</button></router-link>
            <router-link to="/signuppage"><button type="button" class="btn btn-primary three-button">회원가입</button></router-link>
        </div>
      </div>
    </fieldset>
  </form>
</div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:8079";

export default {
  name : 'LoginPage',
  data() {
    return {
      form : {
        memberId : "",
        pw : "",
      },
    }
  },
  methods : {
    submitForm() {
      axios.post('/members/login', JSON.stringify(this.form),
        { headers: { 'Content-Type': 'application/json' }})
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('idx', res.data.data.memberIdx);
        localStorage.setItem('ismanager', res.data.data.ismanager);
        this.$router.go();
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
}
</script>

<style scoped>

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
