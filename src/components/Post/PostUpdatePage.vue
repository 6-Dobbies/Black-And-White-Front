<template>
    <div class="bawbody">
        <form class="container h-100" @submit.prevent="updateForm" autocomplete="off">
        <div class="card border-primary mb-3">
            <div class="card-header">자유게시판 상세</div>
            <div class="card-body">                
                <input class="form-control" v-model="title">
                <textarea class="form-control bawtextarea" v-model="content"></textarea>
            </div>
        </div>

        <div style="padding-top: 50px;">
            <div class="three">
                <router-link to="/"><button type="button" class="btn btn-primary three-button">수정</button></router-link>
                <router-link to="/"><button type="button" class="btn btn-primary three-button">삭제</button></router-link>
                <router-link to="/board"><button type="button" class="btn btn-primary three-button">목록</button></router-link>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:8079";

export default {
    name: 'PostUpdatePage',
    data() {        
        return {
            post: "",
            title: "",
            content: "",
            postImage: ""                
        }
    },
    created() {
        this.getData();
    },
    methods: { 
      getData() {
          axios
            .get("/posts/idx/" + this.$route.query.postIdx)
            .then(res => {
                this.post = res.data.data;
                console.log(res.data.data);
            })
            .catch(err => console.log(err));
      },           
      updateForm() {
          axios
            .put('/posts/' + this.post.postIdx, {
              data: {
                post: "",
                title: this.title,
                content: this.content,
                postImage: ""
              },
              "success": true,
              "code": 0,
              "message":"성공",
            })
            .then(res => {
                console.log(res.data);
                alert("수정이 완료되었습니다.");
                this.$route.push('/board');                    
            })
            .catch(error => console.log(error));
        },       
    },    
    mounted() {
        this.getData();
    },
}
</script>

<style>
.bawtextarea {
    resize: none;
    height: 300px;
    margin-top: 5px;
}

.three {
  display: flex;
  justify-content: space-between;
}

.three-button {
  min-width: 140px;
}

</style>