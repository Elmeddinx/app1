<template>
  <form action="">
    <div class="form_group">
      <label for="">A.S.A.</label>
      <input type="text" v-model="newUsers.asa" />
    </div>
    <div class="form_group">
      <label for=""> FİN Kod <i class="icon-help"></i> </label>
      <input type="text" v-model="newUsers.fin" />
    </div>
    <div class="form_group">
      <label for="">Email</label>
      <input type="email" v-model="newUsers.email" />
    </div>
    <div class="form_group">
      <label for="">Kod sözü <i class="icon-help"></i></label>
      <input type="text" v-model="newUsers.kodsoz" />
    </div>
    <div class="form_group">
      <label for="">Mobil nömrə</label>
      <input type="number" v-model="newUsers.number" />
    </div>
    <div class="form_group checkbox_group">
      <input type="checkbox" v-model="newUsers.checked" />
      <label for="">SMS OTP</label>
      <i class="icon-help"></i>
    </div>
    <button
      @click.prevent="postUsers">
      Əlavə et
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newUsers: {
        asa: "",
        fin: "",
        email: "",
        kodsoz: "",
        number: "",
        checked: false,
      },
    };
  },
  methods: {
    postUsers() {
      this.$store.dispatch("saveUser", this.newUsers);
      document.getElementById("form").classList.remove("active_form");
      this.newUsers = {};
    },
  },
};
</script> 