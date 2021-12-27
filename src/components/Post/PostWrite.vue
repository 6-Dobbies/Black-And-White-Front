<template>
    <div class="bawbody">
        <form @submit.prevent="submitForm" class="container h-100">
        <div class="form-group">
            <label class="col-form-label mt-4" for="title">Title</label>
            <input class="form-control" v-model="title" placeholder="제목을 입력하세요" id="title">
        </div>
        <div class="form-group">
            <label for="content" class="col-form-label mt-4">Content</label>
            <textarea class="form-control bawtextarea" v-model="content" placeholder="내용을 입력하세요" id="content"></textarea>
        </div>
        <div class="bawtwobutton" style="padding-top: 50px;">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" class="btn btn-secondary" style="width: 100px">저장</button>
                <button type="button" class="btn btn-secondary" style="width: 100px" @click="cancel">취소</button>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://ec2-13-125-131-254.ap-northeast-2.compute.amazonaws.com";

export default {
    name: 'BoardWrite',
    data() {
        return {
            title : "",
            content: "",
            category: "",
            writer: "",
        }
    },
    methods: {
        doubleSubmitCheck(){
            var doubleSubmitFlag = false;
            if(doubleSubmitFlag){
                return doubleSubmitFlag;
            }else{
                doubleSubmitFlag = true;
                return false;
            }
        },

        submitForm() {
            this.doubleSubmitCheck();
            axios.post("/post", {
                data: {
                    title : this.title,
                    content: this.content,
                    category: "자유",
                    writer: localStorage.getItem("idx")
                },
                "success": true,
                "code": 0,
                "message": "성공"
            })
            .then(res => {
                console.log(res.data);
                alert("글이 저장되었습니다.");
                this.$router.push('/board');
            })
            .catch(err => {
                console.log(err);
            });
        },
        cancel() {
            this.$router.push('/board');
        }
    }
}

</script>

<style scoped>

.bawtextarea {
    resize: none;
    height: 300px;
    margin-top: 5px;
}

.bawtwobutton {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
