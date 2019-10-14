<template>
  <div>
    <div class="title" id="titl" :style="bg">
      <div class="header1">
        <span :style="icy" class="iconfont icon-dizhi"></span>
        <span>全国</span>
      </div>
      <div class="header2">
        <router-link :style="bg" to="/search">
        <input   class="inp1" type="text" />
        <span class="iconfont icon-sousuo"></span>
        <span>搜索热门演出</span>
        </router-link>
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
        to="/show"
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
      <van-swipe :loop="false" indicator-color="white" :width="110" :height="164" :show-indicators="false">
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

  <!-- Section -->
<Section></Section>
<!-- 为你推荐 -->
<p class="pp">为你推荐</p>
<Item :list="arr7[index]" v-for="(item, index) in arr7" :key="index"></Item>

  </div>
</template>

<script>
  import "../assets/font/iconfont.css";
  import vip from "./vip.vue";
  import tour from "./tour.vue";
  import discount from "./discount.vue";
  import Section from '../components/Section';
  import Item from '../components/Item';
  
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
        arr7:[],//用于为你推荐
        bg:"background:transparent;color:#fefefe",
        icy:"#fefefe",
      };
    },
    components: {
      vip,
      tour,
      discount,
      Section,
      Item
    },
    methods: {    
      handleScroll: function () {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop>45){
                this.bg="background:#fefefe;color:#fff;"
                this.icy="color:red;"
            }else{
              this.bg="background:transparent;color:#fefefe"
               this.icy="color:#fefefe;"
            } 
        }
  },
    mounted() {
      this.axios
        .get("https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbr")
        .then(res => {
          this.arr = res.data.data;
          this.arr1 = res.data.data.operation_list.slice(0, 2); //用于vip模块传值
          this.arr2 = res.data.data.operation_list.slice(2, 5); //用于vip模块传值
        });

      this.axios
        .get(
          "https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.0.6&referer=2"
        )
        .then(res1 => {
          this.arr3 = res1.data.data.hots_show_list; //用于热门演出                
        });

      this.axios
        .get(
          "https://api.juooo.com/home/index/getTourRecommendList?city_id=0&version=6.0.6&referer=2"
        )
        .then(res2 => {
          this.arr4 = res2.data.data.tour_show_list.slice(0, 6);//用于巡回演出
        });

        this.axios
        .get(
          "https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.6&referer=2"
        )
        .then(res3 => {
          this.arr5 = res3.data.data; //用于专享折扣
          this.arr6 = res3.data.data.priorList.slice(0,1); //用于专享折扣
        }); 
        
        this.axios
        .get(
          "https://api.juooo.com/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.6&referer=2"
        )
        .then(res4 => {
          this.arr7 = res4.data.data.recommend_show_list; //用于为你推荐
        }); 

        window.addEventListener('scroll',this.handleScroll);  // 监听（绑定）滚轮滚
    }
  };
</script>

<style  lang="scss" scoped>
  .title {
    position: fixed;
    z-index: 2;
    color: #fff;
    padding: 5px 0;
    display: block;
    display: flex;
    width: 100%;
    justify-content: center;
    a{
    color: #fff;

    }
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
      font-size: 20px;
      font-weight: 600;
    }
    h3 {
      width: 90px;
      height: 20px;
      line-height: 20px;
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
  .pp{
    font-size: 16px;
    font-weight: 600;
    padding-top:20px ;
    padding-bottom: 15px;
    margin-left: 10px;

  }
</style>
