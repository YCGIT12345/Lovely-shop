import axios from 'axios'

import API from '../api'


export function getCityList(){
    return new Promise((resolce,reject)=>{
        axios.get(API.HOME_CITY_URL,{
            params:{
                __t:new Date().getTime(),
            }
        })
        .then(response=>{
            let data = response.data.data.cities;
            let dataArr = {};

            data.map((item)=>{
                let name = item.pinyin[0]

                if(!dataArr[name]){
                    dataArr[name] = []
                }


                dataArr[name].push({
                    name:item.name
                })
            })

            var citiesArr = Object.keys(dataArr).map(key=>{
                return {
                    letter: key,
                    data: dataArr[key]
                }
            })

            for(let i =0;i<citiesArr.length;i++){
                let min = i;
                for(let j = i;j<citiesArr.length;j++){
                    if(citiesArr[j].letter<citiesArr[min].letter){
                        min = j;
                    }
                }

                let tmp = citiesArr[i];
                citiesArr[i] = citiesArr[min];
                citiesArr[min] = tmp;
            }


            // console.log(data);
            // console.log(dataArr);
            resolce(citiesArr);
        })
        .catch(error=>{
            console.log(error);
        })
    })
}