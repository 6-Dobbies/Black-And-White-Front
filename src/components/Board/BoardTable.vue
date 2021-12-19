<template>
    <div class="bawbody">
        <table class="table table-hover">           
            <thead>
                <tr class="table-primary">
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성자</th>
                    <th scope="col">작성일</th>
                    <th scope="col">수정일</th>
                </tr>
            </thead>
            <tbody>                
                <!-- <tr class="table-dark" v-for="(value, index) in data" @click="detail(index)" :key="index">                    
                    <th scope="row">{{value.index}}</th>                    
                    <td>{{value.title}}</td>                    
                    <td>{{value.user}}</td>                    
                    <td>{{value.created}}</td>                    
                    <td>{{value.modified}}</td>
                </tr> -->

                <tr class="table-dark" v-if="postlist.length == 0">
                    <td colspan="5" style="text-align: center">게시글이 없습니다.</td>
                </tr>
                <tr class="table-dark" v-for="post in postlist" v-bind:key="post.postIdx" @click="detail(post)">                 
                    <td v-text="post.postIdx"></td>                    
                    <td v-text="post.title"></td>                    
                    <td v-text="post.writer"></td>                    
                    <td v-text="post.created"></td>                    
                    <td v-text="post.updated"></td>
                </tr>

                <!-- <tr class="table-danger">
                    <th scope="row">1</th>                    
                    <td><router-link to="/boarddetail">공지용</router-link></td> 
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">6</th>
                    <td>title</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">6</th>
                    <td>title</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">6</th>
                    <td>title</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">6</th>
                    <td>title</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">6</th>
                    <td>title</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr class="table-active">
                    <th scope="row">2</th>
                    <td>일반용</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr class="table-primary">
                    <th scope="row">3</th>
                    <td>title</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>title</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr class="table-info">
                    <th scope="row">5</th>
                    <td>title</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">6</th>
                    <td>title</td>
                    <td>user</td>
                    <td>2021-12-01</td>
                    <td>-</td>
                </tr> -->
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
        <router-link to="/boardwrite"><button type="button" class="btn btn-secondary">글쓰기</button></router-link>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:80";

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
    }            
}    
</script>