<template>
  <div class="classify">
      	<header class="header-box">
		  	<span class="location">返回</span>
	  		<h1>推荐分类</h1>
			<span class="setting">购物车</span>
		</header>
		<div class="navclassify">
			<ul class="sidebar">
				<li v-for="item in navList">
					{{item}}
				</li>
			</ul>
			<div ref="navcontent" class="centent">
				<ul class="navcontent">
					<li v-for="item in navList">
						<h1>{{item}}</h1>
						<div>123</div>
						<div>123</div>
						<div>123</div>
					</li>
				</ul>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		navList:['推荐','生活','主食','护理','服饰','医药','清洁','玩具','零食']
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
    top: 44px;
    left: 0;
	bottom: 0;
	overflow: hidden;
}
.sidebar li{
	width: 90px;
	height: 62px;
	background: #F5F5F5;
	border: 1px solid #E5E5E5;
	text-align: center;
	line-height: 62px;
}
.sidebar li::before{
	display: block;
	content: '';
	width: 2px;
	height: 62px;
	background: #FC4047;
	position: absolute;
	top: 0;
	left: 0;
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