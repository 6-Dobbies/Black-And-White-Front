<template>
    <div class="bawbody">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">아이디</th>
                    <th scope="col">닉네임</th>
                    <th scope="col">출생연도</th>
                    <th scope="col">이메일</th>
                    <th scope="col">성별</th>
                    <th scope="col">지역</th>
                    <th scope="col">전적</th>
                    <th scope="col">권한</th>
                    <th scope="col">탈퇴</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td v-text="member.memberIdx"></td>
                    <td v-text="member.memberId"></td>
                    <td v-text="member.nickname"></td>
                    <td v-text="member.birthYear"></td>
                    <td v-text="member.email"></td>
                    <td v-text="member.gender"></td>
                    <td v-text="member.region"></td>
                    <td v-text="member.tier"></td>
                    <td v-text="member.role"></td>
                    <td v-text="member.del"></td>
                </tr>
            </tbody>
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
axios.defaults.baseURL="http://localhost:8079";

export default {
    name: 'BoardDetail',
    data() {
        return{
            member: "",
        }
    },
    methods: {
        getData() {
            axios.get('/members/idx/' + this.$route.query.memberIdx)
            .then(res => {
                // res.data.list.forEach(item => console.log(item));
                // console.log(res.data.list);
                this.member = res.data.data;
                console.log(res);
            })
            .catch(error => console.log(error));
        },
    },
    mounted() {
        this.getData();
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
table {
    display:flex;
    display: -webkit-box;
    display: -ms-flexbox;
    overflow-x: auto;
    overflow-y: hidden;
}

tbody {
    display:flex;
}

th,td {
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>