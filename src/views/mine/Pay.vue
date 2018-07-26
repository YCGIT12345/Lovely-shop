<template>
    <app-content id="Pay">
        <nav class="nav">
            <li class="nav-item" :class="{active: showflag=='0'}" @click="navAction(0)">待支付</li>
            <li class="nav-item" :class="{active: showflag=='1'}" @click="navAction(1)">待发货</li>
            <li class="nav-item" :class="{active: showflag=='2'}" @click="navAction(2)">待收款</li>
            <li class="nav-item" :class="{active: showflag=='3'}" @click="navAction(3)">退款/售后</li>
        </nav>

        <ul v-show="showflag==0" class="playing-content">
            待支付
        </ul>
        <div v-show="showflag==1">待发货</div>
        <div v-show="showflag==2">待收款</div>
        <div v-show="showflag==3">退款/售后</div>
    </app-content>
</template>
<script>
export default {
    data(){
        return{
            showflag:this.$route.query.flag,
            playingdata:[],
            playing1data:[],
            playing2data:[],
            playing3data:[],
        }
    },
    mounted(){

    },
    methods:{
        navAction(flag){
            this.showflag=flag;
        }
    }
}
</script>
<style scoped>
#films{
    padding: 0 10px;
    width: 100%;
    box-sizing: border-box;
    background: #ccc;
}
.nav{
    display: flex;
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
</style>

