<template>
  <div class="page-wrapper">
    <ns-background-image/>
    <ns-header/>
    <router-view class="content"/>
  </div>
</template>
<script>
import NsHeader from "@/components/NsHeader.vue";
import NsBackgroundImage from "@/components/NsBackgroundImage.vue";

export default {
  name: "app",
  components: {
    NsHeader,
    NsBackgroundImage
  }
};
</script>
<style lang="scss">
@import "./assets/style/variables.scss";

.page-wrapper {
  display: flex;
  flex-direction: column;
}
.content {
  position: relative;
  width: auto;
  min-height: 300px;
  margin: 0 $large-padding;
  padding: $default-padding;
  background-color: #fff;
}
</style>



