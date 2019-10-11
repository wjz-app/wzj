<template>
  <div>
    <div class="title">
      <div class="header1">
        <span class="iconfont icon-dizhi"></span>
        <span>全国</span>
      </div>
      <div class="header2">
        <input class="inp1" type="text" />
        <span class="iconfont icon-sousuo"></span>
        <span>搜索热门演出</span>
      </div>
    </div>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in arr.slide_list" :key="index">
        <img style="width:100%; height:196px;" :src="item.image_url" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="5" :border="false" icon-size="51px">
      <van-grid-item
        v-for="(item,index) in arr.classify_list"
        :key="index"
        :icon="item.pic"
        :text="item.name"
        :url="item.url"
      />
    </van-grid>
    <!-- vip模块 -->
    <vip :arr="arr1" :arr2="arr2"></vip>
    <!-- 热门演出 -->
    <div class="hotstar">
      <p>
        热门演出
        <span class="iconfont icon-dibudaohanglan-"></span>
      </p>
      <van-swipe indicator-color="white" :width="110" :height="164" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in arr3" :key="index">
          <img style="width:104px ; height:145px;" :src="item.pic" />
          <h3>{{item.show_name}}</h3>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 巡回演出 -->
    <tour :arr="arr4"></tour>

    <p class="cen1">
      <img src="../assets/img/vip1.png" />
      <span>VIP+会员尊享权益</span>
      <span class="iconfont icon-dibudaohanglan-"></span>
      <span>99元/年</span>
    </p>

    <!-- 折扣 -->
  <discount :arr="arr5" :arr1="arr6"></discount>

  <!-- 底部 -->
  <Footer :arr="arr7"></Footer>
  </div>
</template>

<script>
  import "../assets/font/iconfont.css";
  import vip from "./vip.vue";
  import tour from "./tour.vue";
  import discount from "./discount.vue";
  import Footer from '../components/Footer';
  export default {
    data() {
      return {
        arr: [],
        arr1: [], //用于vip模块传值
        arr2: [], //用于vip模块传值
        arr3: [], //用于热门演出
        arr4: [], //用于巡回演出
        arr5: [], //用于专享折扣
        arr6:[],//用于专享折扣
        arr7:[],//用于底部
      };
    },
    components: {
      vip,
      tour,
      discount,
      Footer
    },
    mounted() {
      this.axios
        .get("https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbr")
        .then(res => {
          this.arr = res.data.data;
          console.log(res.data.data);
          this.arr1 = res.data.data.operation_list.slice(0, 2); //用于vip模块传值
          this.arr2 = res.data.data.operation_list.slice(2, 5); //用于vip模块传值
          this.arr7=res.data.data.bottom_list
        });

      this.axios
        .get(
          "https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.0.6&referer=2"
        )
        .then(res1 => {
          this.arr3 = res1.data.data.hots_show_list;
        });

      this.axios
        .get(
          "https://api.juooo.com/home/index/getTourRecommendList?city_id=0&version=6.0.6&referer=2"
        )
        .then(res2 => {
          console.log(res2.data.data.tour_show_list);
          this.arr4 = res2.data.data.tour_show_list.slice(0, 6);//用于巡回演出
        });

        this.axios
        .get(
          "https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.6&referer=2"
        )
        .then(res3 => {
          console.log(res3.data.data);
          this.arr5 = res3.data.data; //用于专享折扣
          this.arr6 = res3.data.data.priorList.slice(0,1); //用于专享折扣
        });
        
        
    }
  };
</script>

<style  lang="scss">
  .title {
    position: fixed;

    z-index: 2;
    color: #fff;
    top: 5px;
    display: block;
    left: 50%;
    margin-left: -154px;
  }
  .header1 {
    width: 60px;
    height: 30px;
    border: 1px solid hsla(0, 0%, 88%, 0.3);
    display: inline-block;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    font-style: 20px;
    line-height: 30px;
    margin-right: 10px;
    vertical-align: top;
  }
  .header2 {
    display: inline-block;
    position: relative;
    vertical-align: top;
    .inp1 {
      border: 1px solid hsla(0, 0%, 88%, 0.2);
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      width: 240px;
      height: 30px;
    }
    span {
      position: absolute;
      &:nth-of-type(1) {
        left: 10px;
        line-height: 30px;
      }
      &:nth-of-type(2) {
        left: 35px;
        line-height: 30px;
      }
    }
  }

  .hotstar {
    padding-top: 20px;
    padding-left: 10px;
    padding-bottom: 15px;
    img {
      width: 30%;
    }
    p {
      margin-bottom: 20px;
      font-size: 15px;
      font-weight: 600;
    }
    h3 {
      width: 90px;
      height: 20px;
      margin-top: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }
  }
  .cen1 {
    width: 100%;
    height: 40px;
    background: url("../assets/img/vip2.png");
    line-height: 40px;
    color: #f0d1b0;
    img {
      margin-top: 11px;
      width: 18px;
      height: 18px;
      margin-right: 5px;
      margin-left: 10px;
    }
    span {
      &:nth-of-type(1) {
        font-weight: 700;
      }
      &:nth-of-type(2) {
        float: right;
        margin-right: 10px;
      }
      &:nth-of-type(3) {
        float: right;
      }
    }
  }
</style>
