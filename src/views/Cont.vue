
<template>
<div class="cont">
  <h3>消息</h3>
  <ul>
    <li>
      <img src="../assets/logo.png" alt="">
      <div>
        <p class="p1">
          服务消息
          <span>2021-04-30</span>
        </p>
        <p class="p2">您有一条新的签约申请</p>
      </div>
    </li>
  </ul>
  <ul>
    <li>
      <img src="../assets/logo.png" alt="">
      <div>
        <p class="p1">
          系统消息
          <span>2021-04-30</span>
        </p>
        <p class="p2">评价通知</p>
      </div>
    </li>
  </ul>
  <ul>
    <li>
      <img src="../assets/logo.png" alt="">
      <div>
        <p class="p1">
          璩浩林
          <span>2021-04-30</span>
        </p>
        <p class="p2">周五上午您有空吗</p>
      </div>
    </li>
  </ul>
  <ul>
    <li>
      <img src="../assets/logo.png" alt="">
      <div>
        <p class="p1">
          璩浩林
          <span>2021-04-30</span>
        </p>
        <p class="p2">周五上午您有空吗</p>
      </div>
    </li>
  </ul>
  <ul>
    <li>
      <img src="../assets/logo.png" alt="">
      <div>
        <p class="p1">
          璩浩林
          <span>2021-04-30</span>
        </p>
        <p class="p2">周五上午您有空吗</p>
      </div>
    </li>
  </ul>
</div>
</template>vfv 

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
    .cont{
      padding: 0 20px;
      h3{
        height: 60px;
        line-height: 60px;
      }
      ul{
        li{
          display: flex;
          align-items: center;
          padding: 10px 0;
          img{
            width: 50px;
            height: 50px;
          }
          div{
            margin-left: 10px;
              border-bottom: 1px solid rgba(153, 153, 153, 0.363);
              padding: 10px 0;
            flex: 1;
            p{
              margin: 5px;
            }
            .p1{
              display: flex;
              justify-content: space-between;
              span{
                font-size: 12px;
                color: #999
              }
            }
            .p2{
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
</style>
