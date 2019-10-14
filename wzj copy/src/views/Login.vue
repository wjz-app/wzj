<template>
  <div class="login">
    <div class="navbar">
    <router-link to="/"><span style="transform: rotate(180deg);font-size:32px;" class="iconfont icon-dibudaohanglan-"></span></router-link>
    </div>
    <div class="main">
      <div class="login_warp">
        <h1>欢迎来到聚橙网</h1>
        <div class="login_area">
          <form action>
            <ul class="lg-list">
              <li class="lg-item">
                <input
                  type="text"
                  name="tel"
                  placeholder="请输入手机号/邮箱"
                  class="lg-input"
                  v-model="tel"
                />
                <div v-if="show1" class="remove-btn" @click="clear(0)"></div>
              </li>
              <li class="lg-item">
                <input
                  :type="tp?'password':'text'"
                  name="pwd"
                  placeholder="请输入密码"
                  class="lg-input pwd-input"
                  v-model="pwd"
                />
                <div v-if="show" class="remove-btn" @click="clear(1)"></div>
                <div v-if="show" class="btn-eye" @click="tp=!tp"></div>
              </li>
            </ul>
          </form>
        </div>
        <div class="login_btn">
          <a href class="logi">登录</a>
        </div>
        <div class="login_toggle">
          <div class="tg-wrap">
            <span class="tg-mail">忘记密码</span>
            <span class="tg-login">验证码登录/注册</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_header">
        <p class="footer_title">其他登录方式</p>
      </div>
      <div class="footer_inner">
        <div class="item">
          <a href class="img-media">
            <img class="icon" src="../assets/img/qq.png">
          </a>
        </div>
        <div class="item">
          <a href class="img-media">
            <img class="icon" src="../assets/img/weibo.png">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tel: "",
        pwd: "",
        tp: true
      };
    },
    computed: {
      show() {
        if (this.pwd) {
          return true;
        } else {
          return false;
        }
      },
      show1() {
        if (this.tel) {
          return true;
        } else {
          return false;
        }
      }
    },
    methods: {
      clear(x) {
        x == 0 ? (this.tel = "") : (this.pwd = "");
      }
    }
  };
</script>

<style scoped lang="scss">
  .login {
    background: url(../assets/img/bg.png);
    width: 100%;
    height: 100%;
    background-size: 100%;
    .navbar {
      height: 44px;
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 15px;
      span {
        float: left;
        font-size: 20px;
      }
    }
    .main {
      padding: 44px 32px 0;
      .login_warp {
        padding-top: 57px;
        color: #666;
        font-size: 16px;
        h1 {
          font-size: 25px;
          font-weight: bold;
          color: #232323;
        }
      }
      .login_area {
        padding-top: 75px;
        .lg-list {
          width: 100%;
          .lg-item {
            width: 100%;
            position: relative;
            margin-bottom: 10px;
            text-align: left;
            border-bottom: 1px solid #666;
            .lg-input {
              width: 225px;
              font-size: 16px;
              line-height: 45px;
              border: none;
            }
            .remove-btn {
              width: 13px;
              height: 13px;
              background: url(../assets/img/del.png);
              vertical-align: middle;
              background-size: contain;
              display: inline-block;
            }
            .btn-eye {
              width: 13px;
              height: 13px;
              margin-left: 20px;
              background: url(../assets/img/show.png);
              vertical-align: middle;
              background-size: contain;
              display: inline-block;
            }
          }
        }
      }
    }
  }
  .login_btn {
    padding-top: 45px;
    .logi {
      width: 100%;
      color: #fff;
      font-size: 16px;
      letter-spacing: 5px;
      border-radius: 25px;
      line-height: 50px;
      display: inline-block;
      background: -webkit-linear-gradient(left, #ff9a34, #ff4d4a);
      text-align: center;
    }
  }
  .login_toggle {
    margin-top: 20px;
    .tg-wrap {
      overflow: hidden;
      .tg-mail {
        float: left;
      }
      .tg-login {
        float: right;
      }
    }
  }
  .footer {
    margin-top: 3rem;
    padding: 0 70px;
    .footer_header {
      border-top: 1px solid #999;
      height: 31px;
      position: relative;
      .footer_title {
        position: absolute;
        background-color: #fff;
        left: 50%;
        top: -25px;
        margin-left: -48px;
        width: 98px;
        font-size: 12px;
        color: #999;
        padding: 0 10px;
        line-height: 50px;
      }
    }
    .footer_inner{
      width: 100%;
      .item {
        float: left;
        width: 50%;
        height: 36px;
        .img-media {
          display: inline-block;
          width: 100%;
          height: 100%;
          .icon {
            display: inline-block;
            width: 36px;
            height: 36px;
          
          }
        }
      }
    }
  }
</style>