<template>
    <div class="book clear">
        <div class="book_side">
            <span class="marleft">最受关注图书 | 虚伪类</span>
            <a class="fr marright" href="https://book.douban.com/latest?icn=index-latestbook-all">更多</a>
            <div class="show_img">
             <ul class="clear lis">
                    <li v-for="item in movies1" :key="item.cover.url">
                    <img :src="item.cover.url" :alt="item.title">
                    <p class="filmTitle">{{item.title}}</p>
                     
                    </li>
                </ul>
            </div>
        </div>

        <div class="box_side1 clear">
            <span class="marleft">免费在线观看电影</span>
            <a class="fr marright" href="#">更多</a>
            <div class="show_img">
                <ul class="clear lis">
                    <li v-for="item in movies2" :key='item.cover.url'>
                    <img :src="item.cover.url" :alt="item.title">
                    <p class="filmTitle">{{item.title}}</p>
                    
                    </li>
                </ul>
            </div>
        </div>

    <div class="clear box_side2">
      <span class="marleft">新片快递</span>  
      <a class="fr marright" href="#">更多</a>
              
      <div class="show_img">
          <ul class="clear lis">
            <li v-for="item in movies3" :key='item.cover.url'>
              <img :src="item.cover.url" :alt="item.title">
              <p class="filmTitle">{{item.title}}</p>
               
            </li>
          </ul>
      </div>
    </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                movies:[],
               movies1:[],
                movies2: [],
                movies3: []
            }
        },
        mounted:function(){
           this.getMovies();
        },
        methods:{
            getMovies(){
                this.$http.jsonp("https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?os=android&start=0&count=24&loc_id=0&_=0").then(function(response){
                    this.movies = JSON.parse(response.bodyText).subject_collection_items;
                    console.log(this.movies);
                    this.movies1 = this.movies.slice(0, 8);
                    this.movies2 = this.movies.slice(8, 16);
                    this.movies3 = this.movies.slice(16, 24);
                }).then(()=>{
                    this.getImage();
                }).catch((err)=>{
                    console.log(err);
                })
            },
            getImage:function(){
                // 把现在的图片连接传进来，返回一个不受限制的路径
                for(let i of this.movies){
                    if(i.cover.url !== undefined){
                    i.cover.url = i.cover.url.replace(/http\w{0,1}:\/\//g,'https://images.weserv.nl/?url=');
                    }
                }
            }
        }
    }    
</script>
<style>
.marleft{
    font-size:30px;
}
.lis li img{
    width: 3rem;
    height: 3.42rem;
}
ul{
    width:100%;
    overflow:hidden;
    display:flex;
    overflow-x:auto;
}
.lis li{
    float:left;
    margin-left: 0.1rem;
}
.filmTitle{
    text-align:center;
    width:3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>