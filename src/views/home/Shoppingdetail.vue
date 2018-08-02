<template>
    <div class="Shoppingdetail" >
            <div class="header">
                <nav class="detail_nav">
                    <li v-for="(item,i) in detail_navlist" :key="i" 
                    @click="detail_nav_action(i)"  :class="{active: i == isshow}">
                        {{item}}
                    </li> 
                </nav>
                <span class="iconfont icon icon_left" @click="gobackto()">&#xe679;</span>
                <span class="iconfont icon icon_right" @click="goSetup()">&#xe68a;</span>
            </div>
            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                            <shoppingshow></shoppingshow>
                    </div>
                    <div class="swiper-slide">
                            <shoppingtetail></shoppingtetail>
                    </div>
                    <div class="swiper-slide">
                            <shoppingevaluate></shoppingevaluate>
                    </div>
                </div>
            </div>        
           <div id="Shopping_Cart">
                  <ul>
                      <li class="iconfont "><i>&#xe737;</i><p>客服</p></li>
                      <li class="iconfont "><i>&#xe64b;</i><p>收藏</p></li>
                      <li class="iconfont "><i>&#xe6af;</i><p @click="gotocart()">购物车</p><span class="addnum" v-if="isshowto">{{addnumber}}</span></li>
                  </ul>
                  <ul>
                      <li @click="addsetup()"> 加入购物车</li>          
                  </ul>

           </div>
    </div>
</template>

<script>
import shoppingshow from './shoppingshow/shoppingshow.vue'
import shoppingtetail from './shoppingtetail/shoppingtetail.vue'
import shoppingevaluate from './shoppingevaluate/shoppingevaluate.vue'
export default {
    data(){
         return{
            detail_navlist:['商品','详细','评价'],
            isshow:0,
            addnumber:0,
            isshowto:false
         }
    },
     components:{
        shoppingshow,
        shoppingtetail,
        shoppingevaluate
    },
    methods:{
        gobackto(){
            this.$router.back();
        },
        detail_nav_action(index){
            // console.log(index)
            this.isshow=index;
            this.my_Swiper.slideTo(index,0)
            
        },
        goSetup(){
            alert('跳转设置')
        },
        addsetup(){
            if(this.addnumber >= 0){
                this.addnumber++;
                this.isshowto=true;
            }
        },
        gotocart(){
            alert("跳转购物车")
        }
    }, 
    mounted() {
       this.my_Swiper = new Swiper(this.$refs.swiper, {
          onSlideChangeEnd: swiper=>{
            //    console.log(swiper.activeIndex)
               this.isshow=swiper.activeIndex
            }
        })  
    },
}
</script>
<style lang="scss" scoped>
.Shoppingdetail{
    width: 100%;background:#fff;position: absolute;top:0;left: 0;bottom: 0;
}
.header{
    width: 100%;height: .44rem; background:#fe716e;position: relative;
}
.detail_nav{
     width: 100%;position: absolute;top: 0;left: 0;display: flex;
     justify-content: center;
}
.detail_nav li{
    font-family: SourceSansPro-Regular;font-size: .18rem;color: #FFFFFF;line-height: .4rem;
    padding: 0 .07rem;border: .02rem solid #fe716e;
}
.icon{
    position: absolute;top: 0;line-height: .44rem;color:  #FFFFFF;font-size: .22rem;
}
.icon_left{
    left: 0;padding: 0 .15rem
}
.icon_right{
   right: 0;padding: 0 .15rem
}
#Shopping_Cart{
    width: 100%;position: absolute;left: 0;bottom: 0;height: .6rem;background: #fff;
    z-index: 1;display: flex;
}
#Shopping_Cart ul {
    flex: 1;text-align: center;
}
#Shopping_Cart ul:first-child{
   display: flex;justify-content: center;background: #F5F5F5;
}
#Shopping_Cart ul:first-child li{
    padding: 0 .12rem;padding-top:.1rem;position: relative;
    i{
        font-size: .27rem;color:#FF616C;
    }
    p{
        font-size: .1rem;color: #333333;
    }
}
#Shopping_Cart ul:last-child{
    background:  #FF616C;
}
#Shopping_Cart ul:last-child li{
    font-size: .15rem;color: #FFFFFF;line-height: .6rem;
}
.swiper-container{
    width: 100%;position: absolute;top: .44rem;bottom: .6rem;overflow: hidden;
  
}
.header .detail_nav .active{
     border-bottom: 2px solid #fff;
}
.addnum{
    position: absolute;width: 0.2rem;height: 0.2rem;
    border-radius: 50%;background: #FF616C;
    top: 0.1rem;right: 0.08rem;text-align: center;display: block;
    line-height: 0.2rem;color: #fff;
}
</style>




