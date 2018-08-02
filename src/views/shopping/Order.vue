<template>
    <div>
        <div class="order">
            <header>
                <span @click="goBack()"><i class="iconfont icon-arrow-left"></i>确认订单</span>
            </header>
            <my-centent class="bcolor" v-show="!addbox">
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
                    <li v-for="item in buy" :key="item.id">
                        <img :src="item.gpicture" alt="无">
                        <div>
                            <p>{{item.gname}}</p>
                            <!-- <span>食品口味：三文鱼，剩余保质期：6个月以上</span> -->
                            <div>
                                <span>七天退换</span>
                            </div>
                            <p class="price">￥<span>{{item.gprice | priceControl('big') }}</span>.{{item.gprice | priceControl('small') }}</p>
                            <i class="count">x{{item.gnum}}</i>
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
                        <span @click="clickCBox()">确认收货前退货可赔付9元  ¥0.30<i class="iconfont icon-fuxuankuang" :class="bclass" ></i><i class="iconfont icon-arrow-right"></i></span>
                    </li>
                </ul>
            </my-centent>
            <div class="result" v-show="!addbox">
                <div>
                    <p>合计：<span>￥<i>{{ cprice | priceControl('big') }}</i>.{{ cprice | priceControl('small') }}</span></p>
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
                <h3>￥<span>{{ cprice | priceControl('big') }}</span>.{{ cprice | priceControl('small') }}</h3>
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
        <PromptBox v-show="addbox">
            <div class="addressbox">
                <div>
                    <h3>请先设置收货地址</h3>
                </div>
                <p>您还没有设置收货地址，请点击这里设置！</p>
                <img src="../../img/dog.png">
                <div>
                    <button @click="goBack()">取消</button>
                    <button @click="goAddress()">确定</button>
                </div>
            </div>
        </PromptBox>
    </div>
</template>

<script>
//消息框的组件
import PromptBox from '../../components/PromptBox.vue';

//引入请求数据
import { findUeserAddress } from "../../servers/shoppingserver.js";


export default {
    props:{
        buy:Array
    },
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
            cbox:false,//复选框的开关
            bclass:'icon-fuxuankuang',//复选框的状态
            addbox:false,//添加收货地址提示框
        }
    },
    computed:{
        cprice(){
            let arr=0;
            if (this.buy) {
                this.buy.map(item => {
                    return arr += item.gnum * item.gprice;
                });
            }
            if(this.cbox){
                arr+=0.3;
            }
            return arr;
        }
    },
    methods:{
        //返回到购物车
        goBack(){
            this.$router.push({name:'Shopping'});
        },
        //跳转到添加收货地址页面
        goAddress(){
            this.$router.push({name:'append-address'});
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
        },
        clickCBox(){
            this.cbox=!this.cbox;
            if(!this.cbox){
                this.bclass= "icon-fuxuankuang"
            }else{
                this.bclass="icon-fuxuankuangxuanzhong"
            }
        }
    },
    mounted(){
        //查询用户是否有收货地址
        let id=this.buy[0].uid;
        findUeserAddress(id).then(result => {
            //判断返回结果
            if(result.length==0){
                this.addbox=true;
            }else{
                console.log(1);
            }
        });
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
    padding-right: 10px;
    font-size: 13px;
    color: #666666;
    margin: 10px 0;
}
.address>div>p:last-of-type{
    font-size: 13px;
    color: #FD7E84; 
}
.goods{
    overflow: hidden;
    background: rgb(245,245,245);
}
.goods>li{
    padding: 12px 15px;
    box-sizing: border-box;
    height: 130px;
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
    padding-bottom:48px;
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
.infolist>li:last-of-type i:first-of-type{
    font-size: 18px;
    background: #fff;
    margin: 0 4px;
}
.infolist>li:last-of-type i:last-of-type{
    margin: 0 16px 0 0;
}
.result{
    width: 100%;
    height: 48px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
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
.addressbox{
    width:250px;
    height:320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background:#fff;
    z-index: 2;
    border-radius: 4px
}
.addressbox>div:first-of-type{
    height:50px;
    border-radius: 4px 4px 0 0;
    background-image: radial-gradient(86% -142%, #FF616C 73%, #FD8872 100%);
}
.addressbox div h3{
    height:50px;
    text-align: center;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: normal;
    line-height: 50px;
}
.addressbox p{
    font-size: 14px;
    text-align: left;
    margin: 16px 40px;
    color: #666666;
}
.addressbox>img{
    margin:0 75px;
}
.addressbox>div:last-child{
    padding: 25px;
    display: flex;
    justify-content: space-between
}
.addressbox button{
    width:90px;
    height:30px;
    border: 0;
    outline: 0;
    background-image: radial-gradient(17% 35%, #FE8171 18%, #FE706E 100%);
    color: #fff;
    font-size: 16px;
    border-radius: 100px;
    /* margin:16px 25px 0 25px; */
}
</style>
