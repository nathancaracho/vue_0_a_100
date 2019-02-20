<template >
  <ns-modal @close="close">
    <div slot="modal-header">
      <h1>Create an Account</h1>
    </div>
    <div slot="modal-body">
      <form name="accountCreateForm">
        <div>
          <input v-ns-validate type="text">
        </div>
        <div>
          <input type="text">
        </div>
        <div>
          <input type="text">
        </div>
        <input type="button" value="Ok">
      </form>
    </div>
  </ns-modal>
</template>

<script>
import NsModal from "./NsModal.vue";
export default {
  components: { NsModal },
  methods: {
    close: function() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss">
</style>


