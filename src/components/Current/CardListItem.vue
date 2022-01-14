<template>
  <li class="card-list-item" :class="{'blockItem' : isBlock}">
    <div class="card-list-detail">
      <div class="profile">
        <div class="icon">
          <i class="icon-Icon"></i>
        </div>
        <p>{{this.list.asa}}</p>
      </div>
      <button class="etrafli" :disabled="isBlock" @click.prevent="toggleAccordion">Ətraflı</button>
    </div>
    <div class="card-list-function" :class="{ 'active': isActive }">
      <div class="checks" :aria-disabled="isBlock">
        <label class="checkbox_group">
          <input type="checkbox" disabled name="" id="" />
          Baxış
        </label>
        <label class="checkbox_group">
          <input type="checkbox" :disabled="isBlock" checked name="" id="" />
          ƏməlİYYAT
        </label>
        <label class="checkbox_group">
          <input type="checkbox" :disabled="isBlock" name="" id="" />
          TƏSDİQ
        </label>
      </div>
      <button @click.prevent="toggleBlock" class="btnBlock"><i class="icon-block"></i> Bloklamaq</button>
    </div>
  </li>
</template>

<script>
export default {
  props : ['list'],
  data() {
    return {
      isActive: false,
      isBlock : false
    };
  },
  methods: {
    toggleAccordion: function () {
      this.isActive = !this.isActive;
    },
    toggleBlock: function (){
      this.isBlock = !this.isBlock;
    }
  },
};
</script>


<style scoped>
.blockItem .card-list-detail, .blockItem .checks{
  opacity: .5
}
.blockItem .card-list-detail button {
  cursor: context-menu !important;
}
.blockItem .card-list-detail button:hover {
  background-color: #ffffff !important ;
  color: #ffd217 !important;
}
</style>
