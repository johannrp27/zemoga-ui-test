<template>
  <div class="row g-0 flex-nowrap flex-sm-wrap overflow-scroll">
    <div
      v-for="(candidate, index) in candidates"
      :key="index"
      class="me-4 mb-0 me-sm-0 mb-sm-4"
      :class="[visualization === 'grid' ? 'col-sm-4 col-12 pe-3' : 'w-fixed']">
      <RulingItem
        :type="visualization"
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
    visualization() {
      return this.$store.state.visualization;
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
