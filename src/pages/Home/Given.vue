<template>
    <div class="givenbox">
        <div class="given"><p>优选推荐</p></div>
        <ul>
            <li class="bigLi" v-for="item in bigLi" :key="item.name" @click="pet_page(item.name)">
                
                <img :src="item.img">
                <div>{{item.name}}</div>
            </li>
            <li class="smallLi" v-for="item in smallLi" :key="item.name">
                <img :src="item.img"/>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bigLi:[
				{
					id:1,
					name:"溜汪",
					img:'./static/imgs/given/bigLi/img02.jpg'
				},
				{
					id:2,
					name:"撩猫",
					img:'./static/imgs/given/bigLi/img01.png'
				},
				{
					id:3,
					name:"海淘精选好货",
					img:'./static/imgs/given/bigLi/img03.png'
				},

			],
            smallLi:[
				{
					id:1,
					name:'宠上“新”',
					img:'./static/imgs/given/smallLi/20180724204512_03.jpg'
				},
				{
					id:2,
					name:'萌宠好货',
					img:'./static/imgs/given/smallLi/20180724204512_04.jpg'
				},
				{
					id:3,
					name:'热卖爆款',
					img:'./static/imgs/given/smallLi/20180724204512_07.jpg'
				},
				{
					id:3,
					name:'省钱搭配',
					img:'./static/imgs/given/smallLi/20180724204512_06.jpg'
				},
			]
        }
	},
	methods:{
		pet_page(name){
			this.$router.push({path:'/home/Recommended',query:{name:name}});        
		}
	}
}
</script>
<style>
.givenbox{
	width: 100%;
}
.given{
	width: 100%;
	height: .5rem;
	line-height: .5rem;
}
.given p{
	text-align: center;
	position: relative;
}
.given p::after{
	display: block;
	content: '';
	width: 32%;
	height: .01rem;
	background: rgba(102,102,102,0.50); 
	position: absolute;
	top: .25rem;
	left: .20rem;
}
.given p::before{
	display: block;
	content: '';
	width: 32%;
	height: .01rem;
	background: rgba(102,102,102,0.50); 
	position: absolute;
	top: .25rem;
	right: .20rem;
}
.givenbox ul{
	overflow: hidden;
}
.givenbox ul .bigLi{
	width: 50%;
	height: 1.75rem;
	float: left;
	background: #F3F3F3;
	position: relative;
	overflow: hidden;
}

.bigLi img{
	width: 155%;
	display: block;
	position: absolute;
	top: 20%;
	left: 5%;
	transform: translate3d(-20%,-20%,0);
	-webkit-transform: translate3d(-20%,-20%,0);
}
.bigLi:nth-child(2) img{
	top: 35%;
	left: 5%;
}
.bigLi:nth-child(3) img{
	width: 80%;
	top: 40%;
	left: 25%;
}
.bigLi div{
	position: absolute;
	top: 15px;
	left: 120px;
	font-family: SourceSansPro-Regular;
	font-size: 14px;
	color: #333333;
	text-align: right;
}

.bigLi:nth-child(3) div{
	top: 15px;
	left: 80px;
}
.givenbox ul .smallLi{
	width: 50%;
	height: .88rem;
	float: left;
	background: #E9E6E1;
}
.smallLi img{
	width: 100%;
	height: 88px;
}
</style>


