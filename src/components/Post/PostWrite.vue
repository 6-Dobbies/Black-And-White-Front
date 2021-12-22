<template>
    <div class="bawbody">
        <form class="container h-100">
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
                class="form-control" 
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

import data from '@/data'

export default {
    name: 'BoardWrite',
    data() {
        const index = this.$route.params.valueIndex;
        return {
            data: data,
            index: index,
            title: index !== undefined ? data[index].title : "",
            content: index !== undefined ? data[index].content : ""
        }
    },
    methods: {
        write() {
            this.data.push({
                title: this.title,
                content: this.content,
            })
            this.$router.push({
                path: '/board'
            })
        },
        modified() {
            data[this.index].title = this.title
            data[this.index].content = this.content
            this.$router.push({
                path: '/board'
            })
        },
        cancel(){
            this.$router.push({
                path: '/board'
            })
        }
    }
}
</script>