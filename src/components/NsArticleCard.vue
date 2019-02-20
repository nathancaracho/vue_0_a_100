<template>
  <div class="article-card" :style="`background-color:${backgroundColor}`">
    <img class="article-card-image" :src="image">
    <div class="article-card-info">
      <div class="article-card-info-title">{{title}}</div>
      <div class="article-card-info-author">{{author}}</div>
      <div class="article-card-info-rating">
        <ns-rating :rating="rating"/>
      </div>
      <div class="article-card-info-date">{{date | date}}</div>
    </div>
  </div>
</template>
<script>
import NsRating from "@/components/NsRating";
export default {
  name: "NsArticleCard",
  components: {
    NsRating
  },
  props: {
    backgroundColor: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    rating: {
      type: Number,
      required: true
    }
  }
};
</script>
<style lang="scss">
@import "../assets/style/main.scss";
.article-card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  & > .article-card-image {
    width: 70%;
    min-height: 60%;
    margin: auto;
    border: none;
  }
  & > .article-card-info {
    display: flex;
    flex-direction: column;
    height: 50%;
    margin-top: auto;
    padding: 5px;
    background-color: #fff;
    > * {
      text-transform: capitalize;
      margin: auto 0;
    }
    .article-card-info-title {
      font-weight: bold;
    }
    .article-card-info-date {
      font-size: 12px;
      text-align: right;
    }
  }
}
</style>
