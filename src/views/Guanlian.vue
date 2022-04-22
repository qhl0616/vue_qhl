
import { log } from 'util';
<template>
<div class="guan">
    <van-nav-bar
  title="关联家人信"
  right-text="完成"
  left-arrow
  @click-left="$router.back()"
/>
    <p class="p1">家人信息</p>
    <p class="p2">
    <van-field
    label="选择家人"
    placeholder="请选择该居民家人信息"
  /> 
    </p>
  <van-field
    label="与本人关系"
    placeholder="请选择家人与该居民关系"
  />
  <p class="p3">+新增关联家人</p>
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
  methods: {
  }
}
</script>
<style scoped lang='scss'>
    .guan{
        padding: 0 10px;
        .p1{
            font-size: 2px;
            margin-top: 30px;
            padding: 0 20px;
        }
        .p2{
            margin-top: 20px;
        }
        .p3{
            margin: 20px 0;
            font-size: 14px;
            color:#28d094;
            text-align: center;
        }
    }

</style>
