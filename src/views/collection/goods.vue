<template>
    <div class="goods">
        <ul>     
            <li v-for="(item,index) in goods" :key="index">
                <div class="select">
                    <span type="checkbox" @click="changeClass(index,item.bool)" :class="{active:item.bool==true}" ref="in"></span>
                </div>
                <div class="img">
                    <img :src='item.img' alt="">
                </div>
                <div class="con">
                    <a href="##" class="name">{{item.name}}</a>
                    <p>{{item.collect}}
                    </p>
                    <span v-html="item.price">{{item.price}}</span>
                    <a href="##" class="similar" v-show="$store.state.change==0">找相似</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import number from "../../servers/data.json"

export default {
  data() {
    return {
      goods:this.$store.state.goods,
      flag: 1
    };
  },
  mounted() {
    this.$store.dispatch("modifyflag", "0");
  },
  methods: {
    changeClass(index,bool) {
      this.$store.dispatch("modifybool",{ index,bool});
      
    }
  }
};
</script>
<style>
.con span i {
  font-size: 18px;
}
</style>

<style scoped>
.select .active {
  background: #ff666d;
  border: 0;
  border: 1px solid #ff666d;
}
.select span {
  border: 1px solid #979797;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: block;
  background: url(../../img/login-icon.jpg) no-repeat 0px 0px;
}
.select {
  width: 33px;
  text-align: right;
  float: left;
  line-height: 120px;
  position: absolute;
  top: 51px;
  left: -33px;
}
.free {
  width: 15px;
  height: 120px;
  display: inline-block;
}
.goods ul {
  width: 100%;
}
.goods ul li {
  margin-left: 15px;
  height: 90px;
  border-bottom: 1px solid #f5f5f5;
  padding: 14px 0 16px 0;
  position: relative;
}
.img {
  float: left;
  padding-right: 15px;
}
.img img {
  height: 90px;
  width: 88px;
}
.name {
  font-size: 14px;
  color: #333333;
  line-height: 18px;
}
.con p {
  font-size: 11px;
  color: #999999;
  height: 20px;
}
.con span {
  font-size: 10px;
  color: #fc4047;
  margin-top: 5px;
  display: block;
}

.similar {
  position: absolute;
  top: 80px;
  right: 30px;
  border: 1px solid #979797;
  border-radius: 5px;
  height: 24px;
  width: 56px;
  line-height: 24px;
  text-align: center;
  font-size: 13px;
  color: #999;
}
</style>

