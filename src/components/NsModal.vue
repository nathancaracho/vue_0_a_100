<template>
  <div>
    <div class="modal">
      <slot name="modal-header" class="modal-header"></slot>
      <div class="modal-body">
        <slot name="modal-body"></slot>
      </div>
      <slot name="modal-footer" class="modal-body"></slot>
    </div>
    <div class="modal-backdrop" @click="close"></div>
  </div>
</template>
<script>
export default {
  name: "NsModal",
  data() {
    return {};
  },
  methods: {
    close: function() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss">
.modal-backdrop {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  position: fixed;
  cursor: pointer;
}
.modal {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 30px;
  min-height: 30px;
  background-color: #fff;
  color: #000;
  z-index: 4;
  padding: 15px;
  & > .modal-body > div {
    display: flex;
    flex-direction: column;
  }
}
</style>

