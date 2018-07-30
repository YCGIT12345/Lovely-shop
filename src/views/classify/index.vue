<template>
    <div id="recommend">
        <div class="header">
            <i class="iconfont icon-icon4" @click="goBack()"></i>
            <h3>
                推荐分类
            </h3>
        </div>
        <div class="page">
            <div class="nav">
            <ul>
                <li v-for="(item,index) in list" :key="index" @click="changePath(item.path,index)" :class="{active:flag==index}">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view>

            </router-view>
        </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {name:"推荐",path:"recommend-a"},
                {name:"生活",path:"life-a"},
                {name:"主食",path:"food-a"},
                {name:"护理",path:"nurse-a"},
                {name:"服饰",path:"dress-a"},
                {name:"清洁",path:"clean-a"},
                {name:"医药",path:"medicine-a"},
                {name:"玩具",path:"toy-a"},
                {name:"零食",path:"snacks-a"}
            ],
            flag:0
        }
    },
    mounted(){

    },
    methods:{
        goBack(){
            
        },
        changePath(path,index){
            this.$router.push({name:path})
            this.flag = index;
        }
    }
}
</script>


<style scoped>
.header{
    height: 49px;
    line-height: 49px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: radial-gradient(86% -142%, #FF616C 73%, #FD8872 100%);
}
.header i{
    display: inline-block;
    width: 156px;
    height: 156px;
    margin-left: 21px;
    color: #fff;
}
.header h3{
    display: inline-block;
    color: #fff;
}
.page{
    position: absolute;
    top: 49px;
    width: 100%;
    bottom: 0;
}
.nav ul li{
    height: 63px;
    width: 91px;
    background: #f5f5f5;
    color: #333;
    border-top: 1px solid #E5E5E5;
    border-right: 1px solid #E5E5E5;
    border-left: 3px solid #f5f5f5;
    line-height: 63px;
    text-align: center;
}
.content{
    position: absolute;
    top: 0;
    left: 91px;
    right: 0;
    background: #fff;
    overflow: hidden;
}
.page .nav ul .active{
    border: 0;
    border-left:3px solid #FC4047;
    background: #fff !important;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
}
</style> 


