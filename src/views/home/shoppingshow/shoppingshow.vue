<template>
    <div id="shoppingshow"> 
         <my-centent id="content">    
         <img src="static/images/tetail_02.png" class="shoppingshow_img">
         <ul class="shopping_information">
             <li class="shopping_information_1">
                <p>澳洲原装进口 灵动LINGDOK猫粮 鸡肉+三文鱼粮食 1.5kg (6包*250g/包）</p>
                <p>天然食材 低敏呵护 靓丽毛皮 美味享受</p>
             </li>
             <li class="shopping_information_2">
                <p> ￥<span>328</span>.00</p>
                <p> ￥<i>460</i>.00</p>
             </li>
             <li class="shopping_information_3">
                   <p>已选：重量 8.15kg</p>
             </li>
         </ul>
         <dl class="Commodity_evaluation">
             <dt>
                 <p>商品评价(<span>869</span>)</p>
                 <p>好评率<span>98%</span><i class="iconfont">&#xe6a3;</i></p>
             </dt>
             <dd class="evaluation"
             v-for="(item,index) in Userreviewslist" :key="index">
                 <ul>
                       <li><img :src="item.user_img" ></li>
                       <li class="evaluation_box">
                           <p>
                               {{item.name}}<i class="iconfont Diamonds"
                               v-for="i in item.Diamonds_num" :key="i">
                               &#xe714;</i>
                           </p>
                           <p>{{item.reviews}}</p>
                           <p>{{item.data}}</p>
                       </li>
                       <li class="Fabulous">
                           <p>
                               <i class="iconfont" v-for="k in item.stars_num" :key="k">&#xe64b;</i>
                            </p>
                           <p><span class="iconfont">&#xe6e3;</span></p>
                       </li>
                 </ul>
             </dd>
         </dl>
       </my-centent> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            number:5,
            Userreviewslist:[
                {
                    'user_img':'static/images/die_05.jpg',
                    'name':'某**某**',
                    'reviews':'颗粒很小，狗狗吃得很香',
                    'Diamonds_num':3,
                    'data':'2016-08-08  19:50:08',
                    'stars_num':5,
                    'Fabulous_state':true
                },
                 {
                    'user_img':'static/images/die_05.jpg',
                    'name':'某**某**',
                    'reviews':'颗粒很小，狗狗吃得很香',
                    'Diamonds_num':3,
                    'data':'2016-08-08  19:50:08',
                    'stars_num':5,
                    'Fabulous_state':true
                },
                 {
                    'user_img':'static/images/die_05.jpg',
                    'name':'某**某**',
                    'reviews':'颗粒很小，狗狗吃得很香',
                    'Diamonds_num':3,
                    'data':'2016-08-08  19:50:08',
                    'stars_num':5,
                    'Fabulous_state':true
                },
                 {
                    'user_img':'static/images/die_05.jpg',
                    'name':'某**某**',
                    'reviews':'颗粒很小，狗狗吃得很香',
                    'Diamonds_num':3,
                    'data':'2016-08-08  19:50:08',
                    'stars_num':5,
                    'Fabulous_state':true
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
#content{
    position: absolute;top: 0;background: #fff;
}
.shoppingshow{
    position: absolute;width: 100%;background: #fff;bottom: .6rem;
    overflow: hidden;
}
.shoppingshow_img{
    width: 100%;overflow: hidden;
}
.shopping_information{
   background: #fff;padding: 0 .14rem
}
.shopping_information_1 p:nth-child(1){
    font-family: SourceSansPro-Regular;font-size: .15rem;color: #333333;
    line-height: .21rem;margin-top:.13rem; 
}
.shopping_information_1 p:nth-child(2){
   font-family: SourceSansPro-Regular;font-size: .12rem;color: #333333;
    line-height: .17rem;padding: .08rem 0 .12rem 0; border-bottom: 1px solid #F5F5F5;
}
.shopping_information_2{
    margin: .15rem 0 .37rem 0;overflow: hidden;
}
.shopping_information_2 p:nth-child(1){
    font-size: .15rem;color: #FF3C42;float: left;
    span{font-size: .2rem;color: #FD3F48; } 
}
.shopping_information_2 p:nth-child(2){
    font-size: .14rem;color: #666666;text-decoration: line-through;float: left;margin-top:.06rem;
    margin-left:.16rem; 
}
.shopping_information_3{
    padding-bottom:.13rem ;border-bottom: .04rem solid #F5F5F5; 
}
.shopping_information_3 p{
    font-size: .15rem;color: #333333;line-height: .21rem;
}
.Commodity_evaluation{
    padding: 0 .14rem
}
.Commodity_evaluation dt{
    display: flex;justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    p:first-child{
        font-family: PingFangSC-Regular;font-size: .15rem;color: #333333;
        line-height: .52rem;        
    }
    p:last-child{
        font-family: PingFangSC-Regular;font-size: .12rem;color: #666666;
        position: relative;line-height: .52rem;padding-right:.24rem;
        i{
            font-size: .18rem;position: absolute;top: 0;right:0; 
        }
    }
}
.Commodity_evaluation dd{
    overflow: hidden;
}
.evaluation{
    border-bottom: .04rem solid #f5f5f5;
}
.evaluation li:nth-child(1){
    float: left;
   img{
       width: .4rem;height: .4rem;margin: .1rem .1rem .53rem 0;
   }
}
.evaluation_box{float: left;
    p:nth-child(1){
         font-family: SourceSansPro-Regular;font-size: .13rem;color: #333333;
         line-height: .18rem;margin-top:.16rem; 
    }
    p:nth-child(2){
        font-family: SourceSansPro-Regular;font-size: .12rem;color: #666666;
        line-height: .17rem;margin-top: .16rem;
    }
    p:nth-child(3){
        font-family: Helvetica;font-size: .12rem;color: #666666;
        line-height: .14rem;margin-top: .12rem;
    }
}
.Fabulous{
    float: right;  margin-top: .19rem;margin-bottom:.08rem;
    i{
       font-size: .12rem;color: red;padding: 0 .03rem;
    }
    span{
        display: block;font-size: .18rem;color: red;text-align: right;
        margin-top:.46rem; 
    }
}
.Diamonds{
    font-size: .12rem;color: yellow;padding-left:.05rem; 
}
</style>












