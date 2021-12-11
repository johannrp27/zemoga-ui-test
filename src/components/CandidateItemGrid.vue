<template>
  <div class="card rounded-0 border-0 candidate" style="height:350px;">
    <img
    class="candidate__image"
    :src="candidate.picture.url"
    :alt="candidate.picture.alt">
    <div class="card-img-overlay d-flex flex-column inner p-0">

      <div
        id="standing"
        :class="[votesUp > votesDown ? 'bg-primary' : 'bg-secondary']"
        class="position-absolute px-2 py-1 start-0">
        <img :src="mostVoted">
      </div>

      <div class="candidate__info mt-auto">
        <p class="candidate__info-name text-white fw-normal text-truncate m-0">{{ candidate.name }}</p>
        <p class="candidate__info-description text-white fw-light small">{{ shortDescription }}</p>
      </div>

      <VoteSystem
        class="mb-2 from_grid"
        :candidate="candidate" />

      <div class="align-self-end w-100">
        <GaugeBarVotes
          class="from_grid"
          :candidate="candidate" />
      </div>
    </div>
  </div>
</template>

<script>
import VoteSystem from './VoteSystem.vue';
import GaugeBarVotes from './GaugeBarVotes.vue';

export default {
  name: 'CandidateItemGrid',
  components: {
    VoteSystem,
    GaugeBarVotes,
  },
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
    shortDescription() {
      return `${this.candidate.description.slice(0, 80)}...`;
    },
    mostVoted() {
      if (this.positivePerc >= this.negativePerc) {
        return '../assets/img/thumbs-up.svg';
      }
      return '../assets/img/thumbs-down.svg';
    },
  },
};
</script>

<style lang="scss" scoped>
  .candidate__info-name {
    font-size: 1.9rem;
    letter-spacing: 0.7px;
  }
  .candidate__image {
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
  }
  #standing {
    top: 30%;
  }
  .inner{
    .candidate__info {
      padding-left: 2.2rem;
      padding-right: 2.2rem;
    }
  }

</style>
