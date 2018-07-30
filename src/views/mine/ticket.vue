<template>
    <div>
        <div class="header">
              <i class="iconfont icon-icon4" @click="goBack()"></i>
              <h3 >领劵中心</h3>         
        </div>
        <div class="ticket">
            <ul>
                <li>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="circle6"></span>
                    <span class="circle7"></span>
                    <span class="circle8"></span>
                    <span class="circle9"></span>
                    <span class="circle10"></span>
                    <span class="circle11"></span>
                    <span class="circle12"></span>
                    <h3 class="buygoods">全品类商品限时抢</h3>
                    <div class="ticMain">
                        <p class="price"><i>￥</i>5</p>
                        <p class="useScope">满105元可用</p>
                        <p class="receive">立即领取</p>
                    </div>
                </li>
                <li>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="circle6"></span>
                    <span class="circle7"></span>
                    <span class="circle8"></span>
                    <span class="circle9"></span>
                    <span class="circle10"></span>
                    <span class="circle11"></span>
                    <span class="circle12"></span>
                    <h3 class="buygoods">全品类商品限时抢</h3>
                    <div class="ticMain">
                        <p class="price"><i>￥</i>5</p>
                        <p class="useScope">满105元可用</p>
                        <p class="receive">立即领取</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<style scoped>
.header {
  height: 49px;
  line-height: 49px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-image: radial-gradient(86% -142%, #ff616c 73%, #fd8872 100%);
  text-align: center;
}
.header i {
  float: left;
  width: 15.6px;
  height: 15.6px;
  margin-left: 21px;
  color: #fff;
}
.header h3{
    display: inline-block;
    color: #fff;
    margin-right: 55px;
}
.ticket{
width: 100%;
position: absolute;
left: 0;
top: 49px;
}
.ticket ul{
    padding: 0 15px;
}
.ticket ul li{
    height: 91px;
    width: 100%;
    background: #FC4047;
    border-radius: 4px;
    margin-top: 12px;
    position: relative;
    color: #fff;
}
.buygoods{
    padding: 11px 0 0 16px;
    font-size: 16px;
    letter-spacing: -0.4px;
}
.ticMain{
    margin-left: 16px;
    height: 43px;
}
.price{
    float: left;
    font-size: 36px;
    margin-right: 31px;
    letter-spacing: -0.4px;
}
.price i{
    font-size: 13px
}
.useScope{
    float: left;
    margin-top: 12px;
    letter-spacing: -0.4px;
}
.receive{
    float: right;
    margin:10px 15px 0 0;
    letter-spacing: -0.4px;
    width: 60px;
    height: 24px;
    background: #FFFFFF;
    border-radius: 100px;
    text-align: center;
    line-height: 24px;
    font-size: 12px;
    color: #FC4047;
}
.ticket ul li span{
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
}
.circle1{
    left: -5px;
    top: 4px;
}
.circle2{
    left: -5px;
    top: 18px;
}
.circle3{
    left: -5px;
    top: 32px;
}
.circle4{
    left: -5px;
    top: 46px;
}
.circle5{
    left: -5px;
    top: 60px;
}
.circle6{
    left: -5px;
    top: 74px;
}
.circle7{
    right: -5px;
    top: 4px;
}
.circle8{
    right: -5px;
    top: 18px;
}
.circle9{
    right: -5px;
    top: 32px;
}
.circle10{
    right: -5px;
    top: 46px;
}
.circle11{
    right: -5px;
    top: 60px;
}
.circle12{
    right: -5px;
    top: 74px;
}
</style>
