
<template>
<div class="home">
  <router-view></router-view>
<van-tabbar route>
  <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item replace to="/ren" icon="search">居民</van-tabbar-item>
  <van-tabbar-item replace to="/cont" icon="friends-o">消息</van-tabbar-item>
  <van-tabbar-item replace to="/my" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
</div>

</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
  .home{
    height: 100%;
  }
</style>
