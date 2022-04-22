
<template>
<div class="tuan">
     <van-nav-bar
  title="我的团队"
  left-arrow
  @click-left="$router.back()"
/>
    <p class="p1">我的管理团队</p>
   <div class="box">
        <ul>
        <li>
            <img src="../assets/logo.png" alt="">
             <div>
                <p class="p2">璩浩林专业团队</p>
                <p class="p3">所属机构：璩氏集团璩氏集团璩氏集团</p>
                <p class="p4"></p>
            </div>
        </li>
    </ul>
        <ul>
        <li>
            <img src="../assets/logo.png" alt="">
             <div>
                <p class="p2">璩浩林专业团队</p>
                <p class="p3">所属机构：璩氏集团璩氏集团璩氏集团</p>
                <p class="p4"></p>
            </div>
        </li>
    </ul>
     <p class="p1">我加入的团队</p>
      <ul>
        <li>
            <img src="../assets/logo.png" alt="">
             <div>
                <p class="p2">璩浩林专业团队</p>
                <p class="p3">所属机构：璩氏集团璩氏集团璩氏集团</p>
                <p class="p4"></p>
            </div>
        </li>
    </ul>
     <ul>
        <li>
            <img src="../assets/logo.png" alt="">
             <div>
                <p class="p2">璩浩林专业团队</p>
                <p class="p3">所属机构：璩氏集团璩氏集团璩氏集团</p>
                <p class="p4"></p>
            </div>
        </li>
    </ul>
    <p class="p5">
        <van-button type="primary" class="btn">主要按钮</van-button>
        <van-button type="info" class="btn1">信息按钮</van-button>
    </p>
   </div>
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
    .tuan{
        height: 100%;
        .p1{ 
            padding: 20px 20px;
             border-bottom: 1px solid rgba(153, 153, 153, 0.459);
        }
      .box{
          padding: 0 20px;
            ul{
             padding: 20px 0px;
            li{
                display: flex;
                align-items: center;
                img{
                    width: 60px;
                    height: 60px;
                }
                div{
                    flex: 1;
                    margin-left: 10px;
                     border-bottom: 1px solid rgba(153, 153, 153, 0.459);
                    p{
                        margin: 10px 0;
                    }
                    .p2{
                        font-size: 18px;
                    }
                    .p3,.p4{
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
        }
        .p5{
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            // margin-bottom: 150px;
            // background: #f00;
           .van-button{
               width: 150px;
               border-radius: 10px;
           }
           .btn{
               border: 1px solid #43d5ae;
               color: #43d5ae;
               background: #fff;
           }
           .btn1{
               border: 1px solid #43d5ae;
               color: #fff;
               background: #43d5ae;
               margin: 0 10px;
           }
        }
      }
    }
</style>
