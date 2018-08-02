<template>
    <div id="shoppingtetail">
          <table border="1px" bordercolor="#d8d8d8" >
              <tr>
                  <td class="namelist">参数名称</td>
                  <td class="namelist">商品参数</td>
              </tr>
              <tr v-for=" (val, key) in Commodityparameterslist" :key="key">
                  <td>{{key}}</td>
                  <td>{{val}}</td>
              </tr>
          </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Commodityparameterslist:{
               '主要成分' :'大米、鸡肉、糙米',
               '成分含量' :' 粗蛋白≥30%, 粗脂肪≥17.8%, 钙≥1.2%, 食盐≤1.2%',
               '年龄' :'离乳&怀孕哺乳期、幼犬期',
               '体型' :'中大型犬',
                '颗粒大小':'小颗粒', 
               '主要配方' :'鸡肉'
            }   
        }
    },
    methods:{
       
    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
#shoppingtetail table{
  border-spacing: 1px;border-collapse: collapse;margin: 0 auto;
  margin-top: .1rem;width: 3.4rem;text-align: center;font-size: .14rem;color: #666;
}
#shoppingtetail table td{
    padding: .1rem .04rem;
}
#shoppingtetail table td:nth-child(2n+1){
    width: 1.12rem;
}
.namelist{
      line-height: .4rem;color: #333;background: #e0e0e0;
}

</style>
