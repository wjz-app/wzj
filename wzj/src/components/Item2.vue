<template>
  <div class="items">
    <a class="item">
      <img :src="list.pic" alt />
      <div class="content">
        <p class="title">{{list.schedular_name}}</p>
        <span class="day">{{list.show_time}}</span>
        <p class="place">{{datalist.name}}</p>
        <p class="price">
          <span class="fs24 mr8">¥</span>
          <span class="fs32">100</span>
          <span class="fs24 mr8">起</span>
        </p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Object
      },
      datalist: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  .items {
    padding: 0 12.5px;
    .item {
      color: #666;
      font-size: 14px;
      display: block;
      height: 140px;
      padding: 7.5px 0;
      display: flex;
      justify-content: space-between;
      img {
        width: 89px;
        height: 119px;
      }
      .content {
        width: 243px;
        text-align: left;
        .title {
          padding-top: 3px;
          font-size: 14px;
          margin-bottom: 12.5px;
        }
        .day {
          font-size: 12px;
          color: #999;
        }
        .place {
          font-size: 12px;
          margin-top: 3px;
          color: #999;
        }
        .price {
          color:#ff7919;
          margin-top: 13px;
          .fs24 {
            font-size: 12px;
            margin-right: 4px;
          }
          .fs32 {
            margin-right: 4px;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>