<template>
    <div class="bawbody">
        <table class="table table-hover bawtable" v-if="member.memberIdx">
            <tr>
                <th scope="row">번호</th>
                <td v-text="member.memberIdx"></td>
            </tr>
            <tr>
                <th scope="row">아이디</th>
                <td v-text="member.memberId"></td>
            </tr>
            <tr>
                <th scope="row">닉네임</th>
                <td v-text="member.nickname"></td>
            </tr>
            <tr>
                <th scope="row">이메일</th>
                <td v-text="member.email"></td>
            </tr>
            <tr>
                <th scope="row">출생연도</th>
                <td v-text="member.birthYear"></td>
            </tr>
            <tr>
                <th scope="row">성별</th>
                <td v-text="member.gender"></td>
            </tr>
            <tr>
                <th scope="row">지역</th>
                <td v-text="member.region"></td>
            </tr>
            <tr>
                <th scope="row">전적</th>
                <td v-text="member.tier"></td>
            </tr>
            <tr>
                <th scope="row">권한</th>
                <td v-text="member.role[0]"></td>
            </tr>
            <tr>
                <th scope="row">탈퇴</th>
                <td v-text="member.del"></td>
            </tr>
        </table>
        <br><br>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button @click="modified" class="btn btn-secondary">수정</button>
        <button @click="deleted" class="btn btn-secondary">삭제</button>
        <button @click="list" class="btn btn-secondary">목록</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:80";

export default {
    name: 'BoardDetail',
    data() {
        return {
            member: "",
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
                // res.data.list.forEach(item => console.log(item));
                // console.log(res.data.list);
                // console.log(res);
            })
            .catch(error => console.log(error));
        },
        deleted() {
            axios.patch('/members/' + this.$route.query.memberIdx)
            .then(res => {
                this.member = res.data.data;
            })
        }
    }
    //  data() {
    //     const index = this.$route.params.valueIndex
    //     return {
    //         data: data[index],
    //         index: index,
    //     }
    // },
    // methods: {            
    //     deleted() {
    //         data.splice(this.index, 1)
    //         this.$router.push({
    //             path: '/board'
    //         })
    //     },
    //     modified() {
    //         this.$router.push({
    //             name: 'BoardWrite',
    //             params: {
    //                 valueIndex: this.index
    //             }
    //         })
    //     },
    //     list(){
    //         this.$router.push({
    //             path: '/board' 
    //         })                
    //     }
    // }
}
</script>

<style>
.bawtable {
    margin-left: 30%;
}

th {
    max-width: 100px;
    height: 50px;
    text-align: center;
}

td {
    max-width: 200px;
    height: 50px;
    text-align: left;
}

</style>