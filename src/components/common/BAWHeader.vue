<template>
  <header>
      <div class="bs-docs-section clearfix">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
            <router-link to="/" style="text-decoration: none;"><a class="navbar-brand">Black And White</a></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
                <router-link to="/" style="text-decoration: none;">
                  <li class="nav-item"><a class="nav-link active">Home<span class="visually-hidden">(current)</span></a></li>
                </router-link>

                <li class="nav-item dropdown">
                <a class="nav-link  active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Board</a>
                <div class="dropdown-menu">
                  <router-link to="/board" style="text-decoration: none;"><a class="dropdown-item">자유 게시판</a></router-link>
                  <router-link to="/board" style="text-decoration: none;"><a class="dropdown-item">공략 게시판</a></router-link>
                </div>
                </li>
                
                <li class="nav-item dropdown">
                <a class="nav-link  active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Game</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item">♟ Chess</a>
                  <a class="dropdown-item">🃏 Card</a>
                </div>
                </li>
            </ul>
              <div class="btn-group" role="group" aria-label="Basic example">
                <router-link to="/loginpage"><button type="button" class="btn btn-secondary">로그인</button></router-link>
                <router-link to="/signuppage"><button type="button" class="btn btn-secondary">회원가입</button></router-link>
              </div>
            </div>
            </div>
            </nav>
          </div>
        </div>
      </div>
  </header>    
</template>

<script>
export default {
  name: "bawheader",
  
};
</script>

<style>
#a {
  text-decoration: none;
}
</style>
