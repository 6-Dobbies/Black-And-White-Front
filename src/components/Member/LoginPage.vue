<template>
<div class="bawbody">
  <div class="mt-4">
    <router-link to="/"><legend>BLACK AND WHITE</legend></router-link>
  </div>
  <form @submit="submitForm" class="mpcontainer h-100">
    <fieldset>
      <div class="form-group row">
        <label for="memberId" class="form-label mt-4">아이디</label>
        <input type="text" class="form-control" placeholder="아이디를 입력해주세요." id="memberId" v-model="form.memberId" required>
      </div>

      <div class="form-group row">
        <label for="pw" class="form-label mt-4">비밀번호</label>
        <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요." id="pw" v-model="form.pw" required>
      </div>
    
      <div class="d-grid gap-2">
        <button class="btn btn-lg btn-primary" type="submit">로그인</button>
      </div>

      <div class="container px-4" style="padding-top: 50px;">
        <div class="row justify-content-center row gx-4">
          <div class="col-4">
            <router-link to="/findpassword"><button type="button" class="btn btn-primary">비밀번호 찾기</button></router-link>
          </div>
          <div class="col-4">
            <router-link to="/findid"><button type="button" class="btn btn-primary">아이디 찾기</button></router-link>
          </div>
          <div class="col-4">
            <router-link to="/signuppage"><button type="button" class="btn btn-primary">회원가입</button></router-link>
          </div>
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
      axios.post("/members/login", JSON.stringify(this.form),
        { headers: { 'Content-Type': 'application/json' }})
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.data);
        this.$router.push('/');
        this.$forceUpdate();
        // window.location.reload();
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

</style>
