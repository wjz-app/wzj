<template>
  <div class="detail">
    <header>
      <router-link to="/centers" class="back">&lt;</router-link>
      <h2>{{datalist[ix].name}}</h2>
      <a href class="more">...</a>
    </header>
    <a href class="post">
      <img :src="datalist[ix].pic" alt="poster" />
    </a>
    <div class="cat">
      <a href>
        <img src="../assets/img/i_show.png" alt />
        <p>演出</p>
      </a>
      <a href>
        <img src="../assets/img/i_date.png" alt />
        <p>日历</p>
      </a>
      <a href>
        <img src="../assets/img/i_center.png" alt />
        <p>剧院</p>
      </a>
      <a href>
        <img src="../assets/img/i_gift.png" alt />
        <p>特惠</p>
      </a>
    </div>
    <div class="title">
      <h4>热门演出</h4>
    </div>
    <Item2
      v-for="(item, index) in datalist[ix].showList"
      :key="index"
      :list="item"
      :datalist="datalist[ix]"
    ></Item2>
  </div>
</template>

<script>
  import Item2 from "./Item2";
  export default {
    data() {
      return {
        datalist: [],
      };
    },
    computed: {
      ix(){
       return this.$route.params.idx;
      },
     
    },

    created() {
      this.axios
        .get(
          "https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.0.6&referer=2"
        )
        .then(res => {
          this.datalist = res.data.data.theatre_list;
        });
    },
    components: {
      Item2
    }
  };
</script>

<style lang="scss" scoped>
  .detail {
    a{
      text-align: center;
    }
    header {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      line-height: 44px;
      padding: 0 15px;
      display: flex;
      z-index: 10;
      background-color: #fff;
      justify-content: space-between;
      .back {
        color: #232323;
        font-size: 17px;
      }
      h2 {
        font-size: 17px;
      }
      .more {
        font-size: 17px;
      }
    }
    .post {
      margin-top: 43px;
      width: 100%;
      display: block;
      img {
        width: 100%;
        height: 155px;
      }
    }
    .cat {
      margin: 10px auto 0;
      padding: 14px 14px;
      display: flex;
      justify-content: space-between;
      a {
        width: 25%;
        color: #232323;
        img {
          width: 42px;
          height: 42px;
        }
      }
    }
    .title {
      padding: 10px 12.5px 5px;
      h4 {
        font-size: 18px;
        color: #333;
        font-weight: bold;
        text-align: left;
      }
    }
  }
</style>