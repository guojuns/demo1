<template>
  <div class="nav_bar">
      <router-link to="/"><img src="../../assets/logo.png" alt="" class="logo"></router-link>
      <router-link to="/search"><img src="../../assets/search.png" alt="" class="search fr"></router-link>     
      <router-link to="/group"><span class="group">小组</span></router-link>
      <router-link to="/Broadcast"><span class="status">广播</span></router-link>
      <router-link to="/book"><span class="book">图书</span></router-link>    
      <router-link to="/film"><span class="film">电影</span></router-link>
     
  </div>
</template>
<script>

</script>

<style>
.nav_bar {
  height: 46px;
  border-bottom: 1px solid #eee;
}

.nav_bar span {
  font-size: 48px;
    float: right;
    margin-right: 0.3rem;
    line-height: 46px;
    margin-top: -14px;
}
.nav_bar .logo {
  margin-top: -11px;
    margin-left: 0.3rem;
}
.nav_bar .search {
  margin-right: 0.3rem;
    margin-top: -19px;
}
.nav_bar .film{
    color: #2384E8;
}
.nav_bar .book{
    color: #9F7860;
}
.nav_bar .status{
    color: #E4A813;
}
.nav_bar .group{
    color: #2AB8CC;
}
</style>