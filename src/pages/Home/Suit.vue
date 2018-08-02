<template>
<div class="suitbox">
	<div class="suit"><p>品质大牌</p></div>
	<ul>
		<li class="suitLi" v-for="item in suitimg" :key="item.name" @click="shops_page(item.name)">
			<img :src="item.img">
		</li>
	</ul>
</div>
</template>
<script>
export default {
    data(){
        return{
            suitimg:[
				{
					id:1,
					name:'WAN PY',
					img:'./static/imgs/suit/B6Y64BXRNBNE_03_03.jpg'
				},
				{
					id:2,
					name:'HEI bI TOU',
					img:'./static/imgs/suit/B6Y64BXRNBNE_03_05.jpg'
				},
				{
					id:3,
					name:'WELLNESS',
					img:'./static/imgs/suit/B6Y64BXRNBNE_03_06.jpg'
				},
				{
					id:4,
					name:'ALICE D',
					img:'./static/imgs/suit/B6Y64BXRNBNE_03_07.jpg'
				}
			]
        }
	},
	methods:{
		shops_page(name){
			this.$router.push({path:'/home/shops',query:{name:name}});
		}
	}
}
</script>
<style>
.suit{
	width: 100%;
	height: .50rem;
	line-height: .50rem;
}
.suit p{
	text-align: center;
	position: relative;
}
.suit p::after{
	display: block;
	content: '';
	width: 32%;
	height: .01rem;
	background: rgba(102,102,102,0.50); 
	position: absolute;
	top: .25rem;
	left: .20rem;
}
.suit p::before{
	display: block;
	content: '';
	width: 32%;
	height: .01rem;
	background: rgba(102,102,102,0.50); 
	position: absolute;
	top: .25rem;
	right: .20rem;
}
.suitbox ul{
	overflow: hidden;
}
.suitbox ul .suitLi{
	width: 100%;
	height: 1.34rem;
	font-size: .22rem;
	border-top:1px solid #ED5988
}
</style>


