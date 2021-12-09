<template>
  <form class="container h-100">
    <fieldset>
    <legend>BlackandWhite</legend>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">아이디</label>
        <div class="col-sm-8">
          <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="아이디를 입력해주세요.">
        </div>
      </div>

      <div class="form-group row">
        <label for="exampleInputPassword1" class="col-sm-4 col-form-label">비밀번호</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="비밀번호를 입력해주세요.">
        </div>
      </div>
    
      <div class="d-grid gap-2">
        <button class="btn btn-lg btn-primary" type="button">로그인</button>
      </div>

      <div class="container px-4">
        <div class="row justify-content-center row gx-4">
          <div class="col-4">
            <button type="button" class="btn btn-primary">비밀번호 찾기</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-primary">아이디 찾기</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-primary">회원가입</button>
          </div>
        </div>
      </div>  
    </fieldset>
  </form>
</template>

<script>
export default {
  name : 'LoginPage',
}
</script>

<style>

html,
body {
  height: 100%
  
}

div {
  margin-bottom: 5px;
}

.container {
    justify-content: center;
    width: 500px;
  margin-left: auto;
  margin-right: auto;   
  /* border:1px solid black; */

}

legend {
  text-align:center
}
</style>