<template>

  	<div class="home">

      	<header class="header-box">
		  	<span class="location" @click="locationAction"><i class="iconfont icon-location_light"></i></span>
	  		<div>
				<input type="text" placeholder=" 请输入商品名 / 店铺 "/>  
			</div>
			<span class="setting"><i class="iconfont icon-settings_light"></i></span>
		</header>
		

		<my-centent>
			<div class="banner">轮播图</div>
			<div class="group">
				<div class="group-dog">狗群</div>
				<div class="group-cat">猫群</div>
			</div>
			<ul class="discount">
				<li v-for="(item,index) in 4" :key="index">优惠券</li>
			</ul>

			<div class="givenbox">
				<div class="given"><p>优选推荐</p></div>
				<ul>
					<li class="bigLi">溜汪</li>
					<li class="bigLi">撩猫</li>
					<li class="bigLi">海淘精选好货</li>
					<li class="smallLi">宠上“新”</li>
					<li class="smallLi">萌宠好货</li>
					<li class="smallLi">热卖爆款</li>
					<li class="smallLi">省钱搭配</li>
				</ul>
			</div>
			<div class="suitbox">
				<div class="suit"><p>品质大牌</p></div>
				<ul>
					<li class="suitLi">WAN PY</li>
					<li class="suitLi">HEI bI TOU</li>
					<li class="suitLi">WELLNESS</li>
					<li class="suitLi">ALICE D</li>
				</ul>
			</div>
		</my-centent>


		
  	</div>

</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{
	locationAction(){
		
	}
  }
}
</script>

<style scoped>
.banner{
	width: 100%;
	height: 161px;
	background: fuchsia;
}
.group{
	width: 100%;
	height:82px;
	display: flex;
}
.group .group-dog{
	flex: 1;
	background: #FEE39E;
}
.group .group-cat{
	flex: 1;
	background: #ED5988;
}
.discount{
	margin-top: 30px;
	width: 100%;
	height: 60px;
	display: flex;
}
.discount li{
	flex: 1;
	opacity: 0.7;
	background: #F58B13;
	border: 0 solid #FFFFFF;
	border-radius: 2px;
}
.givenbox{
	width: 100%;
}
.given{
	width: 100%;
	height: 50px;
	line-height: 50px;
}
.given p{
	text-align: center;
	position: relative;
}
.given p::after{
	display: block;
	content: '';
	width: 32%;
	height: 1px;
	background: rgba(102,102,102,0.50); 
	position: absolute;
	top: 25px;
	left: 20px;
}
.given p::before{
	display: block;
	content: '';
	width: 32%;
	height: 1px;
	background: rgba(102,102,102,0.50); 
	position: absolute;
	top: 25px;
	right: 20px;
}
.givenbox ul{
	overflow: hidden;
}
.givenbox ul .bigLi{
	width: 50%;
	height: 175px;
	float: left;
	background: #F3F3F3;
}
.givenbox ul .smallLi{
	width: 50%;
	height: 88px;
	float: left;
	background: #E9E6E1;
}

.suit{
	width: 100%;
	height: 50px;
	line-height: 50px;
}
.suit p{
	text-align: center;
	position: relative;
}
.suit p::after{
	display: block;
	content: '';
	width: 32%;
	height: 1px;
	background: rgba(102,102,102,0.50); 
	position: absolute;
	top: 25px;
	left: 20px;
}
.suit p::before{
	display: block;
	content: '';
	width: 32%;
	height: 1px;
	background: rgba(102,102,102,0.50); 
	position: absolute;
	top: 25px;
	right: 20px;
}
.suitbox ul{
	overflow: hidden;
}
.suitbox ul .suitLi{
	width: 100%;
	height: 134px;
	font-size: 22px;
	border-top:1px solid #ED5988
}
</style>
