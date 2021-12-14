<template>
    <div class="bawbody">
        <!-- <div class="form-group">
            <label class="col-form-label mt-4" for="inputDefault">Title</label>
            <input
                type="text"
                class="form-control"
                placeholder="제목을 입력하세요"
                id="inputDefault">
        </div>
        <div class="form-group">
            <label for="exampleTextarea" class="col-form-label mt-4">Content</label>
            <textarea 
                type="text" 
                class="form-control" 
                placeholder="내용을 입력하세요" 
                id="exampleTextarea" 
                rows="10">
            </textarea>
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
        <br><br>
        <button type="submit" class="btn btn-secondary">Submit</button> -->

        <div class="form-group">
            <label class="col-form-label mt-4" for="inputDefault">Title</label>
            <input
                v-model="title"
                type="text"
                class="form-control"
                placeholder="제목을 입력하세요"
                id="inputDefault">
        </div>
        <div class="form-group">
            <label for="exampleTextarea" class="col-form-label mt-4">Content</label>
            <textarea
                v-model="content" 
                type="text" 
                class="form-control" 
                placeholder="내용을 입력하세요" 
                id="exampleTextarea" 
                rows="10">
            </textarea>
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
        <br><br>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button @click="index !== undefined ? modified() : write()" class="btn btn-secondary">{{index !== undefined ? '수정' : '작성'}}</button>
        <button @click="cancel" class="btn btn-secondary">취소</button>
        </div>
    </div>
</template>

<script>
    // export default {
    //     name: 'BoardWrite',
    //     props: {
    //         post: String
    //     }
    // }

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