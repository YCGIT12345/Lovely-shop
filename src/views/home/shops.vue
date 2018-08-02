<template>
<div>
    <div id="shops">
            <ul id="header">
                <li class="iconfont" @click="goback()">&#xe679;</li>
                <li class="Brand_area">品牌专区</li>
                <li class="iconfont" @click="share()">&#xe6f3;</li>
            </ul>
            <my-centent>
                <div class="shops_information">
                    <dl> 
                        <dt><img :src="shops_name"></dt>
                        <dd>
                            <p>{{shops_shoplist}}</p>
                            <p>{{shops_Chinese}}</p>
                        </dd>
                    </dl>
                    <p class="collect iconfont">&#xe64c;</p>
                </div> 
                <div class="product">
                    <ul  class="product_show" 
                    v-for="(item,index) in productlist" :key="index">
                        <li @click="shops_product_tetail('home/shops/Shoppingdetail/'+item.id)">
                            <img :src="item.product_img">
                        </li>
                        <li>
                            <p>{{item.Product_introduction}}</p>
                        </li>
                        <li>
                            ￥<span>{{item.price}}</span>.00
                            <span class="iconfont shopping_cart">&#xe6af;</span>
                        </li>
                    </ul>
                </div>       
            </my-centent>
            
    </div>
     <router-view></router-view> 
</div>
</template>


<script>
export default {
    data(){
        return{ 
           shops_name: 'static/images/pag_03.jpg',
           shops_shoplist: 'Helvetica',
           shops_Chinese:'品牌旗舰店',  
           productlist:[
            {
             'id':1,
             'product_img':'static/images/page_03.jpg',
             'Product_introduction':'宠物粮食肉类蔬菜多口味罐头1.3kg*2包',
             'price':'108'
            },
            {
             'id':2,
             'product_img':'static/images/page_03.jpg',
             'Product_introduction':'宠物粮食肉类蔬菜多口味罐头1.3kg*2包',
             'price':'108'
            },
             {
             'id':3,
             'product_img':'static/images/page_03.jpg',
             'Product_introduction':'宠物粮食肉类蔬菜多口味罐头1.3kg*2包',
             'price':'108'
            },
             {
             'id':4,
             'product_img':'static/images/page_03.jpg',
             'Product_introduction':'宠物粮食肉类蔬菜多口味罐头1.3kg*2包',
             'price':'108'
            },
             {
             'id':5,
             'product_img':'static/images/page_03.jpg',
             'Product_introduction':'宠物粮食肉类蔬菜多口味罐头1.3kg*2包',
             'price':'108'
            },
             {
             'id':6,
             'product_img':'static/images/page_03.jpg',
             'Product_introduction':'宠物粮食肉类蔬菜多口味罐头1.3kg*2包',
             'price':'108'
            },
             {
             'id':7,
             'product_img':'static/images/page_03.jpg',
             'Product_introduction':'宠物粮食肉类蔬菜多口味罐头1.3kg*2包',
             'price':'108'
            },
             {
             'id':8,
             'product_img':'static/images/page_03.jpg',
             'Product_introduction':'宠物粮食肉类蔬菜多口味罐头1.3kg*2包',
             'price':'108'
            }
           ]

        }
    },
    methods:{
         shops_product_tetail(url){
            this.$router.push('/'+url)
         },
         goback(){
            //  console.log('点击了')
             this.$router.back();
         },
         share(){
             alert('跳转分享')
         }
    },
    mounted() {
        this.shops_shoplist=this.$route.query.name
        // console.log(this.$route.query)
    },
}
</script>


<style lang="scss" scoped>
#shops{
    width: 100%;position: absolute;top: 0;bottom: .49rem;background: #fff;
}
#header{
    width: 100%;height: .44rem;position: relative;background:#fe716e;
}
.Brand_area{
    width: 100%;position: absolute;top: 0;line-height: .44rem;text-align: center;
    color: #fff;font-size: 0.18rem;
}
#header li{
    position: absolute;line-height: .44rem;top: 0; color: #fff;font-size: .18rem;
}
#header li:first-child{
    left: 0;padding:0 .16rem; z-index: 1;
}
#header li:last-child{
    right: 0;margin-right:.16rem; 
}
.shops_information{
    width: 100%;height: 0.72rem;background: #fff;
}
.shops_information dl{
    display: flex;float: left;text-align: center;
}
.shops_information dl dt img{
    width: .4rem;height: .4rem;margin: .17rem .1rem 0 .13rem;
}
.shops_information dl dd p:first-child{
    font-size: 0.15rem;color: #333333;line-height: .16rem;margin-top:.22rem 
}
.shops_information dl dd p:last-child{
    font-size: 0.13rem;color: #666666;line-height: 0.16rem;
}
.collect{
    position: absolute;line-height: 0.72rem;right: 0;font-size: .24rem;
    margin-right: .13rem;color: #FF6772;
}
.product_show li img{
    width: 1.65rem;height: 1.28rem;
}
.product{
    padding: .08rem .05rem 0;display: flex;flex-wrap: wrap;
}
.product_show{
    flex: 45%; width: 1.65rem;background: #fff;overflow: hidden;
    margin: 0 0.05rem;margin-bottom:.1rem; 
}
.product_show li p{
  line-height: .21rem;margin-top:.06rem;font-size: .14rem;color: #333333;
  font-family: SourceSansPro-Regular; padding-left:.05rem; 
}
.product_show li:last-child{
    font-family: Helvetica;font-size: .12rem;color: #FD3F48;margin-top:.12rem;
    padding-left:.05rem;padding-bottom:.11rem;   
}
.product_show li span{
    line-height: .22rem;color: #FD3F48;font-size: .18rem;font-family: Helvetica;
}
.shopping_cart{
    float: right;padding-right:.09rem; 
}
</style>
