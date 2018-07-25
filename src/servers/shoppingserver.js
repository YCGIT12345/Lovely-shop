import axios from 'axios';
import API from '../api';

//请求购物车的数据
export function getShoppingCarData(id){
    return new Promise((resolve,reject)=>{

        // aixos.get(API.QUERY_GOODS_IN_SHOPPINGCAR_URL,{
        //     params:{
        //         Userid:id
        //     }
        // }).then(response=>{
        //     console.log(data)
        // })
        resolve();
    })
    .catch(error=>{
        console.log('失败');
        console.log(error);
    })
}