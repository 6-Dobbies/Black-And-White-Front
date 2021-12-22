<template>
    <div class="bawbody">
        <table class="bawtable" v-if="member.memberIdx">
            <tr>
                <th scope="row">번호</th>
                <input class="form-control" id="memberIdx" type="text" :placeholder="member.memberIdx" readonly="">
            </tr>
            <tr>
                <th scope="row">아이디</th>
                <input class="form-control" id="memberId" type="text" :placeholder="member.memberId" readonly="">
            </tr>
            <tr>
                <th scope="row">닉네임</th>
                <input class="form-control" id="nickname" type="text" :placeholder="member.nickname" readonly="">
            </tr>
            <tr>
                <th scope="row">이메일</th>
                <input class="form-control" id="email" type="text" :placeholder="member.email" readonly="">
            </tr>
            <tr>
                <th scope="row">출생연도</th>
                <input class="form-control" id="birthYear" type="text" :placeholder="member.birthYear" readonly="">
            </tr>
            <tr>
                <th scope="row">성별</th>
                <input class="form-control" id="gender" type="text" :placeholder="member.gender" readonly="">
            </tr>
            <tr>
                <th scope="row">지역</th>
                <input class="form-control" id="region" type="text" :placeholder="member.region" readonly="">
            </tr>
            <tr>
                <th scope="row">전적</th>
                <input class="form-control" id="tier" type="text" :placeholder="member.tier" readonly="">
            </tr>
            <tr>
                <th scope="row">권한</th>
                <input class="form-control" id="role" type="text" :placeholder="member.role[0]" readonly="">
            </tr>
            <tr>
                <th scope="row">탈퇴</th>
                <input class="form-control" id="del" type="text" :placeholder="member.del" readonly="">
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
axios.defaults.baseURL="http://localhost:8079";

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
            })
        },
        modify(member) {
          this.$router.push({path : '/memberupdatepage', query : {memberIdx : member.memberIdx}});
        },
    }
}
</script>

<style>

input {
  margin : 10px;
  /* cursor: not-allowed; */
}

th {
  padding : 10px;
}

</style>