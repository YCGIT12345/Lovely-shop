<template>
    <div class="location">
        <header class="header-box">
		  	<span class="locationbtn" @click="spanboxAction"><i class="iconfont icon-back_light"></i></span>
	  		<div>
				<h1>城市</h1>
			</div>
		</header>
        
        <my-centent>
            <div class="city">
                <div class="castAbout">
                    <i class="iconfont icon-search_light"></i>
                    <input type="text" placeholder="输入城市名称"/>
                </div>
                <div class="present"><p>当前: 深圳</p></div>
                <div class="hotCity">
                    <ul>
                        <p>热门城市</p>
                        <li v-for="item in hotCity" :key="item.name">{{item.name}}</li>
                    </ul>
                </div>
                <div class="cityList">
                    <ul v-for="item in cityList" :key="item.letter">
                        <p>{{item.letter}}</p>
                        <li v-for="(list,index) in item.data" :key="index" @click="citydataAction(list.name)">{{list.name}}</li>
                    </ul>
                </div>
            </div>
        </my-centent>
        <div class="sidebar">
            <li v-for="item in cityList" :key="item.letter" @click="cityListAction(item.letter)">
                {{item.letter}}
            </li>
        </div>
    </div>
</template>
<script>
import {getCityList} from '../../servers/homeserver.js'

export default {
    data(){
        return{
            cityList:[],
            hotCity:[
                {name:'北京市'},
                {name:'上海市'},
                {name:'广州市'},
                {name:'深圳市'},
                {name:'武汉市'},
                {name:'天津市'},
                {name:'西安市'},
                {name:'南京市'},
                {name:'杭州市'},
                {name:'成都市'},
                {name:'重庆市'}
            ]
        }
    },
    methods:{
        spanboxAction(){
            this.$router.back()
        },
        cityListAction(item){
            console.log(item);
        },
        citydataAction(item){
            console.log(item);
        }
    },
    mounted(){
        getCityList().then((result)=>{
            this.cityList = result
        });
    }
}
</script>
<style scoped>
.location{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
}
.city .castAbout{
    height: .32rem;
    background: #F5F5F5;
    display: flex;
    padding: 5px 10px;
}
.castAbout i{
    position: absolute;
    top: .13rem;
    left: .20rem;
}
.city .castAbout input{
    width: 3.40rem;
    font-size: .14rem;
    color: #333333;
    background: #FFFFFF;
    border: none;
    border-radius: .06rem;
    padding-left: .35rem;
}
.present{
    background: #FFFFFF;
    width: 100%;
}
.present p{
    font-size: .13rem;
    color: #333333;
    line-height: .32rem;
    padding-left: .10rem;
}
.hotCity{
    background: #e5e5e5;
}
.hotCity ul{
    margin: 0 .05rem;
    overflow: hidden;
}
.hotCity ul p{
    font-size: 15px;
    color: #333333;
    line-height: .3rem;
    padding-left: .10rem;
}
.hotCity ul li{
    opacity: 1 !important;
    width: 30%;
    margin:.07rem .05rem;
    background: #FFFFFF !important;
    border-radius: 4px;
    float: left;
    line-height: .26rem;
    text-align: center;
}
.city .cityList{
    width: 100%;
}
.cityList ul p{
    font-size: 15px;
    color: #333333;
    line-height: .41rem;
    padding-left: .10rem;
    opacity: 0.33;
    background: #D8D8D8;
}
.cityList ul li{
    padding-left: .10rem;
    font-size: .13rem;
    color: #666666;
    background: #ffffff;
    border-bottom: 1px solid #F2F2F2;
    line-height: .50rem;
}
.sidebar{
    position: fixed;
    top: 1.30rem;
    right: 0;
}
.sidebar li{
    font-family: Helvetica;
    font-size: 10px;
    color: #FF6A6D;
    text-align: center;
    line-height: .20rem;
    padding: 0 5px;
}

</style>


