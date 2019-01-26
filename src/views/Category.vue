<template>
  <div class="category-content">
    <div class="category-content-item" v-for="(card, index) in cardList" :key="index">
      <ns-card :color="card.color" :title="card.title" :image="card.image"/>
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
        { color: "#F2BF4F", title: "software", image: "./img/code.png" },
        { color: "#FF6F60", title: "music", image: "./img/music-player.png" },
        { color: "#77D5B1", title: "movie", image: "./img/video-camera.png" },
        { color: "#9C4DCC", title: "art", image: "./img/artistic-brush.png" }
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
