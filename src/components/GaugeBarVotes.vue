<template>
  <div class="gauge__bar progress bg-transparent rounded-0 h-auto">
    <div
      class="gauge__bar__upvotes progress-bar"
      role="progressbar"
      :style="{width: votesUp + '%'}"
      :aria-valuenow="votesUp"
      aria-valuemin="0"
      aria-valuemax="100">
      <div class="d-flex px-3 py-1 gap-2">
        <img src="../assets/thumbs-up.svg" class="" alt="Vote thumb up">
        <span class="font__custom">{{ votesUp }}%</span>
      </div>
    </div>
    <div
      class="gauge__bar__downvotes progress-bar"
      role="progressbar"
      :style="{width: votesDown + '%'}"
      :aria-valuenow="votesDown"
      aria-valuemin="0"
      aria-valuemax="100">
      <div class="d-flex px-3 py-1 gap-2 justify-content-end">
        <img src="../assets/thumbs-down.svg" alt="Vote thumb down">
        <span class="font__custom">{{ votesDown }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaugeBarVotes',
  props: {
    candidate: Object,
  },
  computed: {
    totalVotes() {
      return this.candidate.votes.positive + this.candidate.votes.negative;
    },
    votesUp() {
      return ((this.candidate.votes.positive * 100) / this.totalVotes).toFixed(1);
    },
    votesDown() {
      return ((this.candidate.votes.negative * 100) / this.totalVotes).toFixed(1);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/variables";
  .from_list {
    .font__custom{
      font-size: 1.5rem;
    }
  }
  .from_grid {
    .font__custom{
      font-size: 1rem;
    }
  }
  .gauge__bar__upvotes.progress-bar {
    background-color: rgba($primary-100, 0.5);
  }

  .gauge__bar__downvotes.progress-bar {
    background-color: rgba($secondary-100, 0.5);
  }
</style>
