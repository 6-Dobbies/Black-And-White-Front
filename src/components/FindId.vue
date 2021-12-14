<template>
<div class="bawbody">
  <form class="container h-100">
    <fieldset>
    <legend><h1>아이디 찾기</h1></legend>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">이름</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="staticEmail" placeholder="이름을 입력해주세요.">
        </div>
      </div>

      <div class="form-group row">
        <label for="exampleInputPassword1" class="col-sm-4 col-form-label">성별</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="성별을 입력해주세요.">
        </div>
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">이메일</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="staticEmail" placeholder="이메일을 입력해주세요.">
        </div>
      </div>
    
      <div class="d-grid gap-2">
        <button class="btn btn-lg btn-primary" type="button">아이디 찾기</button>
      </div>

      <div class="container px-4">
        <div class="row justify-content-center row gx-4">
          <div class="col-4">
            <router-link to="/loginpage"><button type="button" class="btn btn-primary">로그인 하기</button></router-link>
          </div>
          <div class="col-4">
            <router-link to="/findpassword"><button type="button" class="btn btn-primary">비밀번호 찾기</button></router-link>
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
export default {
  name : 'FindId',
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
