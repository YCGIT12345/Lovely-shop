<template>
  <div class="classify">
      	<header class="header-box">
		  	<span class="locationbtn">返回</span>
	  		<div>
				<h1>推荐分类</h1>
			</div>
			<span class="settingbtn">购物车</span>
		</header>
		<div class="navclassify">
			<ul class="sidebar">
				<li v-for="(item,index) in navList" :key="index"  @click="changePath(item.path,index)" :class="{active:flag==index}">
					{{item.name}}
				</li>
			</ul>
			<div ref="navcontent" class="centent">
					<div>
						<router-view></router-view>
					</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		navList:[
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
   methods:{
        goBack(){
            
        },
        changePath(path,index){
            this.$router.push({name:path})
            this.flag = index;
        }
    },
  mounted() {
	  
		this.myScroll = new IScroll(this.$refs.navcontent,{
            probeType: 3,
            click: true,
            tap: true,
        })
        this.myScroll.on('beforeScrollStart',()=>{
            this.myScroll.refresh();
        });
  },
}
</script>

<style scoped>
.navclassify{
	display: flex;
	width: 100%;
    position: absolute;
    top: 47px;
    left: 0;
	bottom: 0;
	overflow: hidden;
}
/* .sidebar{
	position: absolute;
	top: 0;
	left: 0;
} */
.sidebar li{
	width: 90px;
	height: 62px;
	background: #F5F5F5;
	border: 1px solid #E5E5E5;
	text-align: center;
	line-height: 62px;
}
ul .active{
    border: 0;
    border-left:3px solid #FC4047;
    background: #fff !important;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
}
.navcontent{
	flex: 1;
	padding-bottom: 49px;
}
.navcontent li h1{
	font-family: SourceSansPro-Regular;
	font-size: 14px;
	font-weight: normal;
	line-height: 32px;
	color: #8E8E8E;
}
.centent{
	flex: 1;
	padding-bottom: 49px;
}
</style>