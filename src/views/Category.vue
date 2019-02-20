<template>
  <div class="category-content">
    <div class="category-content-item" v-for="(card, index) in cardList" :key="index">
      <ns-card :color="card.color" :title="card.title" :image="card.image" :route="card.route"/>
    </div>
  </div>
</template>
<script>
import NsCard from "@/components/NsCard.vue";

export default {
  name: "category",
  components: {
    NsCard
  },
  data() {
    return {
      cardList: [
        {
          color: "#F2BF4F",
          route: "/category/software",
          title: "software",
          image: "./img/code.png"
        },
        {
          color: "#FF6F60",
          route: "/category/music",
          title: "music",
          image: "./img/music-player.png"
        },
        {
          color: "#77D5B1",
          route: "/category/movie",
          title: "movie",
          image: "./img/video-camera.png"
        },
        {
          color: "#9C4DCC",
          route: "/category/art",
          title: "art",
          image: "./img/artistic-brush.png"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "../assets/style/main.scss";

.category-content {
  display: flex;
  align-content: space-between;
  padding: $default-padding;
  & > .category-content-item {
    margin: 0 auto;
  }
}
</style>
