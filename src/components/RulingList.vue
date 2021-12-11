<template>
  <div
    v-if="show === 'grid'"
    class="row type__grid">
    <div
      v-for="(candidate, index) in candidates"
      :key="index"
      class="col-10 col-sm-4 mb-4">
      <CandidateItemGrid
        :candidate="candidate" />
    </div>
  </div>
  <div
    v-else
    class="row type__list">
    <div
      v-for="(candidate, index) in candidates"
      :key="index"
      class="col-12 mb-4">
      <CandidateItemList
        :candidate="candidate" />
    </div>
  </div>
</template>

<script>
import CandidateItemList from './CandidateItemList.vue';
import CandidateItemGrid from './CandidateItemGrid.vue';

export default {
  name: 'RulingList',
  components: {
    CandidateItemList,
    CandidateItemGrid,
  },
  computed: {
    candidates() {
      return this.$store.state.candidates;
    },
    show() {
      return this.$store.state.visualization;
    },
  },
};

</script>

<style lang="scss">
  .row.type__grid {
    overflow-x: scroll;
    flex-wrap: nowrap;
  }

  @media (min-width: 576px) {
    .row.type__grid {
      overflow-x: auto;
      flex-wrap: wrap;
    }
  }
</style>
