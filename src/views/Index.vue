
<template>
<div class="index" @scroll="scroll">
    <header>
        <p>
            <span>王明伟医生</span>
        </p>
            <img src="../assets/logo.png" alt="">
    </header>
    <div class="di" v-show="isShow">
         <p>
            <span>首页</span>
        </p>
            <img src="../assets/logo.png" alt="">
    </div>
    <div class="box">
        <ul class="ul1">
            <li>
                <p>已签约人数</p>
                <h3>1000</h3>
            </li>
            <li>
                <p>待签约人数</p>
                <h3>20</h3>
            </li>
            <li>
                <p>居民总数</p>
                <h3>1020</h3>
            </li>
            <li>
                <p>待处理服务量</p>
                <h3>10</h3>
            </li>
            <li>
                <p>服务总量</p>
                <h3>100</h3>
            </li>
            <li>
                <p>服务评价</p>
                <h3>4.9</h3>
            </li>
        </ul>
        <ul class="ul2">
            <li @click="$router.push('/xinren')">
            <img src="../assets/logo.png" alt="">
            <p>新建档案</p>
            </li>
            <li @click="$router.push('/qianyue')">
            <img src="../assets/logo.png" alt="">
            <p>签约管理</p>
            </li>
            <li @click="$router.push('/fuwu')">
            <img src="../assets/logo.png" alt="">
            <p>服务管理</p>
            </li>
        </ul>
        <div class="box1">
            <p>签约申请 （3）</p>
            <p class="p1">查看全部 ></p>
        </div>
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
    </div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
        isShow:false
    }
  },
  created () { },
  mounted () { },
  methods: {
      scroll(e){
        //   console.log(e.target.scrollTop);
            this.isShow=e.target.scrollTop>=200?true:false
      }
  }
}
</script>
<style scoped lang='scss'>
    .index{
        height: 100%;
        overflow: auto;
        header{
            height: 50px;
            line-height: 50px;
            // background: chartreuse;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            align-items: center;
            img{
                width: 30px;
                height: 30px;
            }
        }
        .di{
            width: 100%;
            position: fixed;
            left: 0;
            top: 0;
            background: #fff;
            height: 50px;
            line-height: 50px;
            // background: chartreuse;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            align-items: center;
            img{
                width: 30px;
                height: 30px;
            }
        }
       .box{
           padding: 10px 20px;
           margin-bottom: 80px; 
            position: relative;
            .ul1{
            height: 200px;
            border-radius: 20px;
            background:#46d5b2;
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            flex-wrap: wrap;
            li{
                width: 33.3%;
                margin-top: 20px;
                text-align: center;
                p{
                    color: #fff;
                    margin-bottom: 10px;
                    font-size: 12px;
                }
                h3{
                    color: #fff;
                }
            }
        }
        .ul2{
            // padding: 0px 20px;
            width: 100%;
            position: absolute;
            top: 180px;
            left: 0px;
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            height: 120px;
            border-radius: 20px;
            background: #fff;
            li{
                width: 33.33%;
                text-align: center;
                img{
                    width: 50px;
                    height: 50px;
                }
            }
        }
        .box1{
            display: flex;
            height: 20px;
            line-height: 20px;
            margin-top: 150px;
            justify-content: space-between;
            .p1{
                font-size: 12px;
            }
        }
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
    }
</style>
