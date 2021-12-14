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
            {{data.title}}    
        </div>
        <div class="form-group">
            <label for="exampleTextarea" class="col-form-label mt-4">Content</label>
            <textarea
                v-model="content" 
                class="form-control"
                placeholder="내용을 입력하세요"
                id="exampleTextarea"
                rows="10"
                readonly="readonly">
            </textarea>
            {{data.content}}
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
import data from '@/data'

    export default {
        name: 'BoardDetail',
         data() {
            const index = this.$route.params.valueIndex
            return {
                data: data[index],
                index: index,
            }
        },
        methods: {
            deleted() {
                data.splice(this.index, 1)
                this.$router.push({
                    path: '@/views/board'
                })
            },
            list(){
                this.$router.push({
                    path: '@/views/board' 
                })
            }
        }
    }
</script>