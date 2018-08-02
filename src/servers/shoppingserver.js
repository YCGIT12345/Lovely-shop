import axios from 'axios';
import API from '../api';
import shoppingdata from '../data/shopping.json';
import citydata from '../data/city.json';
import provincedata from '../data/province.json';
import areadata from '../data/area.json';

//请求购物车的数据
export function getShoppingCarData(uid){
    return new Promise((resolve,reject)=>{
        //请求数据
        // aixos.get(API.QUERY_GOODS_IN_SHOPPINGCAR_URL,{
        //     params:{
        //         Userid:uid
        //     }
        // }).then(response=>{
        //     console.log(data)
        // }).catch(error=>{
        //     console.log('失败');
        //     console.log(error);
        // })
        // 请求成功的处理
        let data=[];
        let arr=shoppingdata.shoppingcar.map(item=>{
            data.push({
                "id":item.id,
                "uid":item.uid,
                "gnum":item.gnumber,
                "gname":item.goods.gname,
                "gpicture":item.goods.gpicture,
                "gprice":item.goods.gprice,
                "gcheck":false
            })
        })
        resolve(data);
    })
    
}

//修改购物车商品数量
export function modifyGoodsNumber(id,num){
    return new Promise((resolve,reject)=>{
        //请求数据
        // axios.get(API.UPDATE_NUMBER_IN_SHOPPINGCAR_URL,{
        //     params:{
        //         id,
        //         Gnumber:num
        //     }
        // }).then(response=>{}).catch(error=>{
        //     console.log('失败');
        //     console.log(error);
        // })
        resolve("成功")
    })
}

//清除购物车中的商品
export function delShoppingCarGoods(id){
    return new Promise((resolve,reject)=>{
        let data="";
        //判断删除所有的商品数据还是某个商品数据
        //请求数据
        if(id instanceof Array){
            id.map(item=>{
                // axios.get(API.DELONE_IN_SHOPPINGCAR_URL,{
                //     params:{
                //         id
                //     }
                // }).then(response=>{

                // }).catch(error=>{
                //     console.log('失败');
                //     console.log(error);
                // })
                data+=item+"商品清空成功";
            })
        }else{
            // axios.get(API.DELGOODS_IN_SHOPPINGCAR_URL,{
            //     params:{
            //         Userid:uid
            //     }
            // }).then(response=>{

            // }).catch(error=>{
            //     console.log('失败');
            //     console.log(error);
            // })
            data="清空购物车成功";
        }
        resolve(data);
    })
}

//查询用户的收货地址
export function findUeserAddress(id){
    return new Promise((resolve,reject)=>{
        // axios.get(API.QUERYADDRESS_URL,{
        //     params:{
        //         Userid:id
        //     }
        // }).then(response=>{

        // }).catch(error=>{
        //     console.log('失败');
        //     console.log(error);
        // })
        let data=[]
        resolve(data);
    })
}

//获取省、城市、区的数据
export function getCityData(str,id){
    return new Promise((resolve,reject)=>{
        //判断是0省、1城市、2区
        let data=[]
        if(str==0){
            data=provincedata;
        }else if(str==1){
            data=citydata[id];
        }else if(str==2){
            data=areadata[id];
        }
        resolve(data);   
    })
}
