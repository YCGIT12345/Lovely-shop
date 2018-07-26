import axios from 'axios'
import API from '../api'

export function playingdata(){
    return new Promise((resolve, reject)=>{
        
                axios.get(API.QUERYWAIT_URL, {
                    params: {
                        __t: new Date().getTime()
                    }
                })
                .then(response=>{
                    console.log('成功');
                    console.log(response);
                    let data = response.data.data.billboards.map(item=>{
                        return {
                            id: item.id,
                            imageUrl: item.imageUrl
                        }
                    })


                    resolve(data);
                })
                .catch(error=>{
                    console.log('失败');
                    console.log(error);
                })
            })
        }
        
