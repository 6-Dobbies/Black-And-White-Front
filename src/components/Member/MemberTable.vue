<template>
    <div class="bawbody">
        <table class="table table-hover">           
            <thead>
                <tr class="table-primary">
                    <th style="min-width:50px;" scope="col">번호</th>
                    <th style="min-width:70px;" scope="col">아이디</th>
                    <th scope="col">닉네임</th>
                    <th scope="col">출생연도</th>
                    <th style="max-width:100px;" scope="col">이메일</th>
                    <th style="min-width:50px;" scope="col">성별</th>
                    <th style="min-width:70px;" scope="col">지역</th>
                    <th style="max-width:100px;" scope="col">전적</th>
                    <th scope="col">권한</th>
                    <th style="min-width:50px;" scope="col">탈퇴</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-dark" v-if="memberlist.length == 0">
                    <td colspan="10" style="text-align: center">회원이 없습니다.</td>
                </tr>
                <tr class="table-dark" v-for="member in memberlist" v-bind:key="member.memberIdx" @click="detail(member)">                    
                    <td style="min-width:50px;" v-text="member.memberIdx"></td>
                    <td style="min-width:70px;" v-text="member.memberId"></td>
                    <td v-text="member.nickname"></td>
                    <td v-text="member.birthYear"></td>
                    <td style="max-width:100px;" v-text="member.email"></td>
                    <td style="min-width:50px;" v-text="member.gender"></td>
                    <td style="min-width:70px;" v-text="member.region"></td>
                    <td style="max-width:100px;" v-text="member.tier"></td>
                    <td v-text="member.role"></td>
                    <td style="min-width:50px;" v-text="member.del"></td>
                </tr>
            </tbody>
        </table>

        <div class="bawpagination">        
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#">&laquo;</a>
                </li>
                <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">4</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">5</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>
        <!-- <router-link to="/boardwrite"><button type="button" class="btn btn-secondary">글쓰기</button></router-link> -->
        <button @click="write" class="btn btn-secondary">글쓰기</button>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:80";

export default {
    name: 'MemberTable',
    data() {
        return{
            memberlist: [],
        }
    },
    methods: {
        getData() {
            axios.get('/members/all')
            .then(res => {
                // res.data.list.forEach(item => console.log(item));
                // console.log(res.data.list);
                this.memberlist = res.data.list;
            })
            .catch(error => console.log(error));
        },
        detail(member) {
            this.$router.push({path : '/memberdetail', params : {memberIdx : member.memberIdx}});
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style>
td {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    /* min-width: 60px; */
}

th {
    text-align: center;
}
</style>