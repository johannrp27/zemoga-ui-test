<template>
  <div class="row flex-nowrap flex-sm-wrap g-0 overflow-scroll">
    <div
      v-for="(candidate, index) in candidates"
      :key="index"
      class="me-4 me-sm-0 mb-0 mb-sm-4 w-fixed">
      <RulingItem
        :candidate="candidate"/>
    </div>
  </div>
</template>

<script>
import RulingItem from './RulingItem.vue';

export default {
  name: 'RulingList',
  components: {
    RulingItem,
  },
  computed: {
    candidates() {
      return this.$store.state.candidates;
    },
  },
};

</script>

<style>
  .row .w-fixed {
    width: 85%;
  }
  @media (min-width: 576px) {
    .row .w-fixed {
      width: 100%;
    }
  }
</style>
