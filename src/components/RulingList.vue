<template>
  <div>
    <div
      v-for="(candidate, index) in candidates"
      :key="index">
      <RulingItem
        class="mb-4"
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

</style>
