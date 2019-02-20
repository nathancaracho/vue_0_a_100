<template>
  <div class="background">
    <img class="background-img" src="/img/home.jpg">
  </div>
</template>
<script>
export default {
  name: "NsBackgroundImage"
};
</script>

<style lang="scss">
@import "../assets/style/variables.scss";
$header-height-background-image: 400px;

.background {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: $header-height-background-image;
  width: 100%;
  background-color: #000;
  z-index: -1;
  &-img {
    position: relative;
    width: 90%;
    height: 100%;
    margin-left: auto;
    opacity: 0.8;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #000, #0000009e);
  }
}
</style>