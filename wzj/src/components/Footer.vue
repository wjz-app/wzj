<template>
<div>
    <van-tabbar  v-model="active">
      <van-tabbar-item :icon="item.pic" v-for="(item, index) in arr" :key="index">{{item.name}}</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  props:["arr"],

}
</script>

<style>

</style>