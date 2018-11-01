<template>
  <div id="app">
    <common-head></common-head>
    <router-view/>
  </div>
</template>

<script>
import commonHead from './components/head'
export default {
  name: 'App',
  components: {
    'common-head': commonHead
  }
}
</script>

<style lang='scss'>
body{
  margin:0 !important;
  padding: 0 !important;
}
#app {
  font:14px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.clear::after{
    content: "";
    display: table;
    clear: both;
}
.fl{
  float: left;
}
.fr{
  float:right;
}
</style>
