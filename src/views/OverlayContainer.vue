<template>
  <transition name="form">
    <div class="overlay-container" id="form">
      <div class="overlay_bg"></div>
      <div class="overlay_form">
        <div class="header">
          <h5>Yeni istifadəçi</h5>
          <div class="close" @click="closeForm(); $router.push('/');">
            <i class="icon-close"></i>
          </div>
        </div>
        <form-vue></form-vue>
      </div>
    </div>
  </transition>
</template>


<script>
import FormVue from "../components/Form.vue";
export default {
  data() {
    return {};
  },
  components: {
    FormVue
  },
  methods: {
    closeForm() {
      document.getElementById("form").classList.remove("active_form");
    },
  },
};
</script>

<style scoped>
  .form-enter-active, .form-leave-active {
    transition: all .5s ease !important;
  }
</style>