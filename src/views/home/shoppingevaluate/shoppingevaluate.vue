<template>
<my-centent id="content"> 
    <div id="shoppingevaluate">
       
      <dl class="Commodity_evaluation">
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
       
    </div>
</my-centent> 

</template>

<script>
export default {
    data(){
        return{
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
    top: 0;background: #fff;
}
.Commodity_evaluation{
    padding: 0 .14rem
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
