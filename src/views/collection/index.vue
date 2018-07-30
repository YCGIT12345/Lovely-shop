<template>
    <div id="collection">
        <div class="header">
            <i class="iconfont icon-icon4" @click="goBack()"></i>
            <h3 class="foods" @click="changePath()" :class="{active:$store.state.flag==0}">宝贝收藏</h3>
            <h3 class="store" @click="changeName()" :class="{active:$store.state.flag==1}">店铺收藏</h3>
            <p @click="manage">{{$store.state.show}}</p>
        </div>
        <div class="main">
                <router-view :class="{widthb:$store.state.change==0,widtha:$store.state.change==1}">
                </router-view>
        </div>
        <div class="footer">
              <div class="disAttention" v-show="$store.state.change==1&&$store.state.flag==1">
                  <span @click="deleteStore()">取消关注</span>
              </div>
              <div class="goodsbox" v-show="$store.state.change==1&&$store.state.flag==0">
                  <div class="allcheck">
                      <span @click="allCheaked()" :class="{activeAction:$store.state.boolean==true}"></span><i>全选</i>
                  </div>
                  <div class="delete" @click="deleteFoods()">
                         删除
                  </div>
              </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      goods: this.$store.state.goods,
      flag: 1
    };
  },
  methods: {
    goBack(){
      window.history.go(-1);
    },
    changeName() {
      this.$router.push({ name: "store-c" });
    },
    changePath() {
      this.$router.push({ name: "foods-c" });
    },
    manage() {
      if (this.$store.state.show == "管理") {
        this.$store.dispatch("modifychange", "1");
        this.$store.dispatch("modifyshow", "完成");
      } else {
        this.$store.dispatch("modifychange", "0");
        this.$store.dispatch("modifyshow", "管理");
       
       
      }
    },
    deleteFoods(){
       this.$store.dispatch("modifydelete", "0");
    },
    deleteStore(){
       this.$store.dispatch("modifydeletestore", "0");
    },
    allCheaked(){
      if(this.$store.state.boolean){
        this.$store.dispatch("modifyAllgoods", false);
      }else{
        this.$store.dispatch("modifyAllgoods", true);
      }
    }
  }
};
</script>



<style scoped>
.widtha {
  width: 342px;
  float: right;
}
.widthb {
  width: 375px;
  float: right;
}
.header {
  height: 49px;
  line-height: 49px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-image: radial-gradient(86% -142%, #ff616c 73%, #fd8872 100%);
}
.header i {
  display: inline-block;
  width: 15.6px;
  height: 15.6px;
  margin-left: 21px;
  color: #fff;
}
.foods {
  position: absolute;
  left: 87px;
  top: 0px;
  font-size: 18px;
  color: #fff;
  height: 46px;
}
.store {
  position: absolute;
  left: 200px;
  top: 0px;
  font-size: 18px;
  color: #fff;
  height: 46px;
}
.header p {
  position: absolute;
  left: 322px;
  top: 0px;
  font-size: 14px;
  color: #fff;
}
.main {
  position: absolute;
  top: 49px;
  left: 0;
  width: 100%;
  padding-bottom: 66px;
}
.active {
  border-bottom: 3px solid #fff;
}
.footer {
  position: fixed;
  bottom: 0px;
  z-index: 10;
  height: 60px;
  width: 100%;
  background: #fff;
  text-align: center;
}
.disAttention span {
  height: 44px;
  width: 204px;
  margin-bottom: 12px;
  background-image: radial-gradient(86% -142%, #ff616c 73%, #fd8872 100%);
  border-radius: 100px;
  display: inline-block;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: -0.37px;
  text-align: center;
  line-height: 44px;
}
.allcheck{
  float: left;
  font-size: 13px;
  height: 60px;
  width: 80px;
  line-height: 60px;
}
.allcheck span{
  height: 15px;
  width: 15px;
  border: 1px solid #979797;
  float: left;
  border-radius: 50%;
  margin:21px 5px 0 15px ;
}
.allcheck i{
  float: left;
  height: 17px;
  line-height: 17px;
  margin-top: 23px;
}
.delete{
  background-image: radial-gradient(86% -142%, #FF616C 73%, #FD8872 100%);
border-radius: 100px;
float: right;
height: 30px;
width: 80px;
font-size: 15px;
text-align: center;
line-height: 30px;
margin-top: 15px;
color: #fff;
margin-right: 10px;
}
.activeAction{
  border: 0;
  background: #FF666D;
  border: 1px solid #FF666D;
}
</style>

