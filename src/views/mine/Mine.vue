<template>
  <div class="bac">
    <div class="mine">
      <span class="sub" @click='sub'><a>登录</a></span>
      <span class="my"><h2>我的</h2></span>
    </div>   
    <app-content>  
      <div class="banner">
        <a><img src="../../img/img1.jpg"></a>
      </div>
      <div class="center">
        <div class="right">
          <a  @click="product">收藏的商品</a>
        </div>
        <div class="left">
          <a  @click="shop">收藏的店铺</a>
        </div>
      </div>
      <div class="mypay">
          <div class="extra">
            <div class="right1">
              <a href="#"><i class="iconfont icon-pay blue"></i>我的钱包</a>
              <a href="#" @click="demoney('money')">账号充值 查看账户信息 ></a>
            </div>
          </div>
          <div class="right2">
          <a href="#"><span>￥300.30</span>余额</a>
        </div>
        <div class="left2">
          <a  @click="quanzi"><span>3</span>优惠券</a>
        </div>
      </div>

      <div class="more">
        <div class="more_top">
              <a href="#" @click="list('4')"><i class="iconfont icon-edit yellow"></i>我的订单</a>
              <a href="#">></a>
            </div>
        <div class="main">
          <a href="#" @click="goPay('0')"><i class="iconfont icon-vipcard red"></i>待支付</a>
          <a href="#" @click="goPay('1')"><i class="iconfont icon-send red"></i>待发货</a>
          <a href="#" @click="goPay('2')"><i class="iconfont icon-deliver red"></i>待收货</a>
          <a href="#" @click="goPay('3')"><i class="iconfont icon-repair red"></i>退款/售后</a>
        </div>
      </div>

      <div class="call">
        <a href="#" @click="kefu"><i class="iconfont icon-servicefill red"></i>联系客服</a>
      </div>
      <div class="call">
        <a href="#"><i class="iconfont icon-emojilight blue"></i>帮助中心</a>
      </div>
      <div class="call">
        <a href="#"><i class="iconfont icon-moreandroid"></i>关于</a>
      </div>
      <div class="call">
        <a href="#"><i class="iconfont icon-moreandroid"></i>关于</a>
      </div>
      <div class="call">
        <a href="#"><i class="iconfont icon-moreandroid"></i>关于</a>
      </div>
      <div class="call">
        <a href="#"><i class="iconfont icon-moreandroid"></i>关于</a>
      </div>
    </app-content>
  
  </div>
</template>

<script>
import {playingdata,playing1data,playing2data,playing3data} from '../../servers/mineserver.js' 

export default {
  data () {
    return {
      
    }
  },

  methods:{
        sub(){
          this.$router.push({
            name:"login"
          })
        },
        product(){
           this.$router.push({
            name:"foods-c"
          })
        },
        shop(){
           this.$router.push({
            name:"store-c"
          })
        },
        quanzi(){
           this.$router.push({
              name:'ticket'
            })
        },
        demoney(money){
          this.$router.push({
            name:'Mypurse',
            params:{
              money
            }
          });
        },
        list(flag){
          this.$router.push({
            name:'Pay',
            params:{flag}
          })
        },
        kefu(){
          alert("客服不在家！！")
        },
        goPay(flag){
             this.$router.push({
                name: 'Pay',
                params: {
                    flag
                }
            });
      }
      
      },
      

}
</script>

<style scoped>
.bac{background:#ddd;}
.mine{
  background: #fe7970;
  height:.44rem;
  
}
  .sub{
    position: absolute;
    right:.16rem;
    height:.44rem;
    line-height: .44rem;
  }
  .sub>a{color:#fff;}
  .my{
    width:100%;
    height:100%;
    line-height: .44rem;
    text-align: center;
    color:#fff;
  }
  .banner{
    height:1.3rem;
    width:100%;
  }
  .banner>a{
    display: block;
    width:100%;
    height:100%;
  }
  .banner>a>img{
    width:100%;
    height:100%;
  }
  .center{
    width:100%;
    height:.65rem;
    background: #f5f5f5;
    position: relative;
  }
  .right{width:1.79rem;
    height:.55rem;
    background:#fd7c70;
    position: absolute;left:0;top:0;
  }
  .right>a{display: block;width:100%;height:100%;color:#fff;line-height: .55rem;text-align: center}
    .left{width:1.79rem;
    height:.55rem;
    background:#fd7c70;
    position: absolute;right:0;top:0;
  }
  .left>a{display: block;width:100%;height:100%;color:#fff;line-height: .55rem;text-align: center}
  .mypay{width:100%;height:1.18rem;position: relative;background:#f5f5f5;}
  .extra{
    width:100%;
    height:.48rem;
    background: #f5f5f5;
    position: relative;
    border-bottom:1px solid #ccc;
  }
    .right1{width:100%;
    height:.48rem;
    background:#fff;
    position: absolute;left:0;top:0;
    display: flex;justify-content: space-between;align-items: center;
  }
  .right1>a{display: block;padding:0 10px}

  .right2{
    width:1.79rem;height:.6rem;float:left;background: #fff;display: flex;flex-direction: column;justify-content: center;flex-wrap: wrap;align-items: center;
  }
  .right2>a{
        display: flex;
    height:100%;
    padding: 0 .2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left2{
     width:1.79rem;height:.6rem;float:right;background: #fff;display: flex;flex-direction: column;justify-content: center;flex-wrap: wrap;align-items: center;
  }
  .left2>a{
        display: flex;
    height:100%;
    padding: 0 .2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .more{width:100%;height:118px;position: relative;background:#f5f5f5;}
  .more_top{
      width:100%;height:.48rem;background: #fff;border-bottom: 1px solid #ccc;display: flex;justify-content: space-between;align-items: center;
  }
  .more_top>a{display: block;padding:0 10px;}

  .main{
    width:100%;
    height:.62rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-bottom: 1px solid #eeeeee;
    box-sizing: border-box;
    background: #fff;
}
.main a{
    width:20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.call {
  width:100%;height:.48rem;border-bottom: 1px solid #ccc;line-height: .48rem;background: #fff
}
.call a{display: block;padding-left: .1rem;width:100%;height:.48rem;line-height: .48rem}
.iconfont{
  font-size: .14rem;
  margin-right: .04rem;
}
.blue{color:#FF64F8B2;}
.yellow{color:#FFFECA38;}
.red{color:#fd7c70;}
</style>