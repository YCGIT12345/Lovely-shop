<template>
    <div class="stores">
        <ul>        
            <li v-for="(item,index) in store" :key="index">
                 <div class="select">
                    <span @click="changeClass(index,item.bool)" :class="{active:item.bool==true}"></span>
                </div>
                <div class="img">
                    <img src="../../../static/images/pic_09.jpg" alt="">
                </div>
                <div class="con">
                    <a href="##" class="name">萌店广州旗舰店</a>
                    <span class="level">
                       
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      store: this.$store.state.store,
      level: this.$store.state.store.level
    };
  },
  mounted() {
    this.$store.dispatch("modifyflag", "1");
    var level = document.querySelectorAll(".level");
    if (level) {
      for (var i = 0; i < level.length; i++) {
        level[i].style.width = this.store[i].level * 14 + "px";
      }
    }
  },
  methods: {
    changeClass(index, bool) {
      this.$store.dispatch("modifystore", { index, bool });
    }
  }
};
</script>



<style scoped>
.select .active {
  background:url(../../../static/images/true.jpg) no-repeat;
  border: 0;
  background-size: 18px 18px;
}
.select span {
  border: 1px solid #979797;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: block;
}
.select {
  width: 33px;
  text-align: right;
  float: left;
  line-height: 120px;
  position: absolute;
  top: 28px;
  left: -33px;
}
.stores ul {
  width: 100%;
}

.stores ul li {
  margin-left: 15px;
  padding: 10px 0;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
}
.img {
  float: left;
}
.img img {
  height: 52px;
  width: 52px;
  padding-right: 9px;
}
.name {
  font-size: 14px;
  color: #333333;
}
.level {
  display: inline-block;
  height: 12px;
  width: 70px;
  background: url(../../../static/images/xingxing.jpg) no-repeat;
  background-size: 70px 12px;
  margin-left: 10px;
}
</style>

