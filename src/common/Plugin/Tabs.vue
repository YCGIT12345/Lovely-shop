<template>
    <nav class="tabs">
        <li v-for="(item,index) in tabList" @click="tabsAction(index)">
            <i></i>
            <span>{{item.name}}</span>
        </li>
    </nav>
</template>
<script>
export default {
    data(){
        return{
            tabList:[
                    {name:'首页',src:'',path:"/home"},
                    {name:'分类',src:'',path:"/classify"},
                    {name:'购物车',src:'',path:"/shopping"},
                    {name:'我的',src:'',path:"/mine"}
                ]
        }
    },
    methods:{
        tabsAction(index){
            let path = this.tabList[index].path;
            this.$router.push(path)
        }
    }
}    
</script>
<style>
.tabs{
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #ffffff;
    display: flex;
}
.tabs li{
    flex:1;
    line-height: 49px;
    text-align: center;
}
</style>