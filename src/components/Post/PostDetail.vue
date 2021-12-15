<template>
    <div>
        <form class="container h-100">
        <div class="form-group">
            <label class="col-form-label mt-4" for="inputDefault">Title</label>
            <input
                v-model="title"
                type="text"
                class="form-control"
                placeholder="제목을 입력하세요"
                id="inputDefault"
                readonly="readonly">           
        </div>
        <div class="form-group">
            <label for="exampleTextarea" class="col-form-label mt-4">Content</label>
            <textarea
                v-model="post.content" 
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
        </form>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:8079";

export default {
    name: 'PostDetail',
    data() {        
        return {
            post: "",                
        }
    },
    methods: {            
        getData() {
            axios.get('/posts/idx/' + this.$route.query.postIdx)
            .then(res => {
                this.post = res.data.data;                    
            })
            .catch(error => console.log(error));
        },
    },
    mounted() {
        this.getData();
    }        
}
</script>