<template>
<div>
  <van-nav-bar
  title="演出"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"/>

  <van-tabs v-model="active">
  <van-tab title="全部">
    <Item :list="item" v-for="(item, index) in arr" :key="index"></Item>
  </van-tab>
  <van-tab title="演唱会">
     <Item :list="item" v-for="(item, index) in arr1" :key="index"></Item>
  </van-tab>
  <van-tab title="音乐会">
     <Item :list="item" v-for="(item, index) in arr2" :key="index"></Item>

  </van-tab>
  <van-tab title="话剧歌剧">
     <Item :list="item" v-for="(item, index) in arr3" :key="index"></Item>

  </van-tab>
</van-tabs>

</div>
</template>

<script>
import Item from '../components/Item1s.vue'
export default {
  components:{
    Item,
  },
  data() {
    return {
      active: 0,
      arr:[],
      arr1:[],
      arr2:[],
      arr3:[],
    }
  },
   methods: {
    onClickLeft() {
     this.$router.push("/")
      
    },
    
  },


  created() {
      this.axios
        .get("https://api.juooo.com/Show/Search/getShowList?category=0&city_id=0&page=1&keywords=&version=6.0.6&referer=2")
        .then(res => {
          this.arr=res.data.data.list
        });
        this.axios
        .get("https://api.juooo.com/Show/Search/getShowList?category=35&city_id=0&page=1&keywords=&version=6.0.6&referer=2")
        .then(res1 => {
          this.arr1=res1.data.data.list
        });
        this.axios
        .get("https://api.juooo.com/Show/Search/getShowList?category=36&city_id=0&page=1&keywords=&version=6.0.6&referer=2")
        .then(res2 => {
          this.arr2=res2.data.data.list
        });
        this.axios
        .get("https://api.juooo.com/Show/Search/getShowList?category=37&city_id=0&page=1&keywords=&version=6.0.6&referer=2")
        .then(res3 => {
          this.arr3=res3.data.data.list
        });
  },
}
</script>

<style>

</style>