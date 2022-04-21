
<template>
<div class="ren">
    <van-nav-bar
  title="新建居民档案"
  left-arrow
  @click-left="$router.back()"
/>
<p class="p1">居民基本信息</p>
<van-cell-group>
  <van-field
    required
    label="真实姓名"
    placeholder="请填入居民的真是姓名"
  />
  <van-field
    required
    label="身份证号"
    placeholder="请填入居民的身份证号"
  />
  <van-field
    required
    label="性别"
    placeholder="请选择居民的性别"
  />
  <van-field
    required
    label="出生日期"
    placeholder="居民登录账号，请正确填写"
  />
  <van-field
    required
    label="登录密码"
    placeholder="8位以上的数字和字母组合"
  />
  <van-field
    label="现居地"
    placeholder="请填写现居住"
  />
  <van-field
    label="居民标签"
    placeholder="点击选择居民标签"
  />
</van-cell-group>
<ul>
    <li v-for="(item,index) in list" :key="index" @click="item.flag =true" :class="item.flag == true?'active':''">{{item.name}}</li>
</ul>
   <p class="p2" @click="$router.push('/guanlian')">
    <van-field
    label="关联家人"
    placeholder="请选择该居民家人信息"
  />
   </p>
   <p class="p3">
       <span>立即签约</span>
       <span><van-switch v-model="checked" size="18px" inactive-color="#dcdee0" active-color="#4ed6bc"/></span>
   </p>
   <p class="p4">
       <van-button type="primary" size="large">下一步</van-button>
   </p>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
        checked:false,
        flag:0,
        list:[
        {name:'高血压',flag:false},
        {name:'冠心病',flag:false},
        {name:'高血糖',flag:false},
        {name:'高血脂',flag:false},
        {name:'高血压',flag:false},
        {name:'冠心病',flag:false},
        {name:'高血糖',flag:false},
        {name:'高血脂',flag:false}
        ],
    }
  },
  created () { },
  mounted () {
     
   },
  methods: {}
}
</script>
<style scoped lang='scss'>
    .ren{
       
        .van-nav-bar{
            padding: 0;
        }
        .p1{
            height: 50px;
            line-height: 50px;
             padding: 0 20px;
             font-size: 18px;
             font-weight: 500;
        }
        .van-cell-group{
            padding: 0 10px;
        }
        ul{
            padding: 0 20px;
            display: flex;
            flex-wrap: wrap;
            margin: 10px 0;
            li{
                width: 20%;
                line-height: 30px;
                
                margin: 5px 5px;
                font-size: 12px;
                text-align: center;
                color: #999;
                border-radius: 5px;
                border: 1px solid #999;
            }
            .active{
                background:#d1e4fc;
                border: none;
                color: blue;
            }
        }
        .p2{
            padding: 0 10px;
        }
        .p3{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            align-items: center;
            height: 44px;
            padding: 0 24px;
        }
        .p4{
            padding: 0 20px;
            margin-top: 50px;
            .van-button{
                border-radius: 10px;
                background: #4cd6ba;
                border: none;
                outline: none;
            }
        }
    }
</style>
