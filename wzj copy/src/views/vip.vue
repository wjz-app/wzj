<template>
  <div>
    <div class="vip1">
      <ul>
        <li v-for="(item,index) in arr" :key="index">
          <div>
            <h3>{{item.name}}</h3>
            <p v-html="item.describe"></p>
          </div>
          <img :src="item.pic" />
        </li>
      </ul>

      <ul>
          <li v-for="(item,index) in arr2" :key="index" >
            <h3>{{item.name}}</h3>
            <div v-html="item.describe"></div>
           
            <img :src="item.pic" >
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:["arr","arr2"],  
  };
</script>

<style lang="scss">
  .vip1 {
    background-color: #f5f5f5;
    margin: 0 auto;
    box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
    ul {
      &:nth-of-type(1) {
        display: flex;
        justify-content: center;         
        li {
          margin: 5px;
          width: 169.5px;
          height: 90px;
          display: flex;
          padding-left: 18px;
          padding-right: 18px;
          background: #fefefe;
          &:nth-of-type(1) {
            
           margin-left: 10px;
          }
          &:nth-of-type(2) {          
           margin-right: 10px;
          }
           div {
              h3 {
                margin-top: 11px;
                width: 92px;
                line-height: 30px;
                text-align: center;
              }
              p{
                height: 38px;
                width: 92.3px;
                font-size: 12px;
              }
            }

            img {
              margin-top: 15px;
              width: 42.5px;
              height: 45px;
            }
        }
      }
      .c_ff6{
        color:  #ff6743!important;
      }
      &:nth-of-type(2){
        display: flex;
        justify-content: center;
        li{
          background: #fefefe;
          width: 111px;
          height: 106px;
          text-align: center;
          &:nth-of-type(2){
            margin: 0 12px;
          }
          h3{
            line-height: 30px;
          }
          p{
            line-height: 20px;
          }
          img{
            width: 45px;
            height: 45px;
          }
        }
      }
    }
  }
</style>