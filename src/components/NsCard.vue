<template>
  <div class="card" :style="`background-color:${color}`">
    <img class="card-image" :src="image">
    <div class="card-title">
      <span class="card-title-text">{{title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "NsCard",
  props: {
    color: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>
<style  lang="scss">
@import "../assets/style/main.scss";
$card-size: 150px;
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: $card-size;
  height: $card-size;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  color: #fff;
  @extend .clickable;
  & > .card-image {
    margin: auto;
    width: 30%;
  }
  & > .card-title {
    position: relative;
    display: flex;
    height: 33%;
    width: 70%;
    margin-top: auto;
    background-color: #000;
    font-weight: bold;
    & > .card-title-text {
      margin: auto;
      text-transform: capitalize;
    }
  }
}
</style>
