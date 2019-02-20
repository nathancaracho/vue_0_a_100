<template>
  <div class="user">
    <div class="user-information">
      <div class="user-information-name">some</div>
      <hr>
      <div class="user-information-email">some@hotmail.com</div>
    </div>
    <div class="user-thumbnail" @click="openModal">
      <!-- cuidado transforma em svg no final -->
      <font-awesome-icon class="user-thumbnail-icon icon-header-default" icon="user"/>
    </div>
    <ns-modal-login v-if="isOpenModal" @close="closeModal"/>
  </div>
</template>
<script>
import NsModalLogin from "@/components/NsModalLogin";
export default {
  name: "NsUser",
  components: {
    NsModalLogin
  },
  data() {
    return {
      isOpenModal: false
    };
  },
  methods: {
    openModal: function() {
      this.isOpenModal = true;
    },
    closeModal: function() {
      this.isOpenModal = false;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.user {
  display: flex;
  max-height: $user-thumbnail-size;
  .user-information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: $user-thumbnail-size;
    margin: 5px;
    & > * {
      text-align: right;
    }
    .user-information-name {
      font-size: 20px;
      font-weight: bolder;
    }
    .user-information-email {
      margin-bottom: auto;
    }
    & > hr {
      max-height: 1px;
      margin: auto 0;
      background-color: #fff;
    }
  }
  .user-thumbnail {
    display: flex;
    @extend .clickable, .icon-default-border;
  }
}
</style>
