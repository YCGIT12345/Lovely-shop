<template>
    <app-content class="bac">
    <div class="mine">
      <span class="sub" @click='sub'><a>登录</a></span>
      <span class="my"><h2>我的</h2></span>
    </div>
      <div class="banner">
        <a><img src="../../img/img1.jpg"></a>
      </div>
      <div class="center">
        <div class="right">
          <a href="#" @click="product">收藏的商品</a>
        </div>
        <div class="left">
          <a href="#" @click="shop">收藏的店铺</a>
        </div>
      </div>
      <div class="mypay">
          <div class="extra">
            <div class="right1">
              <a href="#">我的钱包</a>
              <a href="#" @click="demoney">账号充值 查看账户信息 ></a>
            </div>
          </div>
          <div class="right2">
          <a href="#" @click="change"><span>￥300.30</span>余额</a>
        </div>
        <div class="left2">
          <a href="#" @click="quanzi"><span>3</span>优惠券</a>
        </div>
      </div>

      <div class="more">
        <div class="more_top">
              <a href="#" @click="list">我的订单</a>
              <a href="#">></a>
            </div>
        <div class="main">
          <a href="#"><i class=""></i>待支付</a>
          <a href="#"><i class=""></i>待发货</a>
          <a href="#"><i class=""></i>待收款</a>
          <a href="#"><i class=""></i>退款/售后</a>
        </div>
      </div>

      <div class="call">
        <a href="#"><i class=""></i>联系客服</a>
      </div>
      <div class="call">
        <a href="#"><i class=""></i>帮助中心</a>
      </div>
      <div class="call">
        <a href="#"><i class=""></i>关于</a>
      </div>
      <div class="call">
        <a href="#"><i class=""></i>关于</a>
      </div>
      <div class="call">
        <a href="#"><i class=""></i>关于</a>
      </div>
      <div class="call">
        <a href="#"><i class=""></i>关于</a>
      </div>
    </app-content>
  
  
</template>

<script>


export default {
  data () {
    return {
      
    }
  },

  methods:{
        sub(){
          alert("登录接口")
        },
        product(){
          alert("跳转商品")  
        },
        shop(){
          alert("跳转店铺")
        },
        change(){
          alert("查询零钱")
        },
        quanzi(){
          alert("查看优惠券")
        },
        demoney(){
          alert("充钱")
        },
        list(){
          alert("订单跳转接口")
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
.call a{display: block;padding-left: .1rem}
</style>