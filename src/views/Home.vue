<template>
  <div class="home">
    <icon-svg icon-class="yifu" class="red" />
    <icon-svg icon-class="logo-plan" class="blue" />
    <icon-svg icon-class="logo" class="red" />
  </div>
</template>

<style>
.red {
  color: #3f96ed;
  font-size: 130px;
}
.blue {
  color: blue;
  font-size: 130px;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import "@/icons/yifu.svg";
import "@/icons/logo.svg";
import "@/icons/logo-plan.svg";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
