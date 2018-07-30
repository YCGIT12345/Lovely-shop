<template>
    <div id="login">
        <div class="header">
            <i class="iconfont icon-icon4" @click="goBack()"></i>
        </div>
        <div class="warp">
            <form action="">
               <ul class="list">
                   <li> <i class="iconfont icon-shouji"></i><input type="text" placeholder="手机号"> </li>
                   <li> <i class="iconfont icon-mima"></i><input type="text" placeholder="密码"> </li>                    
               </ul>
                <div class="loginBox"> <input type="button" value="登录"> </div> 
                <p class="otherBox">
                    <b @click="gotoregist()">新用户注册</b>
                    <i>忘记密码？</i>
                </p>    
            </form>
        </div>
        <div class="footer">
            <p>
                第三方登录
            </p>
            <ul>
                <li>
                    <a href="##" class="QQ"></a>
                </li>
                 <li>
                    <a href="##" class="weixin"></a>
                </li>
                 <li>
                    <a href="##" class="blog"></a>
                </li>
                 <li>
                    <a href="##" class="zhifubao"></a>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goBack(){
      window.history.go(-1);
    },
    gotoregist(){
      this.$router.push({name:"regist"})
  }
  },
  
};
</script>


<style scoped>
.header {
  height: 49px;
  line-height: 49px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: radial-gradient(86% -142%, #ff616c 73%, #fd8872 100%);
}
.header i {
  display: inline-block;
  width: 15.6px;
  height: 15.6px;
  margin-left: 21px;
  color: #fff;
}
.warp {
  position: absolute;
  left: 0;
  width: 100%;
  top: 49px;
  overflow: hidden;
}
.warp form {
  padding: 0 15px;
}
.list {
  margin-top: 23px;
}
.list li {
  height: 58px;
  line-height: 58px;
  border-bottom: 1px solid #f5f5f5;
}
.list li input {
  font-size: 14px;
}
.list li i {
  margin-right: 9.5px;
  font-size: 20px;
}
.loginBox {
  text-align: center;
  padding-top: 43px;
}
.loginBox input {
  width: 100%;
  height: 42px;
  background-image: radial-gradient(86% -142%, #ff616c 73%, #fd8872 100%);
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  font-family: SourceSansPro-Regular;
}
.otherBox b {
  float: left;
  font-weight: normal;
  font-family: SourceSansPro-Regular;
  font-size: 12px;
  color: #999999;
  letter-spacing: -0.36px;
}
.otherBox {
  margin-top: 24px;
}
.otherBox i {
  float: right;
  font-size: 12px;
  color: #999999;
  letter-spacing: -0.36px;
}
.footer {
  position: absolute;
  left: 0;
  top:570px;
  bottom: 0;
  text-align: center;
  width: 100%;
}
.footer ul {
  margin: 0 80px;
  border-top: 1px solid #f4f4f4;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer ul li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 64px;
}
.footer p {
  height: 16px;
  padding-bottom: 5px;
  line-height: 14px;
  font-family: PingFangSC-Regular;
  font-size: 11px;
  color: #999999;
  letter-spacing: -0.33px;
}
.footer ul li a {
  background: url(../../img/login-icon.jpg) no-repeat 0px 0px;
  background-size: 246px 43px;
  height: 38px;
  width: 38px;
  display: block;
}
.footer ul li .weixin {
  background-position: -65px 0px;
}
.footer ul li .blog {
  background-position: -142px -2px;
}
.footer ul li .zhifubao {
  background-position: -208px 0px;
}
</style> 

