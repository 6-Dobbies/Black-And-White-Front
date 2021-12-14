<template>

<button @click="testForm">버튼</button>

<div class="bawbody">
  <!-- <form name="해당 폼의 이름" action="값을 보낼 주소" method="post 방식인지 get 방식인지"> -->
  <div class="mt-4">
    <router-link to="/"><legend>Black And White</legend></router-link>
  </div>
  <!-- <form @submit.prevent="formSubmit" action="" class="container h-100" method="post"> -->
  <form @submit="submitForm" class="mpcontainer h-100">
    <!-- <div class="form-group row">
      <label for="userName" class="form-label mt-4">이름</label>
      <input type="text" class="form-control" placeholder="이름을 입력해주세요." id="userName" v-model="userName" required>
    <p v-if="condition[0] == true">
      <small>이름을 입력해주세요</small>
    </p>
    </div> -->


    <div class="form-group row">
      <label for="nickname" class="form-label mt-4">닉네임</label>
      <input type="text" class="form-control" placeholder="닉네임을 입력해주세요." name="nickname" v-model="form.nickname" required>
    <!-- <p v-if="condition[1] == true">
      <small>닉네임을 입력해주세요.</small>
    </p> -->
    </div>

    <div class="form-group row">
      <label for="memberId" class="form-label mt-4">아이디</label>
      <input type="text" class="form-control" placeholder="아이디를 입력해주세요." name="memberId" v-model="form.memberId" required>
    <!-- <p v-if="condition[2] == true">
      <small>중복된 아이디입니다.</small>
    </p> -->
    </div>

    <div class="form-group row">
      <label for="pw" class="form-label mt-4">비밀번호</label>
      <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요." name="pw" v-model="form.pw" required>
    <!-- <p v-if="condition[3] == true">
      <small>비밀번호를 입력해주세요</small>
    </p> -->
    </div>

    <div class="form-group row">
      <label for="birthYear" class="form-label mt-4">태어난 연도</label>
      <input type="text" class="form-control" placeholder="태어난 연도를 입력해주세요." name="birthYear" v-model="form.birthYear" required>
    </div>

    <div class="form-group row">
      <label for="tier" class="form-label mt-4">전적</label>
      <input type="text" class="form-control" placeholder="전적." name="tier" v-model="form.tier" required>
    </div>

    <!-- <div class="form-group row">
      <label for="userPasswordConfirm" class="form-label mt-4">비밀번호 확인</label>
      <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요." id="userPasswordConfirm" v-model="userPasswordConfirm" required>
    <p v-if="condition[4] == true">
      <small>비밀번호가 일치하지 않습니다.</small>
    </p>
    </div> -->

    <div class="form-group row">
      <label for="pwQuestion" class="form-label mt-4">비밀번호 찾기 질문</label>
        <select class="form-select" name="pwQuestion" v-model="form.pwQuestion" required>
          <option></option>
          <option>태어난 도시는 어디인가요?</option>
          <option>가장 기억에 남는 장소는 어디인가요?</option>
          <option>가장 감명 깊게 읽은 책은 무엇인가요?</option>
          <option>가장 행복했던 순간은 언제인가요?</option>
        </select>
      <!-- <p v-if="condition[5] == true">
      <small>질문을 선택해주세요.</small>
    </p> -->
    </div>

    <div class="form-group row">
      <label for="pwAnswer" class="form-label mt-4">비밀번호 찾기 답변 </label>
      <input type="text" class="form-control" placeholder="질문에 대한 답을 입력해주세요." name="pwAnswer" v-model="form.pwAnswer" required>
    </div>

    <div class="form-group row">
      <label for="gender" class="form-label mt-4">성별</label>
        <select class="form-select" name="gender" v-model="form.gender" required>
          <option>성별</option>
          <option>남자</option>
          <option>여자</option>
        </select>
    </div>

    <div class="form-group row">
      <label for="email" class="form-label mt-4">이메일</label>
      <input type="text" class="form-control" name="email" placeholder="example@naver.com" v-model="form.email" required>
      <!-- <p v-if="condition[5] == true">
        <small>이메일을 올바르게 입력해주세요.</small>
      </p> -->
    </div>
    
    <div class="form-group row">
      <label for="region" class="form-label mt-4">지역</label>
      <select class="form-select" name="region" v-model="form.region" required>
        <option>지역</option>
        <option>서울</option>
        <option>부산</option>
      </select>
    </div>
    
    <div class="d-grid gap-2 mt-5" style="padding-top: 70px;">
      <button class="btn btn-lg btn-primary" type="submit">가입하기</button>
    </div>
  </form>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: "MyPageInfo",
  data() {
    return {
      form : {
        memberId : "",
        pw : "",
        pwQuestion : "",
        pwAnswer : "",
        nickname : "",
        birthYear : "",
        gender : "",
        email : "",
        region : "",
        tier : "",
      },
      // userName : "",
      // userPasswordConfirm : "",
      // condition : [false,false,false,false,false,false],
      // // memberId : "",
      // pw : "",
      // pwQuestion : "",
      // pwAnswer : "",
      // nickname : "",
      // birthYear : "",
      // gender : "",
      // email : "",
      // region : "",
      // tier : "",
    }
  },
  watch : {
    // userName(a) {
    //     if (a == "") {
    //     this.condition[0] = true; 
    //     // this.userName = "";
    //   } else {
    //     this.condition[0] = false;
    //   }
    // },
    // nickname(a) {

    //   // if (a == "") {
    //   //   this.condition[1] = true;
    //   // } else {
    //   //   this.condition[1] = false;
    //   // }

    //   axios.get('http://localhost:80/members/all')
    //   .then(res => {
    //     res.data.list.forEach(item => this.data1.push(item))
    //     if (this.data1[0].nickname == a) {
    //       console.log('===============');
    //     } 
    //   })
    //     // if (a == res.data.list[0].nickname) {
    //     //  this.condition[1] = true;
    //     // } else {
    //     //   this.condition[1] = false;
    //     // } 
    //   .catch(error => console.log(error))
    // },
    // userId(a) {
    //   axios.get('http://localhost:80/members/all')
    //   .then(res => {
    //     let val = []; //eslint-disable-line no-unused-vars
    //     val = res.data.list;
    //     if (val.forEach(item => item.memberId == a)) {
    //      this.condition[2] = true;
    //     } else {
    //       this.condition[2] = false;
    //     } 
    //   })
    //   .catch(error => console.log(error))
      
    //   // if (a == "") {
    //   //   this.condition[2] = true;
    //   // } else {
    //   //   this.condition[2] = false;
    //   // }
    // },
    // userPassword(a) {
    //   if (a == "") {
    //     this.condition[3] = true;
    //   } else {
    //     this.condition[3] = false;
    //   }
    // },
    // userPasswordConfirm(a) {
    //    if (a != this.userPassword) {
    //     this.condition[4] = true;
    //   } else {
    //     this.condition[4] = false;
    //   }
    // },
    // passwordQue(a) {
    //    if (a == null) {
    //     this.condition[5] = true;
    //   } else {
    //     this.condition[5] = false;
    //   }
    // },


    // userMail(a) {
    //   let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    //   if (regEmail.test(a) === false) {
    //     this.condition[5] = true;
    //   } else {
    //     this.condition[5] = false;
    //   }
    // },

  },
  methods : {
    // submitForm() {
    //   axios.post("http://localhost:80/member", JSON.stringify(this.form))
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // },
    testForm() {
      console.log(JSON.stringify(this.form));
    },
    submitForm() {
      axios.post("http://localhost:80/member", JSON.stringify(this.form),
        { headers: { 'Content-Type': 'application/json' }})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    },
  
      // if (this.userId == ) {
        
      //   return false;
      // }

      // let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
      //   if (!regEmail.test(this.userMail) === false) {
      //     this.userMail = "";
      //     return false;
      //   }

      //   if (this.userPassword != this.userPasswordConfirm) {
      //     this.userPassword = "";
      //     this.userPasswordConfirm = "";
      //     return false;
      //   }

        // if (thi)
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
}

small {
  color: red;
}
label {
  padding-top: 10px;
}

</style>