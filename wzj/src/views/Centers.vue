<template>
  <div class="centers">
    <h3>剧院</h3>
    <div class="center_list">
      <router-link 
      class="center" 
      v-for="(item, index) in datalist.theatre_list" 
      :key="index"
      :to="'/detail/'+index">
        <div class="center_head">
          <img :src="item.pic" alt="icon" />
          <div class="center_title">
            <h4>{{item.name}}</h4>
            <p>{{item.count}}场在售演出</p>
          </div>
          <a href class="center_more">...</a>
        </div>
        <div class="center_slider">
          <van-swipe :loop="false" :width="114" :height="192.5" :show-indicators="false">
            <van-swipe-item
              v-for="(i, index) in datalist.theatre_list[index].showList"
              :key="index"
            >
              <div class="show_date">
                <p>{{i.show_time}}</p>
                <span class="dot"></span>
              </div>
              <img :src="i.pic" alt="center_img" class="center_img" />
            </van-swipe-item>
            <van-swipe-item v-if="datalist.theatre_list[index].showList[9]">
              <div class="show_date">
                <p class="trans">查看更多</p>
                <span class="dot"></span>
              </div>
              <div class="center_img">查看更多></div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        datalist: {}
      };
    },
    created() {
      this.axios
        .get(
          "https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.0.6&referer=2"
        )
        .then(res => {
          this.datalist = res.data.data;
        });
    }
  };
</script>

<style scoped lang="scss">
  .centers {
    h3 {
      width: 100%;
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 43px;
      border-bottom: 1px solid #f5f5f5;
      position: fixed;
      z-index: 10;
      background-color: #fff;
    }
    .center_list {
      padding-top: 55px;
      .center {
        display: block;
        color: #232323;
        padding: 20px;
        margin: 0 auto 15px;
        box-shadow: 0 0.05333rem 0.4rem 0.12667rem rgba(35, 35, 35, 0.08);
        border-radius: 0.10667rem;
        border: 1px solid #ebebeb;

        .center_head {
          overflow: hidden;
          height: 50px;
          img {
            width: 50px;
            height: 50px;
            float: left;
            margin-right: 15px;
          }
          .center_title {
            height: 100%;
            float: left;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            h4 {
              font-size: 17px;
              font-weight: bold;
            }
            p {
              font-size: 12px;
              text-align: left;
            }
          }
          .center_more {
            float: right;
            font-weight: bold;
            line-height: 50px;
            font-size: 18px;
            color: #232323;
          }
        }
      }
    }
  }
  .center_slider {
    display: flex;

    .show_date {
      margin-bottom: 17.5px;
      padding-bottom: 14.5px;
      position: absolute;
      padding-right: 7px;
      width: 114px;
      border-bottom: 1px solid #ebebeb;
      p {
        font-size: 14px;
        color: #b3b3b3;
        text-align: center;
      }
      .dot {
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #ccc;
        left: 50%;
        margin-left: -3.5px;
        bottom: -3.5px;
      }
    }
    .center_img {
      margin-top: 45px;
      width: 107px;
      color: #666;
      line-height: 146px;
      background-color: #f5f5f5;
      text-align: center;
    }
  }
  .trans {
    visibility: hidden;
  }
</style>