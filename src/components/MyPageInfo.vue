<template>

<div class="bawbody">
  <!-- <form name="해당 폼의 이름" action="값을 보낼 주소" method="post 방식인지 get 방식인지"> -->
  <form class="container h-100">
    <fieldset>
      <legend>회원가입</legend>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">이름</label>
        <div class="col-sm-8">
          <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="이름을 입력해주세요.">
        </div>
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">닉네임</label>
        <div class="col-sm-8">
          <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="닉네임을 입력해주세요.">
        </div>
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">아이디</label>
        <div class="col-sm-8">
          <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="아이디를 입력해주세요.">
        </div>
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">비밀번호</label>
        <div class="col-sm-8">
          <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="비밀번호를 입력해주세요.">
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">비밀번호 확인</label>
        <div class="col-sm-8">
          <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="비밀번호를 입력해주세요.">
        </div>
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">비밀번호 찾기 질문</label>
          <select class="form-select w-50 col-sm-5" id="staticEmail">
            <option></option>
            <option>태어난 도시는 어디인가요?</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">비밀번호 찾기 답변 </label>
        <div class="col-sm-8">
          <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="질문에 대한 답을 입력해주세요.">
        </div>
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">성별</label>
          <select class="form-select w-50 col-sm-6" id="staticEmail">
            <option></option>
            <option>남자</option>
            <option>여자</option>
          </select>
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">이메일</label>
        <div class="col-sm-6">
          <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="example@naver.com">
        </div>
      </div>
      
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">지역</label>
          <select class="form-select w-25 col-sm-6" id="staticEmail">
            <option></option>
            <option>서울</option>
            <option>부산</option>
          </select>
      </div>
      <div class="container px-5">
        <div class="row justify-content-center row gx-4">
          <div class="col-4">
            <button type="submit" class="btn btn-primary">가입하기</button>
          </div>
          <div class="col-4">
            <button type="submit" class="btn btn-primary">취소하기</button>
          </div>
        </div>
      </div>  
    </fieldset>  
  </form> 

</div>

</template>

<script>
export default {
  name: "MyPageInfo",
  props: {
    msg: String,
  },
};
</script>
