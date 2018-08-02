<template>
<div>
  	<div class="home">

      	<header class="header-box">
		  	<span class="locationbtn" @click="locationAction"><i class="iconfont icon-location_light"></i></span>
	  		<div>
				<input type="text" @click="inputBtnAction" placeholder=" 请输入商品名 / 店铺 "/>  
			</div>
			<span class="settingbtn" @click="settingAction"><i class="iconfont icon-settings_light"></i></span>
		</header>

		<my-centent>
			<swiper-container class="container" ref="container">
				<swiper-slide v-for="(item,index) in bannerimg" :key="index" class="slide">
					<img :src="item.img"/>
				</swiper-slide>
			</swiper-container>

			<div class="group">
				<div class="group-dog">
					<div class="dogbox">
						<p>进群</p>
						<p>享专属福利</p>
					</div>
					<img src="../../../public/static/imgs/group/img04.png" class="groupimg">
				</div>
				<div class="group-cat">
					<div class="catbox">
						<p>进群</p>
						<p>享专属福利</p>
					</div>
					<img src="../../../public/static/imgs/group/img03.png" class="groupimg">
				</div>
			</div>
			<ul class="discount">
				<li v-for="(item,index) in 4" :key="index" @click="gotoTicket">优惠券</li>
			</ul>


			<my-given></my-given>
			<my-suit></my-suit>
		</my-centent>


		
  	</div>

	<transition name="location">
		<router-view></router-view>
	</transition>
	
</div>
</template>

<script>
import Suit from '../../pages/Home/Suit.vue'
import Given from '../../pages/Home/Given.vue'

export default {
	components:{
		'my-suit':Suit,
		'my-given':Given
	},
	data(){
		return{
			bannerimg:[
				{
					id:1,
					img:"./static/imgs/banner/banner01.jpg",
				},
				{
					id:2,
					img:'http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath1532398198.jpg'
				},
				{
					id:2,
					img:'http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath1529672558.jpg'
				}
			]
		}
	},
	methods:{
		//定位事件
		locationAction(){
			this.$router.push({
				name:'Location'
			})
		},
		//搜索事件
		inputBtnAction(){
			this.$router.push({
				name:'Seek'
			})
		},
		//设置事件
		settingAction(){
			alert("设置")
		},
		//去购物卷页面
		gotoTicket(){
			this.$router.push({
				name:'ticket'
			})
		}
	},
	mounted(){

	},
}
</script>

<style scoped>
.container{
	width: 100%;
	height: 1.61rem;
	background: fuchsia;
}
.container img{
	width: 100%;
}
.group{
	width: 100%;
	height:.82rem;
	display: flex;
}
.group .group-dog{
	flex: 1;
	background: #FEE39E;
	position: relative;
}
.group .group-cat{
	flex: 1;
	background: #ED5988;
	position: relative;
}
.group-dog img{
	width: 100px;
	top: -10px;
	right: -10px;
}
.group-cat img{
	width: 50px;
	bottom: 5px;
	right: 10px
}
.groupimg{
	position: absolute;
	
}
.dogbox{
	font-family: SourceSansPro-Regular;
	font-size: 14px;
	color: #6D8A84;
	position: absolute;
	top: 10px;
	left: 10px;
}
.catbox{
	font-family: SourceSansPro-Regular;
	font-size: 14px;
	color: #FFFFFF;
	position: absolute;
	top: 10px;
	left: 10px;
}




.discount{
	margin-top: .30rem;
	width: 100%;
	height: .60rem;
	display: flex;
}
.discount li{
	flex: 1;
	opacity: 0.7;
	background: #F58B13;
	border: 0 solid #FFFFFF;
	border-radius: .02rem;
}



@keyframes location-in{
	0%{transform: translateX(100%);}
	100%{transform: translateX(0%);}
}
@keyframes location-on{
	0%{transform: translateX(0%);}
	100%{transform: translateX(100%);}
}
.location-enter-active {
  animation: location-in .5s;
}
.location-leave-active {
  animation: location-on .5s ;
}
</style>
