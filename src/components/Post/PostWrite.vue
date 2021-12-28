<template>
    <div class="bawbody">
        <form class="container h-100" @submit.prevent="submitForm">          
          <div class="card border-primary mb-3">
            <div class="card-body">
                <input                
                v-model="title"
                type="text"
                class="form-control"
                placeholder="제목을 입력하세요"
                id="inputDefault">
                <textarea
                v-model="content" 
                type="text" 
                class="form-control bawtextarea" 
                placeholder="내용을 입력하세요" 
                id="exampleTextarea" 
                rows="10">
                </textarea>
            </div>    
          </div>                  
          <div class="form-group">
            <label for="formFile" class="col-form-label mt-4">Picture</label>
            <input class="form-control" type="file" accept="image/jpeg" id="formFile">
          </div>
          <div class="filebox">
            <input class="upload-name" placeholder="사진 1장을 선택해주세요">
            <label for="file">Search</label>
            <input type="file" id="file">
          </div>        
            
          <div style="padding-top: 50px;">
            <div class="three">
                <router-link to="/"><button type="button" class="btn btn-primary three-button">작성</button></router-link>
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
    name: 'PostWrite',
    data() {        
        return { 
            category: "",
            writer: "",
            title: "",
            content: "",
            postImage: ""
        };
    },    
    methods: {        
        submitForm() {
          axios
            .post("/post/",{
            data: {
              category: "",
              writer: "",
              title: this.title,
              content: this.content,
              postImage: ""            
          },
          "success": true,
          "code": 0,
          "message": "성공",
        })
        .then(res => {
          console.log(res.data);
          alert("작성이 완료되었습니다.");
          this.$router.push('/board');
        })
        .catch(err => {
          console.log(err);
        });
    },        
  },
};
</script>