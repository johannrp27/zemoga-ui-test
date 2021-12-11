<template>
  <div class="card candidate border-0 rounded-0 ">
    <img
    class="candidate__image align-self-start"
    style="height: 200px;"
    :src="candidate.picture.url"
    :alt="candidate.picture.alt">
    <div class="card-img-overlay p-0">
      <div
        id="standing"
        :class="[votesUp > votesDown ? 'bg-primary' : 'bg-secondary']"
        class="position-absolute px-2 py-2 start-0 top-0">
        <img :src="mostVoted" >
      </div>
      <div class="row g-0 h-100 pt-3">

        <div class="offset-2 ps-5 col-6">
          <div class="candidate__info mt-auto">
            <p class="candidate__info-name text-white fw-normal text-truncate m-0">{{ candidate.name }}</p>
            <p class="candidate__info-description text-white">{{ shortDescription }}</p>
          </div>
        </div>

        <div class="col-4">
          <VoteSystem
            class="me-3 from_list"
            :candidate="candidate" />
        </div>

        <div class="col-12 align-self-end w-100">
          <GaugeBarVotes
            class="from_list"
            :candidate="candidate" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VoteSystem from './VoteSystem.vue';
import GaugeBarVotes from './GaugeBarVotes.vue';

export default {
  name: 'CandidateItemList',
  components: {
    VoteSystem,
    GaugeBarVotes,
  },
  props: {
    candidate: Object,
  },
  computed: {
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

  .candidate__info {
    &-name {
      font-size: 1.9rem;
      letter-spacing: 0.7px;
    }
    &-description{
      letter-spacing: 0.4px;
      font-weight: 300;
    }
  }
  #standing{
    img {
      width: 1.35rem;
    }
  }
  .candidate__image {
    height: 100%;
    object-fit: contain;
    filter: brightness(0.8);
    mix-blend-mode: overlay;
  }
  .card.candidate {
    background: linear-gradient(90deg,
      #0000007d 10%,
      #424242 16%,
      #686868 50%,
      #959595 100%);
  }

</style>
