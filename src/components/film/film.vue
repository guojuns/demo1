<template class="firstbox">
    <div class="film clear">
        <div class="film_side clear">
            <span class="cenimahot marleft">影院热映</span>
            <a class="fr more marright" href="https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0">更多</a>
           
            <div class="show_img">
                <ul class="clear lis">
                    <li v-for="item in movies1" :key="item.cover.url">
                    <img :src="item.cover.url" :alt="item.title">
                    <p class="filmTitle">{{item.title}}</p>
                    <el-rate :value="item.rating?item.rating.value/2:0" v-if="item.rating!=null" disabled>
                  
                     </el-rate>
                       <span class="pingfen" v-if="item.rating==null">暂无评分</span>
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

    <div class="films">
    <span class="goodfilm">发现好电影</span>
        <!--<ul>
        <li id="filmbox1 filmtypes">同时入选IMDB250和豆瓣电影250的电影</li>
        <li id="filmbox2 filmtypes">带你进入不正常的世界</li>
        <li id="filmbox3 filmtypes">用电【影】来祭奠逝去的岁月</li>
        <li id="filmbox4 filmtypes">女孩们的【电影】</li>
        <li id="filmbox5 filmtypes">使用App找【电影】</li>
        <li id="filmbox6 filmtypes">科幻是未来的钥匙--科幻启示录【科幻题材】</li>
        <li id="filmbox7 filmtypes">美国生活面面观</li>
        <li id="filmbox8 filmtypes">2015终极期待</li>
        <li id="filmbox9 filmtypes">经典韩国电影--收集100部</li>
        </ul>-->
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
                this.$http.jsonp("https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=24&loc_id=108288&_=0").then(function(response){
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
::-webkit-scrollbar{
    width:0;
}

.el-rate{
    text-align:center;
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
.pingfen{
    margin-left:110px;
}
/*发现好电影*/ 
.films{
    width:100%;
}
.goodfilm{
    font-size:32px;
    margin-left:23px;
}
#filmbox1{
    /*width:215px;
    height:30px;
    border:1px solid #FFAC2D;
    font-size:.10rem;
    border-radius:.11rem;
    line-height:30px;*/
}
</style>