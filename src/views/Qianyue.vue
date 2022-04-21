
<template>
<div class="qian">
     <van-nav-bar
  title="签约管理"
  left-arrow
  @click-left="$router.back()"
/>
<ul class="uu">
    <li v-for="(item,index) in list" :key="index" :class="index1 == index?'active':''" @click="toggle(index)">{{item}}</li>
</ul>
 <div class="box">
      <ul class="ul3">
            <li class="li1">
                <h2>王小明&nbsp; <span>58岁</span><img src="../assets/logo.png" alt=""></h2>
                <p class="p1">待审核</p>
            </li>
            <li>
                <p>身份证号&nbsp;<span>345022********0423</span></p>
                <p>签约团队&nbsp;<span>璩浩林团队</span></p>
                <p>服务包&nbsp;&nbsp;<span>老年人服务包</span></p>
            </li>
        </ul>
            <ul class="ul3">
                 <li class="li1">
                <h2>王小明&nbsp; <span>58岁</span><img src="../assets/logo.png" alt=""></h2>
                <p class="p1">待审核</p>
                 </li>
                 <li>
                <p>身份证号&nbsp;<span>345022********0423</span></p>
                <p>签约团队&nbsp;<span>璩浩林团队</span></p>
                <p>服务包&nbsp;&nbsp;<span>老年人服务包</span></p>
            </li>
            </ul>
            <ul class="ul3">
                 <li class="li1">
                <h2>王小明&nbsp; <span>58岁</span><img src="../assets/logo.png" alt=""></h2>
                <p class="p1">待审核</p>
                 </li>
                 <li>
                <p>身份证号&nbsp;<span>345022********0423</span></p>
                <p>签约团队&nbsp;<span>璩浩林团队</span></p>
                <p>服务包&nbsp;&nbsp;<span>老年人服务包</span></p>
            </li>
            </ul>
            <ul class="ul3">
                 <li class="li1">
                <h2>王小明&nbsp; <span>58岁</span><img src="../assets/logo.png" alt=""></h2>
                <p class="p1">待审核</p>
                 </li>
                 <li>
                <p>身份证号&nbsp;<span>345022********0423</span></p>
                <p>签约团队&nbsp;<span>璩浩林团队</span></p>
                <p>服务包&nbsp;&nbsp;<span>老年人服务包</span></p>
            </li>
            </ul>
            <ul class="ul3">
                 <li class="li1">
                <h2>王小明&nbsp; <span>58岁</span><img src="../assets/logo.png" alt=""></h2>
                <p class="p1">待审核</p>
                 </li>
                 <li>
                <p>身份证号&nbsp;<span>345022********0423</span></p>
                <p>签约团队&nbsp;<span>璩浩林团队</span></p>
                <p>服务包&nbsp;&nbsp;<span>老年人服务包</span></p>
            </li>
            </ul>
            <ul class="ul3">
                 <li class="li1">
                <h2>王小明&nbsp; <span>58岁</span><img src="../assets/logo.png" alt=""></h2>
                <p class="p1">待审核</p>
                 </li>
                 <li>
                <p>身份证号&nbsp;<span>345022********0423</span></p>
                <p>签约团队&nbsp;<span>璩浩林团队</span></p>
                <p>服务包&nbsp;&nbsp;<span>老年人服务包</span></p>
            </li>
            </ul>
        </ul>
        <p class="pp">没有更多了~</p>
 </div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
        index1:0,
        list:['全部','待审核','待支付','生效中']
    }
  },
  created () { },
  mounted () { },
  methods: {
      toggle(i){
          this.index1=i
      }
  }
}
</script>
<style scoped lang='scss'>
    .qian{
        padding: 0 20px;
        .uu{
             display: flex;
             height: 50px;
             align-items: center;
             text-align: center;
            li{
               width: 25%;
               font-size: 14px;
               padding: 10px 0;
            }
            .active{
                width: 15%;
                color:#4cd6ba;
                font-weight: 600;
                border-bottom: 3px solid #4cd6ba;
            }
        }
        .box{
            margin-bottom: 80px;
               .ul3{
            margin-top: 20px; 
            box-shadow: 0 0 5px;
            border-radius: 10px; 
            padding: 0px 5px 5px 5px;
            .li1{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .p1{
                    color: red;
                }
            }
            li{
                 border-radius: 10px;
                 margin: 20px 0;
            // border: 1px solid #000;
              img{
                    width: 20px;
                    height: 20px;
                }
            }
            li p{
                margin: 20px 0
            }
            
            li h2 span{
                font-weight: 100;
                font-size: 16px;
            }
        }
        }
        .pp{
            text-align: center;
            margin: 40px 0;
        }
    }
</style>
