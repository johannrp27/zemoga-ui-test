<template>
  <div class="d-flex align-items-center mb-4">
    <h2 class="m-0 flex-grow-1">Previous Rulings</h2>
    <div>
      <select
        v-model="selectedOpt"
        @change="setChange"
        class="form-select d-none d-sm-block rounded-0 border-2 border-dark"
        aria-label="Select visualization type">
        <option value="list">List</option>
        <option selected value="grid">Grid</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      selectedOpt: 'grid',
    };
  },
  methods: {
    setChange() {
      this.$store.commit('SET_VISUALIZATION', this.selectedOpt);
    },
  },
};
</script>
<style lang="scss">
  .form-select {
    padding: 5px 25px;
  }
</style>
