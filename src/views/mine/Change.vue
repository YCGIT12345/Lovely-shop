<template>
<div>
    <nav class="header">
        <span :class="{active: showflag=='moremoney'}" @click="navAction()">返回</span>
        <span>零钱充值</span>
    </nav>
    <app-content class="content">
            <div class="card">
                <div class="card_1"><h2>储值卡</h2><p>农业银行（3333）</p><span>></span></div>
                <p>充值金额</p>
                <div class="span">
                <span><h1>￥</h1></span>
                <input type="number">
                </div>
                <div class="change"><a href="#" @click="sure">下一步</a></div>
            </div>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
    return{
           showflag:this.$route.params.moremoney,  
        }
    },
    methods:{
        navAction(){
            this.$router.push({
                name:'Mypurse'
            })
        },
        sure(){
            alert("你确定？")
        }
    }
}
</script>
<style scoped>
    .header{
        width:100%;
        height:.44rem;
        background:#FD8872;
        color:#fff;
    }
    .header>span:nth-child(1){position: absolute;top:.1rem;left:.2rem;font-size: .16rem;}
    .header>span:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        height:.44rem;
        color:#fff;
    }
    .card{
       
        height:2.95rem;
        background:#fff;
        margin:.1rem;
        border:1px solid #ccc;
        border-radius: .1rem;
    }
    .card .card_1{
        height:.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:.2rem;
        padding:0 .2rem;
    }
    .card>p{
        font-size: .16rem;
        padding:.3rem .2rem;
    }
    .span{
        height:.74rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .span>input{
        width:80%;
        height:.5rem;
        font-size: .2rem;
        border:none;
        padding-left: .2rem;
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
            color:#fff; 
            background: #FD8872;
            margin-left: .18rem;
        }
    .content{background: #eee}
</style>


