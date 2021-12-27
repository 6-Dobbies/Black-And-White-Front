<template>
    <div class="bawbody">
        <table class="table table-hover">           
            <thead>
                <tr class="table-primary">
                    <th style="min-width:50px;" scope="col">번호</th>
                    <th style="min-width:70px;" scope="col">게시판</th>
                    <th scope="col">제목</th>
                    <th style="max-width:100px;" scope="col">작성자</th>
                    <th style="max-width:100px;" scope="col">작성일</th>
                    <th style="max-width:100px;" scope="col">수정일</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-dark" v-if="postlist.length == 0">
                    <td colspan="5" style="text-align: center">게시글이 없습니다.</td>
                </tr>
                <tr class="table-dark" v-for="post in postlist" v-bind:key="post.postIdx" @click="detail(post)" style="cursor:pointer;">                 
                    <td style="min-width:50px;" v-text="post.postIdx"></td>
                    <td style="min-width:70px;" v-text="post.category"></td>
                    <td style="text-align: left" v-text="post.title"></td>                    
                    <td style="max-width:100px;" v-text="post.writer"></td>                    
                    <td style="max-width:100px;" v-text="post.created"></td>                    
                    <td style="max-width:100px;" v-text="post.updated"></td>
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
        <div style="margin-bottom:50px">
            <router-link to="/boardwrite"><button type="button" class="btn btn-secondary" v-show="isToken == true">글쓰기</button></router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://ec2-13-125-131-254.ap-northeast-2.compute.amazonaws.com";

export default {
    name: 'BoardTable',
    data(){
        return{
            postlist: [],
        }
    },
    methods: {        
        getData() {
            axios.get('/posts/category/자유')
            .then(res => {
                this.postlist = res.data.list;
                console.log(res);
            })
            .catch(error => console.log(error));
        },
        detail(post) {
            this.$router.push({path : '/postdetail', query : {postIdx : post.postIdx}});            
        }
    },
    mounted() {
        this.getData();
    },
    computed : {
		isToken() {
            if(localStorage.getItem("token")) {
                return true;
            }else {
                return false;
            }
		}
	}
}    
</script>

<style scoped>
td {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
}

th {
    text-align: center;
}
</style>