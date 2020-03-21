<template>
  <div class="home">
    <icon-svg icon-class="yifu" class="red" />
    <icon-svg icon-class="logo-plan" class="blue" />
    <icon-svg icon-class="logo" class="red" />
    <button @click="toast">test toast</button>
  </div>
</template>

<style>
.red {
  color: #3f96ed;
  font-size: 130px;
}
.blue {
  color: red;
  font-size: 130px;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import "@/icons/yifu.svg";
// import "@/icons/logo.svg";
// import "@/icons/logo-plan.svg";

export default {
  name: 'Home',
  methods: {
    toast () {
      this.$toast('没有更多了', { duration: 3000, type: 'success' })
    }
  },
  components: {
    HelloWorld
  }
}
</script>
