
<template>
<div class="ren">
   <h3>我的</h3>
   <ul>
     <li>
       <img src="../assets/logo.png" alt="">
       <div class="div1">
        <p class="pp">璩浩林<span>切换团队</span></p>
        <p class="p1">程序员</p>
       </div>
     </li>
       <p class="p2">所属团队：璩浩林程序团队</p>
       <p class="p3">所属机构：璩氏集团璩氏集团璩氏集团</p>
   </ul>
   <p class="p4" @click="$router.push('/tuan')">
     <span>我的程序团队</span>
     <span class="sp"><van-icon name="arrow" /></span>
   </p>
   <p class="p5" @click="$router.push('/qianyue')">
     <span>签约管理</span>
     <span class="sp"><van-icon name="arrow" /></span>
   </p>
   <p class="p6" @click="$router.push('/qianyue')">
     <span>服务管理</span>
     <span class="sp"><van-icon name="arrow" /></span>
   </p>
   <p class="p7">
     <span>使用指南</span>
     <span class="sp"><van-icon name="arrow" /></span>
   </p>
   <p class="p8" @click="$router.push('/shezhi')">
     <span>设置</span>
     <span class="sp"><van-icon name="arrow" /></span>
   </p>
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
  .ren{
    // overflow: hidden;
    height: 100vh;
    // background: #f7f7f7;
      h3{
      margin-top: 20px;
      padding: 0 20px;
    }
    ul{
      width: 90%;
      margin: 20px auto;
     padding: 20px 20px;
     background: #fff;
     border-radius: 10px;
     box-shadow: 2px 2px 10px #ccc;
      li{
         display: flex;
         align-items: center;
        img{
          width: 60px;
          height: 60px;
          border-radius: 10px;
        }
        .div1{
         flex: 1;
         margin-left: 10px;
         p{
           margin: 5px 0;
         }
         .pp{
           display: flex;
           justify-content: space-between;
           font-size: 20px;
           font-weight: 500;
          span{
            padding: 5px 10px;
            border-radius: 40px;
            background:#3dd4a7;
            color: #fff;
            font-size: 12px;
          }
         }
        }
      }
      .p2{
        margin-top: 10px;
      }
      .p3{
        margin-top: 10px;
      }
      p{
        font-size: 14px;
      }
    }
    .p4{
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
    .p5{
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
    .p6{
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
    .p7{
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
    .p8{
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
  }
</style>
