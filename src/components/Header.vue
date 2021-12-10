<template>
  <div class="d-flex align-items-center mb-4">
    <h2 class="m-0 flex-grow-1">Previous Rulings</h2>
    <div>
      <select
        v-model="selectedOpt"
        @change="setChange"
        class="form-select px-5 d-none d-sm-block"
        aria-label="Select visualization type">
        <option selected value="list">List</option>
        <option value="grid">Grid</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      selectedOpt: 'list',
    };
  },
  methods: {
    setChange() {
      this.$store.commit('SET_VISUALIZATION', this.selectedOpt);
    },
  },
};

</script>

<style>

</style>
