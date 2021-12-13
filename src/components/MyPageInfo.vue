<template>

<div class="bawbody">
  <!-- <form name="해당 폼의 이름" action="값을 보낼 주소" method="post 방식인지 get 방식인지"> -->
  <div class="mt-4">
    <router-link to="/"><legend>Black And White</legend></router-link>
  </div>
  <!-- <form @submit.prevent="formSubmit" action="" class="container h-100" method="post"> -->
  <form class="mpcontainer h-100">
    <fieldset> 
      <div class="form-group row">
        <label for="userName" class="form-label mt-4">이름</label>
        <input type="text" class="form-control" placeholder="이름을 입력해주세요." id="userName" v-model="userName" required>  
      </div>
      <p v-if="condition == true">
        <small>이름을 입력해주세요</small>
      </p>
      <!-- <small>{{nameValidation}}</small> -->


      <div class="form-group row">
        <label for="nickname" class="form-label mt-4">닉네임</label>
        <input type="text" class="form-control" placeholder="닉네임을 입력해주세요." id="nickname" v-model="nickname" required>  
      </div>

      <div class="form-group row">
        <label for="userId" class="form-label mt-4">아이디</label>
        <input type="text" class="form-control" placeholder="아이디를 입력해주세요." id="userId" v-model="userId" required>
      </div>

      <div class="form-group row">
        <label for="userPassword" class="form-label mt-4">비밀번호</label>
        <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요." id="userPassword" v-model="userPassword" required>
      </div>

      <div class="form-group row">
        <label for="userPasswordConfirm" class="form-label mt-4">비밀번호 확인</label>
        <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요." id="userPasswordConfirm" v-model="userPasswordConfirm" required>
      </div>

      <div class="form-group row">
        <label for="exampleSelect1" class="form-label mt-4">비밀번호 찾기 질문</label>
          <select class="form-select" id="exampleSelect1" required>
            <option>질문</option>
            <option>태어난 도시는 어디인가요?</option>
            <option>가장 기억에 남는 장소는 어디인가요?</option>
            <option>가장 감명 깊게 읽은 책은 무엇인가요?</option>
            <option>가장 행복했던 순간은 언제인가요?</option>
          </select>
      </div>

      <div class="form-group row">
        <label for="inputDefault" class="form-label mt-4">비밀번호 찾기 답변 </label>
        <input type="text" class="form-control" id="inputDefault" placeholder="질문에 대한 답을 입력해주세요." required>
      </div>

      <div class="form-group row">
        <label for="gender" class="form-label mt-4">성별</label>
          <select class="form-select" id="gender" required>
            <option>성별</option>
            <option>남자</option>
            <option>여자</option>
          </select>
      </div>

      <div class="form-group row">
        <label for="userMail" class="form-label mt-4">이메일</label>
        <input type="text" class="form-control" id="userMail" placeholder="example@naver.com" v-model="userMail" required>
        <p v-if="condition == true">
          <small>이메일을 올바르게 입력해주세요.</small>
        </p>
      </div>
      
      <div class="form-group row">
        <label for="userRegion" class="form-label mt-4">지역</label>
        <select class="form-select" id="userRegion" required>
          <option>지역</option>
          <option>서울</option>
          <option>부산</option>
        </select>
      </div>
     
      <div class="d-grid gap-2 mt-5" style="padding-top: 70px;">
        <button class="btn btn-lg btn-primary" type="button">가입하기</button>
      </div>
    </fieldset>  
  </form>

</div>

</template>

<script>
// import axios from 'axios';

export default {
  name: "MyPageInfo",
  data() {
    return {
      userName : "",
      nickname : "",
      userId : "",
      userPassword : "",
      userPasswordConfirm : "",
      userMail : "",
      condition : false,
    }
  },
  computed : {
    nameValidation() {
     return this.userName.length < 1 ? '이름을 입력하세요.' : '';
      
    }
  },
  watch : {
    userName(a) {
      if (a == "") {
        this.condition = true; 
        return false;
        // this.userName = "";
      } else {
        this.condition = false;
      }
    },
    userMail(a) {
      let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
      if (regEmail.test(a) === false) {
        this.condition = true;
        // this.userMail = "";
        return false;
      } else {
        this.condition = false;
      }
    }
  },
  props: {
  },
  methods : {
    formSubmit() {
      let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
        if (!regEmail.test(this.userMail) === false) {

          this.userMail = "";
          return false;
        }

        if (this.userPassword != this.userPasswordConfirm) {
          alert('비밀번호를 다르게 입력하였습니다.');
          return false;
        }
      }
    },  
    // userRegister() {
    //   axios.post('', )
    //   .then(() => {
        
    //   })
    //   .catch();
    // }
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
}

small {
  color: red;
}
label {
  padding-top: 10px;
}

</style>
