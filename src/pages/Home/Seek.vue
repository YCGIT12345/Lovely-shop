<template>
    <div class="seek">
        <header class="header-box">
		  	<span @click="spanAction"><i class="iconfont icon-back_light"></i></span>
	  		<div>
                <i class="iconfont icon-search_light"></i>
				<input type="text" placeholder=" 请输入商品名 / 店铺 "/>
			</div>
		</header>
        <my-centent>
            <div class="history">
                <p>历史搜索<i class="iconfont icon-delete_light"></i></p>
                <ul>
                    <li>沐浴露</li>
                    <li>123</li>
                    <li>宠物沐浴露</li>
                    <li>123213</li>
                    <li>宠物</li>
                    <li>123</li>
                    <li>宠物沐浴露</li>
                </ul>
            </div>
            <div class="hotList">
                <p>热门推荐</p>
                <ul>
                    <li v-for="item in 10" :key="item">
                        <div class="boximg">
                            <img src="../../../public/static/imgs/hot/2018070211435736435.png"/>
                        </div>
                        <div class="boxlist">
                            <h3>宠物零食宝路幼犬牛肉妙鲜包湿粮85g*12包多口味狗狗零食</h3>
                            <span>¥ 39.90</span>
                            <p>互动:(99%好评）售出:233<i class="iconfont icon-cart_light"></i></p>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </my-centent>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        spanAction(){
            this.$router.back()
        }
    }
}
</script>
<style scoped>  
.seek{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
}
.header-box span{
    left: .12rem;
}
.header-box div input{
    padding-left: .25rem;
}
.header-box div i{
    position: absolute;
    left: .50rem;
}
.history{
    background: #fff;
}
.history>p, .hotList>p{
    line-height: .40rem;
    padding: 0 .20rem;
}
.history p i{
    float: right;
}
.history ul{
    width: 80%;
    overflow: hidden;
    padding-left: .20rem;
    padding-bottom: .10rem;
}
.history ul li{
    line-height: .20rem;
    float: left;
    margin: .05rem;
    padding: .05rem;
    background: #F5F5F5;
    border-radius: .06rem;
}
.hotList{
    background: #FFFFFF;
}
.hotList ul li{
    width: 92%;
    height: 1.2rem;
    margin: 0 .15rem;
    border-bottom:1px solid #E5E5E5; 
    display: flex;
}
.boximg{
    width: .90rem;
    margin-top: .1rem
}
.boximg img{
    width: 100%;
}
.boxlist{
    flex: 1;
    margin-top: .1rem;
    margin-left: .10rem;
    line-height: .3rem;
}
.boxlist h3{
    font-size: .15rem;
    color: #333333;
    line-height: .18rem;
    font-weight: 600;
}
.boxlist>span{
    font-size: .18rem;
    color: #FC4047;
}
.boxlist>p{
    font-size: .12rem;
    color: #999999;
    position: relative;
}
.boxlist>p i{
    position: absolute;
    right: .10rem;
    bottom: 0;
    color: #FC4047;
    font-size: .20rem;
}

</style>


