<template>
    <div class="bawbody">
        <div class="form-group">
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
        <button type="submit" class="btn btn-secondary">Submit</button>
    </div>
</template>

<script>
    export default {
        name: 'BoardWrite',
        props: {
            post: String
        }
    }
</script>