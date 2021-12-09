<template>
  <div id="app">
    <Header />
    <RulingList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import RulingList from './components/RulingList.vue';

export default {
  name: 'App',
  components: {
    Header,
    RulingList,
  },
  created() {
    this.$store.dispatch('GET_CANDIDATES');
  },
};
</script>

<style lang="scss">

</style>
