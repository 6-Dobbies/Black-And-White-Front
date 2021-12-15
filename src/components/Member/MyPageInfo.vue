<template>

<button @click="testButton">버튼</button>

<div class="bawbody">
  <div class="mt-4">
    <router-link to="/"><legend>Black And White</legend></router-link>
  </div>
  <form @submit="submitForm" class="mpcontainer h-100">
    <div class="form-group row">
      <label for="nickname" class="form-label mt-4">닉네임</label>
      <input type="text" class="form-control" placeholder="닉네임을 입력해주세요." id="nickname" v-model="nickname" required>
      <small v-if="condition == true">중복 아이디입니다..</small>
    </div>

    <div class="form-group row">
      <label for="memberId" class="form-label mt-4">아이디</label>
      <input type="text" class="form-control" placeholder="아이디를 입력해주세요." id="memberId" v-model="memberId" required>
    <!-- <p v-if="condition[2] == true">
      <small>중복된 아이디입니다.</small>
    </p> -->
    </div>

    <div class="form-group row">
      <label for="pw" class="form-label mt-4">비밀번호</label>
      <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요." id="pw" v-model="pw" required>
    <!-- <p v-if="condition[3] == true">
      <small>비밀번호를 입력해주세요</small>
    </p> -->
    </div>

    <div class="form-group row">
      <label for="birthYear" class="form-label mt-4">태어난 연도</label>
      <input type="text" class="form-control" placeholder="태어난 연도를 입력해주세요." id="birthYear" v-model="birthYear" required>
    </div>

    <div class="form-group row">
      <label for="tier" class="form-label mt-4">전적</label>
      <input type="text" class="form-control" placeholder="전적." id="tier" v-model="tier" required>
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
        <select class="form-select" id="pwQuestion" v-model="pwQuestion" required>
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
      <input type="text" class="form-control" placeholder="질문에 대한 답을 입력해주세요." id="pwAnswer" v-model="pwAnswer" required>
    </div>

    <div class="form-group row">
      <label for="gender" class="form-label mt-4">성별</label>
        <select class="form-select" id="gender" v-model="gender" required>
          <option>성별</option>
          <option>남자</option>
          <option>여자</option>
        </select>
    </div>

    <div class="form-group row">
      <label for="email" class="form-label mt-4">이메일</label>
      <input type="text" class="form-control" id="email" placeholder="example@naver.com" v-model="email" required>
      <!-- <p v-if="condition[5] == true">
        <small>이메일을 올바르게 입력해주세요.</small>
      </p> -->
    </div>
    
    <div class="form-group row">
      <label for="region" class="form-label mt-4">지역</label>
      <select class="form-select" id="region" v-model="region" required>
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
axios.defaults.baseURL="http://localhost:80";
export default {
  name: "MyPageInfo",
  data() {
    return {
      condition : false,
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
    }
  },
  watch : {
    nickname(a) {
      // if (a == "") {
      //   this.condition[1] = true;
      // } else {
      //   this.condition[1] = false;
      // }
      console.log(a);
      axios.get(`/members/nickname/${a}`)
      .then(res => {
        if (res.status == 200) {
          this.condition = true;
        } else {
          this.condition = false;
        }
          console.log(res);
        // if (this.data1[0].nickname == a) {
        //   console.log('===============');
        // } 
      })
        // if (a == res.data.list[0].nickname) {
        //  this.condition[1] = true;
        // } else {
        //   this.condition[1] = false;
        // } 
    //   .catch(error => console.log(error))
    },
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
          }
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
    testButton() {
      axios.get(`/members/nickname/${this.nickname}`)
      .then(res => {
        if (res.status == 200) {
          alert("중복아이디입니다.");
        } 
        console.log(res);
      })
    }
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