<template>
  <div class="page-wrapper">
    <ns-header/>
    <router-view class="content"/>
  </div>
</template>
<script>
import NsHeader from "@/components/NsHeader.vue";

export default {
  name: "app",
  components: {
    NsHeader
  }
};
</script>
<style lang="scss">
@import "./assets/style/variables.scss";
.content {
  position: relative;
  width: auto;
  min-height: 300px;
  margin: 0 $large-padding;
  padding: $default-padding;
  background-color: #fff;
}
</style>



