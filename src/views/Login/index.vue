<template>
  <div class="login-wrapper">
    <div class="login-wrapper-content">
      <div class="login-info">
        <div class="login-info-top">
          <img :src="logo" alt="">
        </div>
        <div class="login-info-bottom">
          <img :src="intro" alt="">
        </div>
      </div>
      <div class="login-from">
        <div class="from-top">
          <span class="from-title">登录</span>
          <div class="from-title-content">通过{{textSet.account}}团队，或者切换为<span @click="handleClick"
              class="from-title-a">{{textSet.phone}}</span>
          </div>
        </div>
        <div class="from-content">
          <component :is="textSet.showactive ? data[0].comName : data[1].comName" />
        </div>
      </div>
    </div>
    <div class="login-wrapper-footer">
      <a target="_blank" href="https://beian.miit.gov.cn/">福建缤力精密科技有限公司 版权所有 闽ICP备2022004496号</a>
    </div>
  </div>
</template>

<script setup>
import intro from 'assets/images/intro-04.png'
import logo from 'assets/images/logo.png'
import { reactive, markRaw } from 'vue'
import phone from 'views/Login/phone.vue'
import Account from 'views/Login/Account.vue'
const data = reactive(
  [
    {
      name: "Account",
      comName: markRaw(Account)
    },
    {
      name: "phone",
      comName: markRaw(phone)
    }
  ]
)


const textSet = reactive({
  showactive: true,
  account: '账号密码登录',
  phone: '手机号验证码登陆'
})
const handleClick = () => {
  textSet.showactive = !textSet.showactive
  let c = textSet.phone
  textSet.phone = textSet.account
  textSet.account = c

}
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .login-wrapper-content {
    padding: 40px 0;
    width: 1000px;
    height: 600px;
    display: flex;
    flex-direction: row;
    position: relative;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 2px 30px 0 #5f6f7c17;

    .login-info {
      width: 520px;
      padding: 0 42px;
      display: flex;
      flex-direction: column;
      border-right: 1px solid #eee;

      .login-info-top {
        height: 40px;

        img {
          height: 40px;
        }
      }

      .login-info-bottom {
        padding: 0 20px;
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        img {
          width: 375px;
        }
      }
    }

    .login-from {
      flex: 1;
      padding: 0 42px;
      display: flex;
      flex-direction: column;

      .from-top {
        .from-title {
          font-size: 28px;
        }

        .from-title-content {
          margin-top: 10px;
          color: #888;
          font-size: 15px;

          .from-title-a {
            color: #348fe4;
            margin-left: 5px;

            &:hover {
              color: #348fe4;
              text-decoration: underline !important;
            }
          }
        }


      }

      .from-content {
        flex: 1;
        padding-top: 50px;
      }
    }
  }

  .login-wrapper-footer {
    margin-top: 20px;

    a:hover {
      text-decoration: underline !important;
    }
  }


}
</style>