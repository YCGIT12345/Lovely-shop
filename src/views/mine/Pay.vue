<template>
    <div>

        <nav class="nav">
            <li class="nav-item" :class="{active: showflag=='0'}" @click="navAction(0)">待支付</li>
            <li class="nav-item" :class="{active: showflag=='1'}" @click="navAction(1)">待发货</li>
            <li class="nav-item" :class="{active: showflag=='2'=='4'}" @click="navAction(2)">待收货</li>
            <li class="nav-item" :class="{active: showflag=='3'}" @click="navAction(3)">退款/售后</li>
        </nav>

    <app-content>
        <div id="Pay">
        <ul v-show="showflag==0" class="playing-content">
            <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>等待买家付款 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">取消订单</a>
                    <a href="#" class="red">立即付款</a>
                </div>
            </li>

            <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>等待买家付款 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">取消订单</a>
                    <a href="#" class="red">立即付款</a>
                </div>
            </li>

            <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>等待买家付款 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">取消订单</a>
                    <a href="#" class="red">立即付款</a>
                </div>
            </li>
        </ul>


        <ul v-show="showflag==1" class="playing-content">
            <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>卖家待发货 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">提醒发货</a>
                    <a href="#" class="red">联系客服</a>
                </div>
            </li>
           <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>卖家待发货 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">提醒发货</a>
                    <a href="#" class="red">联系客服</a>
                </div>
            </li>
            <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>卖家待发货 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">提醒发货</a>
                    <a href="#" class="red">联系客服</a>
                </div>
            </li>
        </ul>



        <ul v-show="showflag==(2||4)" class="playing-content">
            <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>卖家已发货 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">查看物流</a>
                    <a href="#">延长收货</a>
                    <a href="#" class="red">确认收货</a>
                </div>
            </li>
           <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>卖家已发货 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">查看物流</a>
                    <a href="#">延长收货</a>
                    <a href="#" class="red">确认收货</a>
                </div>
            </li>
            <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>卖家已发货 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">查看物流</a>
                    <a href="#">延长收货</a>
                    <a href="#" class="red">确认收货</a>
                </div>
            </li>
            
        </ul>


        <ul v-show="showflag==3" class="playing-content">
            <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>退款处理中 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">退款中</a>
                    <a href="#" class="red">联系客服</a>
                </div>
            </li>
           <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>退款处理中 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">退款中</a>
                    <a href="#" class="red">联系客服</a>
                </div>
            </li>
            <li class="paypic">
                <div class="paypic_top"><h3>疯狂小狗旗舰店</h3><span>退款处理中 ></span></div>
                <div class="paypic_center"><span><img src="../../img/img_zhifu1.jpg"></span><p>狗狗沐浴露专用香波杀菌除臭沐浴液宠物用品用品分类:全犬通用（拍二送宠物球）</p><span class="red">￥19.80</span></div>
                <div class="paypic_center1"><p>共一件商品 合计<span class="red">￥19.80</span>（含运费￥0.00）</p></div>
                <div class="paypic_bot">
                    <a href="#">退款中</a>
                    <a href="#" class="red">联系客服</a>
                </div>
            </li>
        </ul>
    </div>
    </app-content>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showflag:this.$route.params.flag,
            playingdata:[],
            playing1data:[],
            playing2data:[],
            playing3data:[],//后台数据未对接
        }
    },
    mounted(){
          console.log(this.$route.params.flag)  

    },
    methods:{
        navAction(flag){
            this.showflag=flag;
        }
    }
}
</script>
<style scoped>
#Pay{
    width: 100%;
    box-sizing: border-box;
    background: #ddd;
}
.nav{
    display: flex;
    background: #fff;
    border-top:1px solid #ccc;
    
}
.nav .nav-item{
    flex: 1;
    line-height: 45px;
    border-bottom: 1px solid #fe6e00;
    text-align: center;
    color: #6a6a6a;
}
.nav .nav-item.active{
    color: #fe6e00;
    border-bottom: 3px solid #fe6e00;
}
.red{color:#fd7c70;}

.paypic{margin-top: .1rem;background:#fff;}
.paypic_top{height:.48rem;display: flex;justify-content:space-between;align-items: center;padding:0 .1rem;}
.paypic_center{height:1.1rem;display: flex;justify-content: space-around;align-items: center;}
.paypic_center>p{width:1.6rem;}
.paypic_center>span>img{width:.9rem;height:.9rem;}
.paypic_center1{height:.4rem;text-align: right;line-height: .4rem}
.paypic_bot{height:.48rem;text-align: right;line-height: .48rem}
.paypic_bot>a{display:inline-block;width:.76rem;height:.26rem;line-height:.26rem;border-radius:.2rem;border:1px solid #000;text-align: center;margin-right: .2rem}
</style>

