<template>

<div class="bawbody">
  <!-- <form name="해당 폼의 이름" action="값을 보낼 주소" method="post 방식인지 get 방식인지"> -->
  <form class="mpcontainer h-100">
    <fieldset>
      <legend><h1>회원가입</h1></legend>
      <div class="form-group row">
        <label for="inputDefault" class="form-label mt-4">이름</label>
        <input type="text" class="form-control" placeholder="이름을 입력해주세요." id="inputDefault">  
      </div>

      <div class="form-group row">
        <label for="inputDefault" class="form-label mt-4">닉네임</label>
        <input type="text" class="form-control" placeholder="닉네임을 입력해주세요." id="inputDefault">  
      </div>

      <div class="form-group row">
        <label for="inputDefault" class="form-label mt-4">아이디</label>
        <input type="text" class="form-control" id="inputDefault" placeholder="아이디를 입력해주세요.">
      </div>

      <div class="form-group row">
        <label for="inputDefault" class="form-label mt-4">비밀번호</label>
        <input type="text" class="form-control" id="inputDefault" placeholder="비밀번호를 입력해주세요.">
      </div>

      <div class="form-group row">
        <label for="inputDefault" class="form-label mt-4">비밀번호 확인</label>
        <input type="text" class="form-control" id="inputDefault" placeholder="비밀번호를 입력해주세요.">
      </div>

      <div class="form-group row">
        <label for="exampleSelect1" class="form-label mt-4">비밀번호 찾기 질문</label>
          <select class="form-select" id="exampleSelect1">
            <option>선택</option>
            <option>태어난 도시는 어디인가요?</option>
            <option>가장 기억에 남는 장소는 어디인가요?</option>
            <option>가장 감명 깊게 읽은 책은 무엇인가요?</option>
            <option>가장 행복했던 순간은 언제인가요?</option>
          </select>
      </div>

      <div class="form-group row">
        <label for="inputDefault" class="form-label mt-4">비밀번호 찾기 답변 </label>
        <input type="text" class="form-control" id="inputDefault" placeholder="질문에 대한 답을 입력해주세요.">
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="form-label mt-4">성별</label>
          <select class="form-select" id="staticEmail">
            <option>성별</option>
            <option>남자</option>
            <option>여자</option>
          </select>
      </div>

      <div class="form-group row">
        <label for="staticEmail" class="form-label mt-4">이메일</label>
        <input type="text" class="form-control" id="staticEmail" placeholder="example@naver.com">
      </div>
      
      <div class="form-group row">
        <label for="staticEmail" class="form-label mt-4">지역</label>
        <select class="form-select" id="staticEmail">
          <option>시</option>
          <option>서울</option>
          <option>부산</option>
        </select>
      </div>
     
      <div class="d-grid gap-2" style="padding-top: 70px;">
        <button class="btn btn-lg btn-primary" type="button">가입하기</button>
      </div>
    </fieldset>  
  </form>

</div>

</template>

<script>
export default {
  name: "SignupPage",
  props: {
    msg: String,
  },
};
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
}

label {
  padding-top: 10px;
}

</style>
