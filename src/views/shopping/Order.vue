<template>
    <div>
        <div class="order">
            <header>
                <span @click="goBack()"><i class="iconfont icon-arrow-left"></i>确认订单</span>
            </header>
            <my-centent class="bcolor">
                <div class="address">
                    <i class="iconfont icon-location_light"></i>
                    <div>
                        <p>收货人：李四<span>1234567890</span></p>
                        <span>收货地址：广东省深圳市南山区桃源街道丽山路51号</span>
                        <p>(收货不便时，可选择免费代收货服务)</p>
                    </div>
                    <i class="iconfont icon-arrow-right"></i>
                </div>
                <ul class="goods">
                    <li>
                        <img src="" alt="无">
                        <div>
                            <p>磨牙棒狗狗零食幼犬训练骨头耐咬泰迪小型犬洁齿除口臭咬胶</p>
                            <span>食品口味：三文鱼，剩余保质期：6个月以上</span>
                            <div>
                                <span>七天退换</span>
                            </div>
                            <p class="price">￥<span>99</span>.9</p>
                            <i class="count">x数量</i>
                        </div>
                    </li>
                </ul>
                <ul class="infolist">
                    <li>
                        <p>店铺优惠</p>
                        <span>使用优惠券<i class="iconfont icon-arrow-right"></i></span>
                    </li>
                    <li>
                        <p>配送方式</p>
                        <span>快递 免邮<i class="iconfont icon-arrow-right"></i></span>
                    </li>
                    <li>
                        <p>配送时间</p>
                        <span>17:30前付款，承诺7月4日送达<i class="iconfont icon-arrow-right"></i></span>
                    </li>
                    <li>
                        <p>运费险</p>
                        <span>确认收货前退货可赔付9元  ¥0.30<input type="checkbox" checked/><i class="iconfont icon-arrow-right"></i></span>
                    </li>
                </ul>
            </my-centent>
            <div class="result">
                <div>
                    <p>合计：<span>￥<i>19</i>.90</span></p>
                    <button @click="showPay()">提交订单</button>
                </div>
            </div>
        </div>
        <PromptBox v-show="paybox">
            <div class="paybox">
                <div>
                    <i class="iconfont icon-arrow-left" @click="paybox=false"></i>
                    <p>确认付款</p>
                    <i class="iconfont icon-wenhao"></i>
                </div>
                <h3>￥<span>19</span>.90</h3>
                <ul>
                    <li>
                        <p>{{payway.name}}</p>
                    </li>
                    <li @click="payWay()">
                        <p>付款方式</p>
                        <i class="iconfont icon-arrow-right"></i>
                    </li>
                </ul>
                <button>立即付款</button>
            </div>
        </PromptBox>
        <transition name="silde">
            <div class="paybox waybox" v-show="waybox">
                <div>
                    <i class="iconfont icon-arrow-left" @click="waybox=false"></i>
                    <p>选择付款方式</p>
                    <i class="iconfont icon-wenhao"></i>
                </div>
                <div>
                    <li v-for="(item,i) in pwaylist" :key="i" @click="checkWay(i)">
                        <i class="iconfont" :style="item.color" :class="item.icon"></i>
                         {{item.name}}
                        <i class="iconfont icon-dui" v-if="wayflag==i"></i>
                    </li>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import PromptBox from '../../components/PromptBox.vue';

export default {
    components:{
        //消息框的组件
        PromptBox
    },
    data(){
        return{
            payway:{ name:'建设银行储蓄卡' },   //默认的付款方式
            paybox:false,  //支付消息框的flag
            waybox:false,  //支付方式消息框的flag
            pwaylist:[
                {icon:'icon-huabei',color:'color:rgb(18,150,219)',name:'花呗'},
                {icon:'icon-weixin',color:'color:rgb(16, 181, 26)',name:'微信'},
                {icon:'icon-jiansheblank',color:'color:rgb(14,53,132)',name:'中国建设银行储蓄卡(1111)'},
                {icon:'icon-nongyeblank',color:'color:rgb(63,164,146)',name:'中国农业银行储蓄卡(2222)'},
            ],
            wayflag:0,  
        }
    },
    methods:{
        //返回到购物车
        goBack(){
            this.$router.push({name:'Shopping'})
        },
        //显示支付的消息框
        showPay(){
            this.paybox=true;
        },
        //显示支付方法的消息框
        payWay(){
            this.waybox=true;
        },
        //选择付款方式
        checkWay(i){
            this.wayflag=i;  
            this.payway.name=this.pwaylist[i].name;   //返回选择的支付方法
            this.waybox=false;    //关闭支付方法的消息框
        }
    }
}
</script>

<style scoped>
.bcolor{
    background-color:#fff!important;
}
.order{
    background: #fff;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    width: 100%;
    z-index: 1;
}
header{
    background: #F5F5F5;
    height:44px;
    padding: 0 20px;
}
header>span{
    height: 44px;
    display: inline-block;
    line-height: 44px;
    font-size: 18px;
    color: #333333;
}

.address .icon-arrow-right{
    position: absolute;
    right: 5px;
    top: 54px;
    color: #333333;
    font-size: 10px;
    width: 15px;
    height: 15px;
}
.address .icon-arrow-left{
    float: left;
    background-size: 10px;
    color: #333333;
    font-size: 16px;
    width:16px;
    height: 16px;
    margin-top: 5px;
}
.icon-location_light{
    float: left;
    font-size: 24px;
    color: #333333;
    margin: 45px 7px 52px 15px;
}
.address{
    height: 128px;
    background: url(../../img/address-border.png) repeat-x bottom;
    position: relative;
}
.address>div{
    height:100%;
    padding:12px 16px 17px;
    margin-left: 46px;
    box-sizing: border-box;
}
.address>div>p:first-child>span{
    float: right;
}
.address>div>span{
    display: block;
    width: 261px;
    font-size: 13px;
    color: #666666;
    margin: 10px 0;
}
.address>div>p:last-of-type{
    font-size: 13px;
    color: #FD7E84; 
}
.goods{
    height: 130px;
    padding: 12px 15px;
    box-sizing: border-box;
    background: rgb(245,245,245);
    position: relative;
}
.goods>li>img{
    float: left;
    width:88px;
    height:90px;
    background: pink;
    margin-right: 10px;
}
.goods>li>div{
    float: left;
}
.goods>li>div>p:first-child{
    font-size: 13px;
    color: #333333;
    width: 225px;
    line-height: 18px;
}
.goods>li>div>span:first-of-type{
    display: inline-block;
    width:225px;
    font-size: 11px;
    line-height: 16px;
    color: #999999; 
}
.goods>li>div div {
    margin-top: 5px;
}
.goods>li>div div{
    overflow: hidden;
}
.goods>li>div div span{
    float: left;
    border-radius: 2px;
    line-height: 15px;
    padding:0 4px; 
    border:1px solid #FE414A;
    font-size: 10px;
    background:#fff;
    color: #FE414A; 
}
.price{ 
    margin-top: 5px;
    font-size: 13px;
	color: #FD3F48;
}
.price>span{
	font-size: 18px;
}
.count{
    position: absolute;
    font-size: 13px;
    color: #666666;
    bottom: 12px;
    right: 18px;
}
.infolist{
    padding-left: 20px;
}

.infolist>li{
    height:55px;
    line-height: 55px;
    border-bottom: 1px solid #F5F5F5;
}
.infolist>li>p{
    float: left;
    line-height: 55px;
    font-size: 13px;
    color: #333333; 
}
.infolist>li>span{
    float: right;
    line-height: 55px;
    font-size: 12px;
    color: #666666;
}
.infolist>li>span .icon-arrow-right{
    font-size:10px;
    color: #999999;
    margin: 0 16px 0 22px;
}
.infolist>li:last-of-type{
    border-bottom:0;
}
.infolist>li:last-of-type input{
    width: 18px;
    height: 18px;
    background: #fff;
    margin: 0 2px;
}
.infolist>li:last-of-type i{
    margin: 0 16px 0 0;
}
.result{
    width: 100%;
    height: 48px;
    position: absolute;
    bottom: 0;
    left: 0;
}
.result>div{
    float: right;
}
.result>div>p{
    float: left;
	line-height: 48px;
	color: #666666;
    margin-right: 20px;
    
}
.result>div>p>span{
    color: #FD3F48;
    font-size: 13px;
}
.result>div>p>span>i{
    font-size: 18px;
}
.result>div>button{
    float: left;
    outline: none;
    border:0;
	line-height: 48px;
	color: #fff;
    width:100px;
    height: 48px;
    background-image: radial-gradient(86% -142%, #FF616C 73%, #FD8872 100%);
}
.paybox{
  width:100%;
  height: 432px;
  position: absolute;
  left: 0;
  bottom:0;
  background: #ffffff;
  z-index: 2;
  padding-top:18px;
}
.paybox>div:first-child{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 18px;
    margin-bottom:55px;
}
.paybox .icon-arrow-left{
    font-size: 15px;
}
.paybox>div:first-child>p{
    font-size:18px;
}
.paybox .icon-wenhao{
    font-size: 26px;
    color: #3796DC;
}
.paybox h3{
    font-size: 30px;
    color: #333333;
    text-align: center
}
.paybox h3>span{
    font-size: 40px;
    color: #151515; 
}
.paybox ul{
    overflow: hidden;
    margin-top: 30px;
}
.paybox ul>li{
    padding: 0 15px;
    height: 50px;
    width:100%;
    box-sizing: border-box;
    font-size: 18px;
    color: #999999;
    line-height: 50px;
    border-bottom: 1px solid #F5F5F5;
}
.paybox ul>li>p{
    float: left;
}
.paybox ul>li>span{
    float: right;
}
.paybox ul>li>i{
    float: right;
}
.paybox>button{
    width:300px;
    height:42px;
    border:0;
    outline: 0;
    color: #fff;
    margin: 52px 30px 0 30px;
    font-size: 15px;
    background-image: radial-gradient(86% -142%, #FF616C 73%, #FD8872 100%);
    border-radius: 4px;
}

@keyframes sildeIn {
    0%{transform: translateX(100%);}
    100%{transform: translateX(0%);}
}
@keyframes sildeOut {
    0%{transform: translateX(0%);}
    100%{transform: translateX(100%);}
}
.silde-enter-active{
    animation: sildeIn 400ms;
}
.silde-leave-active{
    animation: sildeOut 400ms;
}
.waybox div:nth-of-type(2){
    margin-top:44px;
    overflow: hidden;
}
.waybox div:nth-of-type(2)>li{
    height: 54px;
    line-height: 54px;
    font-size: 16px;
    color: #999999;
    padding:0 15px;
    border-bottom: 1px solid #F5F5F5;
}
.waybox div:nth-of-type(2)>li i{
    font-size: 26px;
    margin-right: 18px;
}
.waybox div:nth-of-type(2)>li i.icon-dui{
    font-size: 20px;
    float: right;
    color:#3E9ADE;
}
</style>
