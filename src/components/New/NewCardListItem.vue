<template>
  <li class="card-list-item" :id="this.user.key">
    <div class="card-list-detail">
      <div class="profile">
        <div class="icon">
          <i class="icon-Icon"></i>
        </div>
        <p>{{this.user.asa}}</p>
      </div>
      <button class="etrafli" @click="toggleAccordion">Ətraflı</button>
    </div>

    <div class="card-list-function" :class="{ active: isActive }">
      <div class="checks">
        <label class="checkbox_group">
          <input type="checkbox" disabled name="" id="" />
          Baxış
        </label>
        <label class="checkbox_group">
          <input type="checkbox" checked name="" id="" />
          ƏməlİYYAT
        </label>
        <label class="checkbox_group">
          <input type="checkbox" name="" id="" />
          TƏSDİQ
        </label>
      </div>
      <button @click="deleteUser"><i class="icon-delete"></i> Silmək</button>
    </div>
  </li>
</template>

<script>
import axios from "axios";
export default {
  props: ['user'],
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleAccordion () {
      this.isActive = !this.isActive;
    },
    deleteUser () {
      axios.delete(`https://abbtask-ced9d-default-rtdb.firebaseio.com/users/${this.user.key}.json`);
      let Item = document.getElementById(`${this.user.key}`);
      Item.remove();
    }
  },
};
</script>