
<template>
<div class="she">
<van-nav-bar
  title="设置"
  left-arrow
  @click-left="$router.back()"
/>
  <p class="p1">
     <span>个人资料</span>
     <span class="sp"><van-icon name="arrow" /></span>
   </p>
  <p class="p1">
     <span>修改密码</span>
     <span class="sp"><van-icon name="arrow" /></span>
   </p>
  <p class="p1">
     <span>消息通知</span>
     <span class="sp"><van-icon name="arrow" /></span>
   </p>
  <p class="p1">
     <span>清除缓存</span>
     <span class="sp">99.M <van-icon name="arrow" /></span>
   </p>
  <p class="p1">
     <span>升级版本</span>
     <span class="sp">当前版本 0.6.16<van-icon name="arrow" /></span>
   </p>
  <p class="p1">
     <span>关于我们</span>
     <span class="sp"><van-switch v-model="checked" size="18px" inactive-color="#dcdee0" active-color="#4ed6bc"/></span>
   </p>
   <p class="p2"> <van-button type="primary" class="btn">退出账号</van-button></p>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
        checked:false
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
    .she{
          .p1{
      padding: 20px 0px;
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(153, 153, 153, 0.459);
      .sp{
        color: #999;
      }
          }
          .p2{ 
               margin: 40px auto;
              .btn{
                 
                width: 95%;
               border-radius: 10px;
                 border: 1px solid #43d5ae;
               color: #43d5ae;
               background: #fff;
               margin-left: 10px;
              }
          }
    }
</style>
