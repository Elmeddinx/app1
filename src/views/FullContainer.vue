<template>
  <div class="full-container">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <span>İstifadəçilər</span>
          <span>Limitlər</span>
        </div>
        <div class="card-body">
          <div class="header">
            <h6>MÖVCUD İSTİFADƏÇİLƏR</h6>
          </div>
          <ul class="card-list">
            <card-list-item-vue
              v-for="list in getPUsers"
              :key="list"
              :list="list"
            ></card-list-item-vue>
          </ul>
        </div>
        <div class="card-footer">
          <div class="header current_users">
            <h6>Yenİ İSTİFADƏÇİLƏR</h6>
          </div>

          <ul class="card-list">
            <new-card-list-item-vue
              v-for="user in getUsers"
              :key="user"
              :user="user"
            ></new-card-list-item-vue>
          </ul>
        </div>
      </div>
      <button
        class="new-user"
        @click="this.$emit('openForm')"
      >
        <i class="icon-plus"></i>Yeni istifadəçi
      </button>
    </div>
  </div>
</template>
<script>
import CardListItemVue from "../components/Current/CardListItem.vue";
import NewCardListItemVue from "../components/New/NewCardListItem.vue";
import { mapGetters } from "vuex";
``
export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    CardListItemVue,
    NewCardListItemVue,
  },
  computed : {
    ...mapGetters(["getPUsers", "getUsers"])
  },
  created() {
      this.$store.dispatch("permanentUser");
  },
};
</script>