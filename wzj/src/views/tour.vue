<template>
  <div class="tour">
       <p>巡回演出 <span class="iconfont icon-dibudaohanglan-"></span></p>
       <van-swipe  indicator-color="white" :width="245"  :height="180" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in arr" :key="index">
          <img :src="item.pic">
          <h3>{{item.show_name}}</h3>
          <p style="text-align: center; line-height:20px;">{{item.schedular_num}}场巡演</p>
        </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
export default {
 props:["arr"]
}
</script>

<style lang="scss">
.tour{
  
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 242px;
  background: #f5f5f5;
  >p{
    margin-left:35px;
    font-size: 14px;
    font-weight: 600;
     margin-bottom: 20px;
}
  img{
    width: 90%;
    height: 139px;
  }
  h3{
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    font-size: 15px;
  }
}
</style>