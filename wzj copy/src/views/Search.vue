<template>
<div class="search" >
    <form action="/" class="ff">
    <van-search 
      placeholder="请输入搜索关键词"
      show-action
     />
     <a href="/">取消</a>
  </form>
  <p>热门历史</p>
  <van-tag @click="fn"  size="large" plain v-for="(item, index) in arr" :key="index">{{item}}</van-tag>

 
</div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

export default {
  data() {
    return {
      arr:[]
    }
  },

methods: {
  fn(){
    Toast.loading({
      mask: true,
      message: '加载中...'
  });
setTimeout(()=>{
  Toast.fail('暂无数据包');
},3500)
    

  }
},
  created() {
    this.axios
        .get(
          "https://api.juooo.com/Show/Search/getHotWord?version=6.0.6&referer=2"
        )
        .then(res => {
          console.log(res.data.data);
          
          this.arr = res.data.data
        });
  },
}
</script>

<style lang="scss" scope>
.search{
  p{
    margin: 30px 0;
    font-size: 20px;
    margin-left: 10px;
  }

 .van-tag--plain{
   margin-right: 17px;
   margin-top: 5px;
   margin-left: 5px;
 }
 .ff{
   position: relative;
    a{
    position: absolute;
    right: 8px;
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    top: 12px;
    opacity: 0;
  }
 }
 
}

</style>