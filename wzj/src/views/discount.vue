<template>
  <div class="discount">
    <div>
      <h3>
        专享折扣
        <span class="iconfont icon-dibudaohanglan-"></span>
      </h3>
      <div>
        <div v-for="(item, index) in arr.discountList" :key="index">
          <img :src="item.pic" />
          <p><span>{{item.min_discount}}</span>折</p>
        </div>
      </div>
    </div>
    <div>
      <h3>
        优先购票
        <span class="iconfont icon-dibudaohanglan-"></span>
      </h3>
      <div  v-for="(item, index) in arr1" :key="index">
          <img :src="item.pic" />
          <p><span>{{item.pre_time}}</span>结束</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["arr","arr1"]
  };
</script>

<style lang="scss">
  .discount {
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    div {
      h3{
        font-size: 16px;
        line-height: 30px;
      }
      &:nth-of-type(1) {
        margin-right: 8px;
        div {
          display: flex;         
           div{
             display: flex;
             flex-direction: column;
             span{
               font-weight: 600;
             }
           }
        }
      }
      &:nth-of-type(2){
        margin-left: 5px;
      }
      img {
        width: 106px;
        height: 145px;
      }
      p{
        margin-top: 5px;
        padding-left: 5px;
        font-size: 12px;
        color: #999;
        span{
          color: red;
          font-size: 14px;
        }
      }
    }
  }
</style>