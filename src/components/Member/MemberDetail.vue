<template>
    <div class="bawbody">
        <table class="bawtable" v-if="member.memberIdx">
            <tr>
                <th scope="row">번호</th>
                <input class="form-control mdinput" id="memberIdx" type="text" :placeholder="member.memberIdx" readonly="">
            </tr>
            <tr>
                <th scope="row">아이디</th>
                <input class="form-control mdinput" id="memberId" type="text" :placeholder="member.memberId" readonly="">
            </tr>
            <tr>
                <th scope="row">닉네임</th>
                <input class="form-control mdinput" id="nickname" type="text" :placeholder="member.nickname" readonly="">
            </tr>
            <tr>
                <th scope="row">이메일</th>
                <input class="form-control mdinput" id="email" type="text" :placeholder="member.email" readonly="">
            </tr>
            <tr>
                <th scope="row">출생연도</th>
                <input class="form-control mdinput" id="birthYear" type="text" :placeholder="member.birthYear" readonly="">
            </tr>
            <tr>
                <th scope="row">성별</th>
                <input class="form-control mdinput" id="gender" type="text" :placeholder="member.gender" readonly="">
            </tr>
            <tr>
                <th scope="row">지역</th>
                <input class="form-control mdinput" id="region" type="text" :placeholder="member.region" readonly="">
            </tr>
            <tr>
                <th scope="row">전적</th>
                <input class="form-control mdinput" id="tier" type="text" :placeholder="member.tier.win + '승 ' + member.tier.draw + '무 ' + member.tier.loss + '패 (' + member.tier.play + '판)'" readonly="">
            </tr>
            <tr>
                <th scope="row">권한</th>
                <input class="form-control mdinput" id="role" type="text" :placeholder="member.role[0]" readonly="">
            </tr>
            <tr>
                <th scope="row">탈퇴</th>
                <input class="form-control mdinput" id="del" type="text" :placeholder="member.del" readonly="">
            </tr>
        </table>
        <br><br>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-secondary" @click="modify(member)">수정</button>
        <button @click="deleted" class="btn btn-secondary">삭제</button>
        <router-link to="/membertable"><button @click="list" class="btn btn-secondary">목록</button></router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://ec2-13-125-131-254.ap-northeast-2.compute.amazonaws.com";

export default {
    name: 'MemberDetail',
    data() {
        return {
            member : "",
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios.get('/members/idx/' + this.$route.query.memberIdx)
            .then(res => {
                this.member = res.data.data;
                console.log(res.data);
                console.log(this.member.memberIdx);
            })
            .catch(error => console.log(error));
        },
        deleted() {
            axios.patch('/members/' + this.$route.query.memberIdx)
            .then(res => {
                this.member = res.data.data;
                this.$router.push('/membertable');
            })
        },
        modify(member) {
          this.$router.push({path : '/memberupdatepage', query : {memberIdx : member.memberIdx}});
        },
    }
}
</script>

<style scoped>

.mdinput {
  margin : 10px;
  pointer-events: none;
  /* cursor: not-allowed; */
}

th {
  padding : 10px;
}

input::placeholder {
  color: white;
}

</style>