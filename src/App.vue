<template>
  <div id="app">
    <footerr></footerr>
    <!-- <headerr></headerr> -->
    <router-view></router-view>
  </div>
</template>

<script>
import defaultFontSize  from '../static/rem.js'
// import headerr from '@/commons/header'
import footerr from '@/commons/footer'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    footerr
    // headerr
  },
  mounted: function () {
    this.defaultFontSize
    // 注册
     this.$ajax({
      baseURL: '/api_signUp',
      url: '/nhdz/reg.php',
      params: {
         telp: '1234567',
         username: 'aaa',
         pwd: 'aaa'
      }
    }).then(res => {
      console.log(res)
    }),
    // 登录
     this.$ajax({
      baseURL: '/api_login',
      url: '/nhdz/login.php',
      params: {
         telp: '1234567',
         pwd: 'aaa'
      }
    }).then(res => {
      console.log(res)
    }),
    // 推荐
    this.$ajax({
      baseURL: '/api_tj',
      // http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-101
      url: 'neihan/stream/mix/v1/?content_type=-101'
    }).then(res => {
      console.log(res)
    })
    // // 视频
    // this.$ajax({
    //   baseURL: '/api_sp',
    //   url: '/neihan/stream/mix/v1/'
    // }).then(res => {
    //   console.log(res)
    // })
    // // 图片
    // this.$ajax({
    //   baseURL: '/api_tp',
    //   url: 'neihan/stream/mix/v1/'
    // }).then(res => {
    //   console.log(res)
    // })
    // // 直播
    // this.$ajax({
    //   baseURL: '/api_zb',
    //   url: 'hotsoon/feed/'
    // }).then(res => {
    //   console.log(res)
    // })
  },
  methods: {

  }
}
</script>

<style>
@import url('/static/normal.css');
*{
  padding: 0;
  margin: 0;
  user-select:none;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
}
#app {
  font-family: '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
