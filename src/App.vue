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
};
</script>

<style lang="scss">

</style>
