<template>
  <full-container-vue @openForm="formToggle"></full-container-vue>
  <overlay-container-vue :class="{ active_form: isActive }" ></overlay-container-vue>
</template>

<script>
import FullContainerVue from "./views/FullContainer.vue";
import OverlayContainerVue from "./views/OverlayContainer.vue";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    FullContainerVue,
    OverlayContainerVue,
  },
  methods: {
    formToggle() {
      this.isActive = !this.isActive;
    },
  },
  created() {
    this.$store.dispatch("initApp");
  }
};
</script>
<style>
</style>
