<template>
  <div class="sections">
    <div class="section" v-for="(item, index) in sectionlist" :key="index"  >
      <div class="section_header">
        <h3>{{item.title}}</h3>
        <a href>
          <img src="../assets/img/more.png" alt />
        </a>
      </div>
      <div class="cat">
        <a href class="cat_content">
          <img :src="item.list[0].pic" alt="hello" class="fp" />
          <div class="cat_text">
            <p class="line1">
              <strong>{{item.list[0].date}}</strong>
              <span>{{item.list[0].week}}</span>
            </p>
            <h3>{{item.list[0].schedular_name}}</h3>
            <p class="line3">{{item.list[0].venue_name}}</p>
          </div>
        </a>
      </div>
      <div class="car">
        <van-swipe :loop="false" :width="115" :height="206" :show-indicators="false">
          <van-swipe-item   v-for="(i,ix) in sectionlist[index].list"   v-if="ix>0" :key="ix" class="car_item">
            <img :src="i.pic" class="car_img"/>
            <h4>{{i.schedular_name}}</h4>
            <p class="car_price">
              <strong>¥{{i.low_price}}</strong>
              <span>起</span>
            </p>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sectionlist: [],
        sectionlist2: []
      };
    },

    created() {
      this.axios
        .get(
          "https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.6&referer=2"
        )
        .then(res => {
          this.sectionlist = res.data.data;
          this.sectionlist2 = res.data.data.slice(0, 1);
        });
    }
  };
</script>

<style lang="scss" scoped>
  .sections {
    margin-top: 10px;
    .section {
      padding-bottom: 40px;
      .section_header {
        overflow: hidden;
        h3 {
          float: left;
          font-size: 20px;
          font-weight: bold;
          line-height: 23px;
          margin-left: 10px;
        }
        a {
          float: right;
          line-height: 23px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .cat {
        margin-top: 15px;
        background-color: rgb(154, 54, 18);
        padding: 14px 0 14px 15px;
        .cat_content {
          display: inline-block;
          color: #fff;
          width: 100%;
          img {
            width: 107px;
            height: 146px;
            float: left;
            border-radius: 0.10667rem;
            border: 1px solid #ebebeb;
          }
          .cat_text {
            float: left;
            width: 236px;
            height: 146px;
            padding-top: 16px;
            margin-left: 5px;
            .line1 {
              strong {
                font-weight: bolder;
                font-size: 16px;
              }
              span {
                font-size: 12px;
                margin-left: 5px;
              }
            }
            h3 {
              margin-top: 13px;
              width: 90%;
              font-weight: bolder;
              font-size: 17px;
              line-height: 0.6rem;
              max-height: 1.2rem;
              min-height: 0.6rem;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .line3 {
              margin-top: 12.5px;
            }
          }
        }
      }
    }
  }
  .car {
    padding: 15px 0 0 15px;
    .car_item {
      color: #232323;
      .car_img {
        width: 107px;
        height: 146px;
      }
      h4 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
        font-size: 17px;
        margin-top: 10px;
      }
      .car_price {
        margin-top: 5px;
        strong {
          font-size: 16px;
          margin-right: 5px;
          color: #ff6743 !important;
        }
      }
    }
  }
</style>