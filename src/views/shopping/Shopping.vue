<template>
  <div>
    <div class="shopping">
      <header>
        <h1>购物车(购物车数量)</h1>
        <span @click="deletelist()">{{dword}}</span>
      </header>
      <my-centent>
        <div v-if="flag" class="deletelist">
          <span><i></i>清理</span>
          <div>
            <p>移入收藏夹</p>
            <p @click="delgoods()">删除</p>
          </div>
        </div>
        <ul class="buylist">
          <li @click="buttoncolor()">
            <span>
              <i :class="{active:show}"></i>
            </span>
            <div class="list-content">
              <img >
              <div>
                <p class="title">宝路成犬妙鲜包100g*12包肉粒湿粮拌饭泰迪金毛宠物狗零食</p>
                <div>
                  <p class="price">￥<span>19</span>.9</p>
                  <div class="count">
                    <button @click="reduce()">-</button>
                    <input type="number" value="1" />
                    <button @click="add()">+</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        
        </ul>
      </my-centent>
      <div class="account">
        <div class="bleft">
          <span>
            <i></i>
          </span>
          <p>全选</p>
        </div>
        <div class="bright">
          <p>合计：<span>￥<i>0</i></span></p>
          <button @click="goOrder()">结算(0)</button>
        </div>
      </div>
    </div>
    <PromptBox v-show="dg">
      <div class="dg-box">
        <p>确认要删除该商品吗？</p>
        <div>
          <button @click="judgeDel('no')">我再想想</button>
          <button @click="judgeDel('yes')">确定</button>
        </div>
      </div>
    </PromptBox>
    <router-view></router-view>
  </div>
</template>

<script>
import PromptBox from '../../components/PromptBox.vue';

export default {
  components:{
    PromptBox
  },
  data() {
    return {
    	dword:'管理',
      flag:false,
      show:false,
      dg:false,
      id:0,
    }
  },
  methods:{
    //确认删除购物车数据
    judgeDel(str){
      if(str=='no'){
        this.dg=false;
      }else{
        //请求数据

        //请求数据后删除
        this.dg=false;
        this.deletelist();
      }
      
    },
    //删除按钮
    delgoods(){
      this.dg=!this.dg;
    },
    //显示删除管理
  	deletelist(){
      this.flag=!this.flag;
      if(this.flag){
        this.dword='完成';
      }else{
        this.dword='管理';
      }
    },
    //选择商品
    buttoncolor(){
      this.show=!this.show;
    },
    reduce(){
      
    },
    //确认订单页面
    goOrder(){
      this.$router.push({name:'buy-order'});
    }
  },
  computed:{
    number(){
      
    }
  },
  mounted(){
    //判断用户是否登录,如果没有就去登录页面

    //
  }
}
</script>

<style scoped>
.shopping{
  position: absolute;
  top: 0;
  left:0;
  bottom:0;
  width:100%;
}
.centent {
  background-color: #fff!important;
  bottom:97px!important;
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
.buylist{
	overflow: hidden;
}
.buylist > li {
  background-color: #fff;
  height: 120px;
}
.buylist > li > span{
	float: left;
  width: 50px;
  height: 120px;
  line-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buylist > li > span > i,.account>.bleft>span>i{
  display: block;
  width: 18px;
  height: 18px;
  border: 1px solid #979797;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
}
.buylist > li > span i.active{
  border-width: 5px;
}
.list-content{
	height: 100%;
  padding: 14px 18px 16px 0;
  margin-left: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #F5F5F5; 
}
.list-content>img{
  float: left;
  width: 88px;
  height: 90px;
  background-color: pink;
}
.list-content>div{
  float: left;
  margin-left: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.list-content>div>.title{
	width: 196px;
	font-size: 13px;
}
.list-content>div .price{
	font-size: 13px;
	color: #FD3F48;
	float: left;
}
.list-content>div .price>span{
	font-size: 18px;
}
/*加减数量按钮*/
.count{
	float: right;
	border: 1px solid #D8D8D8;
	border-radius: 5px;
	height: 23px;
	box-sizing: border-box;
}
.count>button{
	outline: none;
	border: 0;
	background-color: #FFFFFF;
	color: #D8D8D8;
	width: 20px;
	height: 16px;
	border-radius: 5px;
	line-height: 16px;
	box-sizing: border-box;
}
.count>input{
	width: 34px;
	height: 21px;
	outline: none;
	border: 0;
	color: #D8D8D8;
	line-height: 20px;
	border-left: 1px solid #D8D8D8;
	border-right: 1px solid #D8D8D8;
	text-align: center;
}

/*结算*/
.account{
	width: 100%;
  height: 48px;
  background:#fff;
  position: absolute;
  bottom: 48px;
  left: 0;
  border-bottom: 1px solid #cccccc;
}
.account .bleft{
	float: left;
}
.account>.bleft>span{
	width: 50px;
	height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
}
.account>.bleft>p{
	float: left;
	line-height: 48px;
	font-size: 13px;
	color: #666666;
}
.account>.bright{
	float: right;
}
.account>.bright>p{
	float: left;
	line-height: 48px;
	color: #666666;
	margin-right: 20px;
}
.account>.bright>p>span{
	font-size: 13px;
	color: #FD3F48;
}
.account>.bright>p>span>i{
	font-size: 18px;
	color: #FD3F48;
	font-style: normal;
}
.account>.bright>button{
	width: 100px;
	height: 48px;
	float: left;
	outline: none;
	border:none;
	color: #FFFFFF;
	background-image: radial-gradient(86% -142%, #FF616C 73%, #FD8872 100%);
}
/* 删除 */
.deletelist{
  height: 48px;
  background: #fff;
}
.deletelist>span{
  float: left;
  height: 48px;
  margin-left: 20px;
  line-height: 48px;
  font-size: 14px;
  color: #666666;
}
.deletelist>span>i{
  float: left;
  background: url(../../img/delete.png) no-repeat;
  background-size:20px;
  width:20px;
  height: 20px;
  margin-top: 12px;
  margin-right: 10px;
}
.deletelist>div{
  float: right;
  height: 48px;
  padding: 10px 0;
  box-sizing: border-box;
}
.deletelist>div>p{
  float: left;
  font-size: 15px;
  color: #FD7E70;
  line-height: 26px;
  height: 26px;
  padding: 0 20px;
  border-radius: 20px;
  border: 1px solid #FD7E70;
  margin-right: 15px;
}
.dg-box{
  width: 300px;
  height: 123px;
  border-radius: 5px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #ffffff;
  z-index: 2;
  text-align: center;
}
.dg-box>p{
  font-size: 15px;
  color: #333333;
  margin:27px 0;
}
.dg-box>div{
  padding:0 40px;
}
.dg-box>div>button{
  width:90px;
  height: 30px;
  text-align: center;
  border-radius: 100px; 
  outline: 0;
  border: 0;
  font-size: 15px;
  color: #FFFFFF;
}
.dg-box>div>button:first-child{
  background: #D8D8D8;
  margin-right:39px;
}
.dg-box>div>button:last-child{
  background-image: radial-gradient(86% -142%, #FF616C 73%, #FD8872 100%);
}
</style>