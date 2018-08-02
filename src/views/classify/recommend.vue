<template>
   <div class="warp">
       <div class="recentBrowse">
           <h3>
               最近浏览
           </h3>
           <ul>
               <li><a href="##">
                        <img src="../../img/pic_03.jpg" >
                        <p>狗狗餐具</p>
                   </a>
                </li>
               <li><a href="##">
                        <img src="../../img/pic_05.jpg" >
                        <p>冻干狗粮</p>
                   </a>
                </li>
                <li><a href="##">
                        <img src="../../img/pic_07.jpg" >
                        <p>洗澡工具</p>
                   </a>
                </li>
           </ul>
       </div>
       <div class="detail">
            <h3>
                热门分类
                <i class="iconfont icon-icon4"></i>
           </h3>
            <ul>
               <li v-for="(item,index) in json" :key="index"><a href="##">
                        <img :src=item.src >
                        <p>{{item.name}}</p>
                   </a>
                </li>
           </ul>
       </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            json:[
                {
                    name:"狗狗餐具",
                    src:"/img/pic_05.8ad7bc7f.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                },
                 {
                    name:"狗狗餐具",
                    src:"../../img/pic_03.jpg"
                }
            ]
        }
    }
}
</script>


<style scoped>
.warp{
    padding-bottom: 49px;
}
.recentBrowse{
    border-bottom: 1px solid #e5e5e5;
}
.recentBrowse h3{
    font-size: 14px;
    color: #8A8A8A;
    height: 38px;
    line-height: 38px;
    padding-left: 11px;
    font-weight: normal;
}
.recentBrowse ul{
    display: flex;
    flex-direction: row;
    padding-left: 11px;
    flex-wrap: wrap;

}
.recentBrowse ul li{
    width: 33%;
    justify-content: space-around;
}
.recentBrowse ul li a{
    display: inline-block;
    text-align: center;
}
.recentBrowse ul li p{
    font-size: 13px;
    color: #4F4F4F;
    padding: 5px 0 15px 0;
}
.recentBrowse ul li a img {
    height: 66px;
    width: 66px;
}
.detail{
    overflow: hidden;
}
.detail h3{
    font-size: 14px;
    color: #8A8A8A;
    height: 38px;
    line-height: 38px;
    padding-left: 11px;
    font-weight: normal;
}
.detail h3 i{
    float: right;
    transform: rotate(180deg);
    font-size: 10px;
    margin-right: 22.7px;
}
.detail ul{
    display: flex;
    flex-direction: row;
    padding-left: 11px;
     flex-wrap: wrap;


}
.detail ul li{
    width: 33%;
    justify-content: space-around;
}
.detail ul li a{
    display: inline-block;
    text-align: center;
}
.detail ul li p{
    font-size: 13px;
    color: #4F4F4F;
    padding: 5px 0 15px 0;
}
.detail ul li a img {
    height: 66px;
    width: 66px;
}
</style>
