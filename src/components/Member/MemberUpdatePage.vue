<template>
  <form @submit.prevent="submitForm" autocomplete="off">
    <div class="bawbody">
      <table class="bawtable" v-if="member.memberIdx">
        <tr>
          <th scope="row">아이디</th>
          <input class="form-control noclick" id="memberId" type="text" :placeholder="member.memberId" style="background: transparent" readonly="">
        </tr>
        <tr>
          <th scope="row">비밀번호</th>
          <input class="form-control" id="pw" type="password" placeholder="새 비밀번호를 입력하세요" v-model="pw" required/>
          <small v-if="condition2[2] == true">비밀번호를 입력해주세요 :(</small>
        </tr>
        <tr>
          <th scope="row">닉네임</th>
          <input class="form-control noclick" id="nickname" type="text" :placeholder="member.nickname" style="background: transparent" readonly="">
        </tr>
        <tr>
          <th scope="row">이메일</th>
          <input class="form-control" id="email" type="text" :placeholder="member.email" v-model="email" required>
          <small v-if="condition == true">이미 사용 중인 이메일입니다 :(</small>
          <small v-if="condition2[0] == true">올바른 양식을 입력해주세요 :(</small>
        </tr>
        <tr>
          <th scope="row">출생연도</th>
          <input class="form-control noclick" id="birthYear" type="text" :placeholder="member.birthYear" style="background: transparent" readonly="">
        </tr>
        <tr>
          <th scope="row">성별</th>
          <input class="form-control noclick" id="gender" type="text" :placeholder="member.gender" style="background: transparent" readonly="">
        </tr>
        <tr>
          <th scope="row">지역</th>
          <select class="form-select" id="region" v-model="region" required>
            <option value="" selected>지역을 선택해주세요</option>
            <option value='강원'>강원</option>
            <option value='경기'>경기</option>
            <option value='경남'>경남</option>
            <option value='경북'>경북</option>
            <option value='광주'>광주</option>
            <option value='대구'>대구</option>
            <option value='대전'>대전</option>
            <option value='부산'>부산</option>
            <option value='서울'>서울</option>
            <option value='울산'>울산</option>
            <option value='인천'>인천</option>
            <option value='전남'>전남</option>
            <option value='전북'>전북</option>
            <option value='제주'>제주</option>
            <option value='충남'>충남</option>
            <option value='충북'>충북</option>
          </select>
          <small v-if="condition2[1] == true">지역을 선택해주세요 :(</small>
        </tr>
        <tr>
          <th scope="row">전적</th>
          <input class="form-control noclick" id="tier" type="text" :placeholder="member.tier.win + '승 ' + member.tier.draw + '무 ' + member.tier.loss + '패 (' + member.tier.play + '판)'" style="background: transparent"  readonly="">
        </tr>
      </table>
      <br /><br />
      <div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-secondary" type="submit">완료</button>
        <router-link to="/membertable"><button class="btn btn-secondary">취소</button></router-link>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://ec2-13-125-131-254.ap-northeast-2.compute.amazonaws.com";

export default {
  name: "MemberUpdatePage",
  data() {
    return {
      member: "",
      condition: false,
      condition2: [false, false, false],
      pw: "",
      email: "",
      region: "",
    };
  },
	created() {
    this.getData();
  },
  watch: {
    email(a) {
      let regEmail =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

      if (a == "" || regEmail.test(a) == false) {
        this.condition2[0] = true;
      } else {
        this.condition2[0] = false;
      }

      axios
        .post("/members/check/email", {
          email: a,
        })
        .then(res => {
          console.log(res.data);
          if (res.data == false) {
            this.condition = true;
          } else {
            this.condition = false;
          }
        })
        .catch(err => console.log(err));
    },
    region(a) {
      if (a == "") {
        this.condition2[1] = true;
      } else {
        this.condition2[1] = false;
      }
    },
    pw(a) {
      if (a == "") {
        this.condition2[2] = true;
      } else {
        this.condition2[2] = false;
      }
    },
  },
  methods: {
    getData() {
      axios
        .get("/members/idx/" + this.$route.query.memberIdx)
        .then(res => {
          this.member = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => console.log(err));
    },
    submitForm() {
      axios
        .put("/members/" + this.member.memberIdx, {
          data: {
            pw: this.pw,
            email: this.email,
            region: this.region,
          },
          "success": true,
          "code": 0,
          "message": "성공",
        })
        .then(res => {
          console.log(res.data);
          alert("변경이 완료되었습니다.");
          this.$router.push('/');
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
input select {
  margin: 10px;
  background-color: transparent;
}

th {
  padding: 10px;
}

small {
  color: red;
  margin-left: 10px;
}

select option[value=""] [selected] {
  display: none;
}

.noclick {
  pointer-events: none;
  margin-left: -10px;
}

/* td { 
    text-align: left;
} */
</style>
