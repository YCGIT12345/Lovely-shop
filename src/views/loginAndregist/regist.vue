<template>
    <div id="login">
        <div class="header">
            <a class="iconfont icon-icon4" @click="goBack()">返回</a>
        </div>
        <div class="center"><a href="#">快速注册</a></div>
        <div class="warp">
            <form action="">
               <ul class="list">
                   <li><input type="text" placeholder="手机号码"> </li>
                   <li><input type="text" placeholder="验证码"><i class="verification">获取验证码</i> </li>
                   <li><input :type="typekind" placeholder="请输入密码"><i class="iconfont icon-biyan icon" @click="changeType"></i> </li>           
               </ul>
                <div class="loginBox"> <input type="button" value="下一步"> </div>     
            </form>
             <div class="footer">
                <p>点击"下一步"，即代表你已阅读并同意《<a href="##">萌店商城用户协议</a>》</p>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            typekind:"password"
        }
    },
    mounted(){

    },
    methods:{
        goBack(){
            window.history.go(-1);
        },
        changeType(){
           if(this.typekind=="password"){
                this.typekind = "text";
           }else{
               this.typekind = "password";
           }
        }
    }
}
</script>


<style scoped>
#login{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background: #fff;
}
.header{
    height: 49px;
    line-height:49px;
    width: 100%;
    background-image: radial-gradient(86% -142%, #FF616C 73%, #FD8872 100%);
}
.header>a {
  display: block;
  width: .8rem;
  height: .49rem;
  line-height: .49rem;
  margin-left: 21px;
  color: #fff;
}
.center>a{display:block;width:.8rem;height:.49rem;line-height:.49rem;position: absolute;top:0;left:45%;color:#fff;font-size: .16rem}
.warp{
    width: 100%;
    bottom: 0;
    z-index: 10;
    background: #fff;
    position: relative;
}
.warp form{
    padding: 0 15px;  
}
.registQuick{
    font-size: 20px;
    color: #333333;
    letter-spacing: -0.28px;
    height: 88px;
    line-height: 88px;
}
.list{
    margin-top: 23px;
}
.list li{
    height: 62px;
    line-height: 62px;
    border-bottom: 1px solid #F5F5F5;
    position: relative;
}
.list li input{
     font-size:14px;
}
.list li i{
    float: right;
}
.verification{
    height: 28px;
    width: 81px;
    border: 1px solid #FF696D;
    border-radius: 4px;
    color: #FF696D;
    line-height: 28px;
    text-align: center;
    margin-top: 18px;
}
.icon{
    opacity: 0.2;
}
.list li span{
    margin-right: 9.5px;
    font-size: 16px;
    height: 38px;
    width: 100px;
    text-align: right;
    display: inline-block;
}
.loginBox{
    text-align: center;
    padding-top: 43px;
}
.loginBox input{
    width: 100%;
    height: 42px;
    background-image: radial-gradient(86% -142%, #FF616C 73%, #FD8872 100%);
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    font-family: SourceSansPro-Regular;
}
.footer{
    width: 100%;
    position: relative;
    display: inline-block;
    font-size: 10px;
    color: #999999;
    letter-spacing: -0.32px;
    text-align: center;
    padding-top: 200px;
    z-index: 10;
    background: #fff;
    height: 20px;
}
.footer a{
    color:#ff898c;
    font-size: 10px;
    letter-spacing: -0.32px;
}
</style> 

