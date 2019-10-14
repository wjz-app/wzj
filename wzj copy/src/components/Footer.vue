<template>
<div class="fott">
    <van-tabbar  v-model="active">
      <van-tabbar-item  :icon="item.pic" v-for="(item, index) in arr" :key="index">
    <router-link  :to=" topath[index]">{{item.name}}</router-link>
     </van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      arr:[],
      topath:["/","/centers","login","login"],
    }
  },
  created() {
    this.axios
        .get("https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbr")
        .then(res => {
          this.arr=res.data.data.bottom_list;
        });
  },
  methods: {
    
  },

}
</script>

<style lang="scss" scoped>
.fott{
  padding-top: 50px;
  a{
    text-decoration: none !important;
    display: block;
    width: 54px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
  .van-tabbar-item--active{
    a{
      color: red;
    }
  }
}
</style>