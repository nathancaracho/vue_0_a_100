<template>
  <div class="rating">
    <font-awesome-icon v-for="(star,index) in starList" :key="index" :icon="[star,'star']"/>
  </div>
</template>
<script>
export default {
  name: "NsRating",
  props: {
    rating: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    starList: function() {
      let list = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= this.rating) list.push("fa");
        else list.push("far");
      }
      return list;
    }
  }
};
</script>
