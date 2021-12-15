<template>
    <div class="bawbody">
        MemberDetail 페이지 테스트
        <!-- <form class="container h-100">
        <div class="form-group">
            <label class="col-form-label mt-4" for="inputDefault">Title</label>
            <input
                v-model="data.title"
                type="text"
                class="form-control"
                placeholder="제목을 입력하세요"
                id="inputDefault"
                readonly="readonly">
            
        </div>
        <div class="form-group">
            <label for="exampleTextarea" class="col-form-label mt-4">Content</label>
            <textarea
                v-model="data.content" 
                class="form-control"
                placeholder="내용을 입력하세요"
                id="exampleTextarea"
                rows="10"
                readonly="readonly">
            </textarea>
            
        </div>
        
        <br><br>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button @click="modified" class="btn btn-secondary">수정</button>
        <button @click="deleted" class="btn btn-secondary">삭제</button>
        <button @click="list" class="btn btn-secondary">목록</button>
        </div>
        </form> -->
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:80";

export default {
    name: 'BoardDetail',
    data() {
        return{
            member: "",
        }
    },
    methods: {
        getData() {
            axios.get('/members/idx/' + this.route.query.memberIdx)
            .then(res => {
                // res.data.list.forEach(item => console.log(item));
                // console.log(res.data.list);
                this.member = res.data;
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