<template>
  <div>
    <div class="shopping">
      <header>
        <i class="iconfont icon-arrow-left"></i>
        <h1>购物车({{goodslist?goodslist.length:""}})</h1>
        <span>保存</span>
      </header>
      <!-- 删除显示的辅助框 -->
       
      <my-centent>
         <div v-if="flag" class="deletelist">
          <span><i class="iconfont icon-lightning"></i>清理</span>
          <div>
            <p>移入收藏夹</p>
            <p @click="delgoods()">删除</p>
          </div>
        </div>
        <!-- 商品列表 -->
        <ul class="buylist" ref="buylist">
          <li v-for="(item,i) in goodslist" :key="i">
            <span @click="checkgood(i)">
              <i :class="{active:item.gcheck}"></i>
            </span>
            <div class="list-content">
              <img :src="item.gpicture"  @click="checkgood(i)">
              <div>
                <p class="title" >{{item.gname}}</p>
                <div>
                  <p class="price" >￥<span>{{item.gprice | priceControl('big') }}</span>.{{item.gprice | priceControl('small') }}</p>
                  <div class="count">
                    <button @click="reduce(i)">-</button>
                    <span :value="item.gnum">{{item.gnum}}</span>
                    <button @click="add(i)">+</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </my-centent>
      <!-- 总价，全选 -->
      <div class="account">
        <div class="bleft" @click="allcheck()">
          <span>
            <i :class="{active:all}"></i>
          </span>
          <p>全选</p>
        </div>
        <div class="bright">
          <p>合计：<span>￥<i>{{ cprice | priceControl('big') }}</i>.{{ cprice | priceControl('small') }}</span></p>
          <button @click="goOrder()">结算({{checkCount}})</button>
        </div>
      </div>
    </div>
    <!-- 消息框 -->
    <PromptBox v-show="dg">
      <div class="dg-box">
        <p>确认要删除该商品吗？</p>
        <div>
          <button @click="judgeDel('no')">我再想想</button>
          <button @click="judgeDel('yes')">确定</button>
        </div>
      </div>
    </PromptBox>
    <!-- 提示框 -->
    <transition name="fade">
      <div class="tipbox" v-show="tip">
        <p ref="tipmsg">请选择要删除的商品</p>
      </div>
    </transition>
    <router-view :buy="buyArr"></router-view>
  </div>
</template>

<script>
//引入消息框的组件
import PromptBox from "../../components/PromptBox.vue";
//引入请求数据
import { getShoppingCarData,modifyGoodsNumber,delShoppingCarGoods } from "../../servers/shoppingserver.js";

export default {
  components: {
    PromptBox
  },
  data() {
    return {
      dword: "管理",
      flag: false, //管理删除的商品开关
      show: false, //按钮的开关
      dg: false, //删除消息框的开关
      id: 1, //用户id
      shopid:null, //购物车id
      goodslist: null, //购物车数据
      cprice: 0, //计算的总价
      all: false, //全选按钮的开关
      checkCount:0,  //选择商品的数量
      tip:false, //提示框的开关
      buyArr:[],  //购买商品列表
    };
  },
  watch: {
    //深度监听购物车数据的值，然后执行总数
    goodslist: {
      handler() {
        this.countPrice();
      },
      deep: true
    }
  },
  methods: {
    //确认删除购物车数据
    judgeDel(str) {
      if (str == "no") {
        this.dg = false;
      } else if (str == "yes") {
        this.deleteShopping()
        //请求数据后删除
        this.dg = false;
        this.deletelist();
      }
    },
    deleteShopping(){
      //请求数据
      //判断是否清空所有商品信息，还是某一个商品信息
      if(this.all){
        this.goodslist=[];
        delShoppingCarGoods(this.id).then(result=>{
          console.log(result);
        });
      }else{
        let arr=[];
        let iarr=[];
        this.goodslist.map((item,i)=>{
          if(item.gcheck){
            arr.push(item.id);
            iarr.push(i);
          }
        })
        iarr.map(item=>{
          this.goodslist.splice(item,1);
        })
        //请求删除购物车数据
        delShoppingCarGoods(arr).then(result=>{
          console.log(result);
        });
      }
    },
    //删除按钮
    delgoods() {
      if(this.checkCount!=0){
        this.dg = !this.dg;
      }else{
        this.$refs.tipmsg.innerHTML="请选择要删除的商品";
        this.tip=true;
        setTimeout(()=>{
          this.tip=false;
        },2000)
      }
    },
    //显示删除管理
    deletelist() {
      this.flag = !this.flag;
      if (this.flag) {
        this.dword = "完成";
        this.$refs.buylist.style="padding-top:48px;"
      } else {
        this.dword = "管理";
        this.$refs.buylist.style="padding-top:0;"
      }
    },
    //选择商品
    checkgood(i) {
      this.goodslist[i].gcheck = !this.goodslist[i].gcheck;
      let flag=true;
      this.checkCount=0;
      this.goodslist.map(item=>{
        if(!item.gcheck){
          flag=false;
        }else{
          this.checkCount++;
        }
      })
      this.all=flag;
    },
    //商品数量减少
    reduce(i) {
      let num;
      if (this.goodslist[i].gnum <= 1) {
        num=this.goodslist[i].gnum = 1;
      } else {
        num=this.goodslist[i].gnum--;
      }
      //修改商品数量数据请求
      modifyGoodsNumber(this.shopid,num).then(result=>{
        // console.log(result);
      })
    },
    //商品数量增加
    add(i) {
      let num=this.goodslist[i].gnum++;
      //修改商品数量数据请求
      modifyGoodsNumber(this.shopid,num).then(result=>{
        // console.log(result);
      })
    },
    //跳转确认订单页面
    goOrder() {
      if(this.checkCount!=0){
        this.goodslist.map(item=>{
          if(item.gcheck){
            this.buyArr.push(item);
          }
        })
        this.$router.push({ name: "buy-order" });
        this.deleteShopping()
      }else{
        this.$refs.tipmsg.innerHTML="请选择购买商品";
        this.tip=true;
        setTimeout(()=>{
          this.tip=false;
        },2000)
      }
    },
    //计算总价
    countPrice() {
      this.cprice = 0;
      if (this.goodslist) {
        this.goodslist.map(item => {
          if (item.gcheck) {
            this.cprice += item.gnum * item.gprice;
          }
        });
      }
    },
    //全选按钮
    allcheck() {
      this.all = !this.all;
      if (this.goodslist) {
        this.goodslist.map(item => {
          item.gcheck = this.all;
        });
        if(this.all){
          this.checkCount=this.goodslist.length;
        }else{
          this.checkCount=0;
        }
      }
    }
  },
  mounted() {
    //判断用户是否登录,如果没有就去登录页面
    //if(id){}else{ this.$router.push({name:''}) }
    getShoppingCarData(this.id).then(result => {
      this.goodslist = result;
      this.shopid=result[0].id;
    });
    //
  }
};
</script>


<style scoped>
.shopping {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}
.centent {
  background-color: #fff !important;
  bottom: 97px !important;
}
/*头部*/
header {
  width: 100%;
  height: 44px;
  background-image: radial-gradient(86% -142%, #ff616c 73%, #fd8872 100%);
  position: absolute;
  top: 0;
  left: 0;
}
header > h1 {
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 44px;
  font-weight: normal;
}
header > span {
  font-size: 14px;
  color: #ffffff;
  position: absolute;
  right: 20px;
  top: 14px;
}
/*购物车*/
.buylist {
  overflow: hidden;
}
.buylist > li {
  background-color: #fff;
  height: 120px;
  position: relative;
}
.buylist > li > span {
  float: left;
  width: 50px;
  height: 120px;
  line-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buylist > li > span > i,
.account > .bleft > span > i {
  display: block;
  width: 18px;
  height: 18px;
  border: 1px solid #979797;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
}
.buylist > li > span i.active,
.account > .bleft > span > i.active {
  border-width: 5px;
}
.list-content {
  height: 100%;
  padding: 14px 18px 16px 0;
  margin-left: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
}
.list-content > img {
  float: left;
  width: 88px;
  height: 90px;
  background-color: pink;
}
.list-content > div {
  float: left;
  margin-left: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.list-content > div > .title {
  width: 196px;
  font-size: 13px;
}
.list-content > div .price {
  font-size: 13px;
  color: #fd3f48;
  float: left;
}
.list-content > div .price > span {
  font-size: 18px;
}
/*加减数量按钮*/
.count {
  position: absolute;
  bottom: 18px;
  right: 18px;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  height: 22px;
  box-sizing: border-box;
}
.count > button {
  outline: none;
  border: 0;
  background-color: #ffffff;
  color: #d8d8d8;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  line-height: 20px;
  float: left;
  box-sizing: border-box;
}
.count > span {
  float: left;
  display: inline-block;
  width: 34px;
  height: 20px;
  outline: none;
  border: 0;
  color: #d8d8d8;
  line-height: 20px;
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  text-align: center;
}

/*结算*/
.account {
  width: 100%;
  height: 48px;
  background: #fff;
  position: absolute;
  bottom: 48px;
  left: 0;
  border-bottom: 1px solid #cccccc;
}
.account .bleft {
  float: left;
}
.account > .bleft > span {
  width: 50px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
}
.account > .bleft > p {
  float: left;
  line-height: 48px;
  font-size: 13px;
  color: #666666;
}
.account > .bright {
  float: right;
}
.account > .bright > p {
  float: left;
  line-height: 48px;
  color: #666666;
  margin-right: 20px;
}
.account > .bright > p > span {
  font-size: 13px;
  color: #fd3f48;
}
.account > .bright > p > span > i {
  font-size: 18px;
  color: #fd3f48;
  font-style: normal;
}
.account > .bright > button {
  width: 100px;
  height: 48px;
  float: left;
  outline: none;
  border: none;
  color: #ffffff;
  background-image: radial-gradient(86% -142%, #ff616c 73%, #fd8872 100%);
}
/* 删除 */
.deletelist {
  height: 48px;
  position:absolute;
  top:0;
  left:0;
  z-index:1;
  width:100%;
  background: #fff;
}
.deletelist > span {
  float: left;
  height: 48px;
  margin-left: 20px;
  line-height: 48px;
  font-size: 14px;
  color: #666666;
}
.deletelist > span > i {
  float: left;
  font-size: 20px;
  margin-right: 10px;
}
.deletelist > div {
  float: right;
  height: 48px;
  padding: 10px 0;
  box-sizing: border-box;
}
.deletelist > div > p {
  float: left;
  font-size: 15px;
  color: #fd7e70;
  line-height: 26px;
  height: 26px;
  padding: 0 20px;
  border-radius: 20px;
  border: 1px solid #fd7e70;
  margin-right: 15px;
}
.dg-box {
  width: 300px;
  height: 123px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  z-index: 2;
  text-align: center;
}
.dg-box > p {
  font-size: 15px;
  color: #333333;
  margin: 27px 0;
}
.dg-box > div {
  padding: 0 40px;
}
.dg-box > div > button {
  width: 90px;
  height: 30px;
  text-align: center;
  border-radius: 100px;
  outline: 0;
  border: 0;
  font-size: 15px;
  color: #ffffff;
}
.dg-box > div > button:first-child {
  background: #d8d8d8;
  margin-right: 39px;
}
.dg-box > div > button:last-child {
  background-image: radial-gradient(86% -142%, #ff616c 73%, #fd8872 100%);
}

.tipbox{
  position: absolute;
  bottom:18%;
  left:50%;
  height:24px;
  padding:5px 10px;
  font-size: 15px;
  transform: translate(-50%,0);
  line-height: 24px;
  color:#fff;
  border-radius: 5px;
  background: rgb(51, 51, 51);
}

@keyframes fadeIn {
    0%{opacity: 0;}
    100%{opacity: 1;}
}
@keyframes fadeOut {
    0%{opacity: 1;}
    100%{opacity: 0;}
}
.fade-enter-active{
    animation: fadeIn 400ms;
}
.fade-leave-active{
    animation: fadeOut 400ms;
}
</style>