<template>
    <div>
        <nav>
            <div class="header">
                <span class="header_left" :class="{active: showflag=='money'}" @click="navAction()"><我的</span>
                <span>我的钱包</span>
                <span class="header_right" @click="detail">钱包明细</span>
            </div>
        </nav>
        <app-content>
                <div class="headerpic"><a href="#"><img src="../../img/payheader.jpg"></a></div>
                <div class="content1">
                    <p>铲屎官的零钱</p>
                    <h1>￥300.50</h1>
                </div>
                <div class="change">
                    <a href="#" @click="moremoney(moremoney)">充值</a>
                    <a href="#" @click="tixian">提现</a>
                </div>
        </app-content>
   </div> 
</template>
<script>
export default {
    data(){
    return{
           showflag:this.$route.params.money,  
        }
    },
    mounted(){
       console.log(this.$route.params.money)  
       
    },
    methods:{
        navAction(){
            // this.showflag='money';
            this.$router.push({
                name:'Mine'
            })
        },
        detail(){
           alert("请先登录")
       },
       tixian(){
           alert("滚！没钱")
       },
       moremoney(moremoney){
           this.$router.push({
                name:'Change',
                params:{
                moremoney
            }
           })
       },
    }
}
</script>
<style scoped>
    .header{
        
        height:.44rem;
        background:#FD8872;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .1rem;
        color:#fff;
        }
       .header_left{    
           font-size: .16rem;   
           color:#fff;
       }
       .headerpic{
           width:100%;
           height:1.1rem;
           margin-top: .3rem;
            position: relative;
       }
        .headerpic>a{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .headerpic>a>img{
            width:.92rem;
            height:.9rem;
             border:1px solid #ccc;
           border-radius: 50%;
           box-shadow: 1px 1px 1px #000;
        }   
        .content1{
            height:.8rem;
            text-align: center;
        }
        .content1>p{color:#ccc;}
        .content1>h1{margin-top: .2rem}
        .change{
            height:1rem;
            line-height: 1rem;
            text-align: center;
        }
        .change>a{
            display:flex;
            width:3rem;
            height:.42rem;
            justify-content: center;
            align-items: center;
            border:1px solid #ccc;
            border-radius: 3px;
            margin-top: .1rem;
            color:#000;
            margin-left: .29rem;
        }
        .change>a:hover{
            background:#FD8872;
            color:#fff;
        }
</style>

