import Vue from 'vue'
import Vuex from 'vuex'
import number from "./servers/data.json"
Vue.use(Vuex)
const state = {
  flag: 0,
  show:"管理",
  change:0,
  goods:number.goods,
  store:number.store,
  boolean:false
}
const actions = {
  modifyflag(context,params){
    context.state.flag = params;
  },
  modifyshow(context,params){
    context.state.show = params;
  },
  modifychange(context,params){
    context.state.change = params;
  },
  modifybool(context,params){
    if(params.bool==false){
      context.state.goods[params.index].bool=true
      }else{
      context.state.goods[params.index].bool=false
    } 
    var bStop = false;
    for(var j=0;j<context.state.goods.length;j++){
			if(!context.state.goods[j].bool){
				bStop = true;
				break;
			}
		}

		if(!bStop){
			context.state.boolean = true;
		}else{
			context.state.boolean = false;
		}
  },
  modifydelete(context,params){
    for(var i=0;i<context.state.goods.length;i++){
      if(context.state.goods[i].bool==true){
        context.state.goods.splice(i--,1);
      }
      context.state.boolean=false;
  }
  },
  modifystore(context,params){
    if(params.bool==false){
      context.state.store[params.index].bool=true
      }else{
      context.state.store[params.index].bool=false
    }
  },
  modifyAllgoods(context,params){
    if(params){
      for(var i=0;i<context.state.goods.length;i++){
        context.state.goods[i].bool = true;     
      }
      context.state.boolean = true
    }else{
      for(var i=0;i<context.state.goods.length;i++){
        context.state.goods[i].bool = false;
      }
      context.state.boolean = false
    }
  },
  modifydeletestore(context,params){
    for(var i=0;i<context.state.store.length;i++){
      if(context.state.store[i].bool==true){
        context.state.store.splice(i--,1);
      }
  }
  }
}

export default new Vuex.Store({
  state,
  actions
})
