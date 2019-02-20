<template>
  <div class="software-content">
    <div class="software-content-card" v-for="(card,index) in articleCardList" :key="index">
      <ns-article-card
        :title="card.title"
        :author="card.author"
        :date="card.date"
        :rating="card.rating"
        :background-color="card.backgroundColor"
        :image="card.image"
      />
    </div>
  </div>
</template>
<script>
import NsArticleCard from "@/components/NsArticleCard";
export default {
  name: "Software",
  components: {
    NsArticleCard
  },
  data() {
    return {
      articleCardList: [
        {
          title: "C# Advanced",
          author: "fabio b. porchat",
          date: new Date("2012-12-12"),
          rating: 4,
          backgroundColor: "#1E1661",
          image: "../img/c.png"
        },
        {
          title: "How to be a ninja with Javascript",
          author: "marco antonio ninja",
          date: new Date("2014-01-01"),
          rating: 2,
          backgroundColor: "#C7F181",
          image: "../img/js.png"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.software-content {
  display: flex;
  flex-direction: row;
  & > .software-content-card {
    margin: 0 5px;
  }
}
</style>
