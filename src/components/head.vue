<template>
  <div class="site-topbar">
    <div class="container clear">
      <div class="fl topbar-nav">
        <div v-for="n in nav" v-bind:key='n.id'>
          <a>{{n.name}}</a>
          <span class="sep" v-if="n.id!=9">|</span>
        </div>
      </div>
      <div class="fr topbar-right">
        <div class="topbar-info">
            <div class="login">登录</div>
            <div>注册</div>
            <div>消息通知</div>
        </div>
        <div class="topbar-car"><i class="icon iconfont icon-gouwuchekong"></i>购物车（0）</div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'commonHead',
  data () {
    return {
      nav:[ 
          { id:0, name:'小米商城'},
          { id:1, name:'MIUI'},
          { id:2, name:'IoT'},
          { id:3, name:'云服务'},
          { id:4, name:'金融'},
          { id:5, name:'有品'},
          { id:6, name:'小爱开放平台'},
          { id:7, name:'政企服务'},
          { id:8, name:'下载app'},
          { id:9, name:'Select Region'}
          ]
    }
  }
}
</script>

<style lang="scss">
.site-topbar{
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}
.site-topbar .sep{
  margin: 4.4px;
  color: #424242;
}
.topbar-nav a{
    color: #b0b0b0;
    line-height: 42px;
    display: inline-block;
    height: 40px;
}
.topbar-right div,.topbar-nav div{
  display: inline-block;
}
.topbar-info{
  div{
  line-height: 40px;
  margin:  0 6px;
  }
}
.topbar-car{
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin-left: 15px;
  background: #424242;
  .icon-gouwuchekong{
    font-size: 18px;
    margin-right: 4px;
    vertical-align: -2px;
  }
}
</style>
