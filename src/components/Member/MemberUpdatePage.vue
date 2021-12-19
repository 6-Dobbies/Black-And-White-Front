<template>
<form>
    <div class="bawbody">
            <table class="bawtable" v-if="member.memberIdx">
                <tr>
                    <th scope="row">번호</th>
                    <td v-text="member.memberIdx"></td>
                </tr>
                <tr>
                    <th scope="row">아이디</th>
                    <td v-text="member.memberId"></td>
                </tr>
                <tr>
                    <th scope="row">비밀번호</th>
                    <input class="form-control" id="pw" type="password" placeholder="변경할 비밀번호를 입력해주세요." v-model="pw" autocomplete="off">
                </tr>
                <tr>
                    <th scope="row">닉네임</th>
                    <td v-text="member.nickname"></td>
                </tr>
                <tr>
                    <th scope="row">이메일</th>
                    <input class="form-control" id="email" type="text" :placeholder="member.email" v-model="email" autocomplete="off">
                    <small v-if="condition == true">이미 사용 중인 이메일입니다..</small>
                    <small v-if="condition2 == true">올바른 양식을 입력해주세요..</small>
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
                    <!-- <input class="form-control" id="region" type="text" :placeholder="member.region" v-model="region" autocomplete="off" required> -->
                    <select class="form-select" id="region" v-model="region">
                        <!-- <option value="" selected>{{member.region}}</option> -->
                        <option value="" selected>{{member.region}}</option>
                        <option>서울특별시</option>
                        <option>부산광역시</option>
                        <option>인천광역시</option>
                        <option>경기도</option>
                    </select>
                    <!-- <small v-if="condition2[8] == true">지역을 선택해주세요..</small> -->
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
        <button class="btn btn-secondary" type="submit" @click="update">완료</button>
        <router-link to="/"><button class="btn btn-secondary">취소</button></router-link>
        </div>
    </div>
</form> 
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:80";

export default {
    name: 'MemberUpdatePage',
    data() {
        return{
            member: "",
            condition : false,
            condition2 : false,
            pw : "",
            email : "",
            region : "",
        }
    },
    watch : {
        email(a) {
            
            let regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      
            if (a == "" || regEmail.test(a) == false) {
                this.condition2 = true;
            } else {
                this.condition2 = false;
            }

            axios.post('/members/check/email', {
                email : a,
            })
            .then(res => {
                console.log(res.data);
                if (res.data == false) {
                this.condition = true;
                } else {
                this.condition = false;
                }
            })
            .catch(error => console.log(error));
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

        update() {
            axios.put('/members/' + this.$route.query.memberIdx , {
                data : {
                    pw : this.pw,
                    email : this.email,
                    region : this.region,
                },
                "success": true,
                "code": 0,
                "message": "성공"
            }) 
            .then(res => {
                console.log(res.data);
                alert("변경이 완료되었습니다.");
                this.$router.push('/');
            })
            .catch(err => {
             console.log(err);
            })
        },
    },
    created() {
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
input {
  margin : 10px;
}

th {
  padding : 10px;
}

small {
    color: red;
}

select option[value=""] {
	display: none;
}

td { 
    text-align: left;
}

</style>