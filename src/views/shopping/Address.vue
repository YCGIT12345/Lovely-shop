<template>
    <div>
        <div class="add-address">
            <header>
                <i class="iconfont icon-arrow-left"></i>
                <h1>添加收货地址</h1>
                <span>保存</span>
            </header>
            <ul class="address-info">
                <li>
                    <span>收货人</span>
                    <i class="iconfont icon-account"></i>
                </li>
                <li>
                    <span>手机号码</span>
                    <p>+86<i class="iconfont icon-arrow-right"></i></p>
                </li>
                <li @click="showCity()">
                    <span>省、市、区</span>
                    <p>{{pvchioce}}</p>
                    <i class="iconfont icon-arrow-right"></i>
                </li>
                <li>
                    <span>详细地址：</span>
                    <input type="text" placeholder="如道路、门牌号、小区、楼栋号、单元室等">
                </li>
            </ul>
        </div>
        <PromptBox v-show="showflag">
            <div class="checkcity">
                <div>
                    <div class="header">
                        <p>选择地区</p>
                        <i class="iconfont icon-quxiao" @click="closeflag()"></i>
                    </div>
                    <p>已选择</p>
                    <div class="putcity">
                        <span @click="pvclose=true,ctclose=false,aeclose=false,ctchioce='',aechioce=''">{{pvchioce==''?'请选择':pvchioce}}</span>
                        <span @click="ctclose=true,aeclose=false,aechioce=''">{{ctchioce==''?'请选择':ctchioce}}</span>
                        <span @click="aeclose=true">{{aechioce==''?'请选择':aechioce}}</span>
                    </div>
                </div>
                <div class="city-centent" ref="citycentent">
                    <div>
                        <p>热门城市</p>
                        <ul class="hotcity">
                            <li>北京市</li>
                            <li>广州市</li>
                            <li>上海市</li>
                            <li>深圳市</li>
                            <li>武汉市</li>
                            <li>天津市</li>
                            <li>西安市</li>
                            <li>南京市</li>
                            <li>杭州市</li>
                            <li>重庆市</li>
                            <li>成都市</li>
                        </ul>
                        <p>选择省份/地区</p>
                        <ul class="detailprovince" v-if="pvclose">
                            <li v-for="item in province" :key="item.id" @click="selectProvince(item.name,item.id)">
                                {{item.name}}
                            </li>
                        </ul>
                        <ul class="detailcity" v-if="ctclose">
                            <li v-for="item in city" :key="item.id" @click="selectcity(item.name,item.id)">
                                {{item.name}}
                            </li>
                        </ul>
                        <ul class="detailarea" v-if="aeclose">
                            <li v-for="item in area" :key="item.id" @click="selectarea(item.name)">
                                {{item.name}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </PromptBox>
    </div>
</template>

<script>
//引入消息框的组件
import PromptBox from "../../components/PromptBox.vue";
import { getCityData } from "../../servers/shoppingserver.js";

export default {
    components:{
        //消息框的组件
        PromptBox
    },
    data(){
        return {
            showflag:false,  //城市选择框的开关
            city:[], //城市
            province:[], //省
            area:[], //区
            pvchioce:'', //选择省
            ctchioce:'', //选择省
            aechioce:'', //选择省
            pvclose:true, //省的开关
            ctclose:true, //城市的开关
            aeclose:true, //区的开关
        }
    },
    methods:{
        //滚动刷新方法
        refreshDOM(){
            this.myScroll.refresh();
        },
        //显示城市选择框
        showCity(){
            this.showflag=true;
            getCityData(0).then(result=>{
                this.province=result;
                this.$nextTick(()=>{
                    this.refreshDOM();
                })
            })
        },
        //关闭选择框
        closeflag(){
            this.showflag=false;
        },
        //选择省
        selectProvince(name,id){
            this.pvchioce=name;
            this.pvclose=false;
            getCityData(1,id).then(result=>{
                this.city=result;
                this.$nextTick(()=>{
                    this.refreshDOM();
                })
            })
        },
        //选择市
        selectcity(name,id){
            this.ctchioce=name;
            this.ctclose=false;
            getCityData(2,id).then(result=>{
                console.log(result);
                this.area=result;
                this.$nextTick(()=>{
                    this.refreshDOM();
                })
                if(this.area.length==0){
                    this.closeflag();
                    console.log(1)
                }
            })
        },
        selectarea(name){
            this.aechioce=name;
            this.closeflag();
        }
    },
    mounted(){
        this.myScroll = new IScroll(this.$refs.citycentent,{
            probeType: 3,
            click: true,
            tap: true,
        })
        this.myScroll.on('beforeScrollStart',()=>{
            this.refreshDOM();
        });
    },
}
</script>

<style scoped>
.add-address{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #F5F5F5;
  z-index: 1;
}
.add-address>header{
    background: #F5F5F5;
    height:44px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    line-height: 44px;
}
.add-address>header>.icon-arrow-left{
    float: left;
    color: #333333;
    font-size: 16px;
}
.add-address>header>h1{
    font-size: 18px;
    color: #666666;
    font-weight: normal;
}
.add-address>header>span{
    display: block;
    font-size: 14px;
    color: #999999;
}
.address-info{
    background: #fff;
    padding:0 15px 0 10px;
}
.address-info>li{
    width: 100%;
    height: 58px;
    border-bottom: 1px solid #F5F5F5;
    position: relative;
}
.address-info>li>span{
    font-size: 15px;
    color: #666666;
    line-height: 58px;
}
.address-info>li>p,ul>li i{
    float: right;
    line-height: 58px;
    color:#999999;
    font-size:10px;
}
.address-info>li>p{
    font-size: 16px;
}
.icon-account{
    font-size: 20px;
}
input{
    outline: none;
    border:none;
    margin-left: 10px;
    line-height: 20px;
    font-size: 14px;
    color: #000000;
    position: absolute;
    width: 270px;
    top: 20px;
    right: -8px;
}
.checkcity{
    height:415px;
    width: 100%;
    background:#fff;
    position: absolute;
    bottom:0;
    left:0;
    z-index: 2;
    overflow: hidden;
}
.header{
    height: 48px;
    line-height: 48px;
    position: relative;
}
.header>p{
    font-size: 13px;
    text-align: center;
    color: #333333;
    height: 48px;
    line-height: 48px;
}
.header>i{
    position: absolute;
    right: 15px;
    top: 0;
    font-size: 20px;
}
.checkcity>div>p{
    font-size: 13px;
    color: #999999;
    line-height: 16px;
    margin:0 0 10px 12px;
}
.putcity{
    height: 52px;
    background: #f5f5f5;
    display: flex;
    justify-content: space-around;
}
.putcity>span{
    font-size: 16px;
    color: #333333;
    text-align: center;
    line-height: 52px;
    flex:1;
    overflow: hidden;
}
.city-centent{
    height: 288px;
    overflow: hidden;
    padding-bottom:10px;
}
.city-centent>div{
    padding: 0 20px 20px 10px;
}
.city-centent>div>p{
    margin-top: 15px;
    font-size: 14px;
    color: #333333;
}
.hotcity{
    overflow: hidden;
}
.hotcity>li{
    float: left;
    color: #666666;
    padding:12px 35px;
    font-size: 13px;
}
.detailprovince>li,.detailcity>li,.detailarea>li{
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #f2f2f2;
    font-size: 13px;
    color: #666666;
}
.detailprovince>li:last-child,.detailcity>li:last-child,.detailarea>li:last-child{
    border-bottom: none;
}
</style>

