<template>
  <div>
    <div class="card candidate border-0 rounded-0 text-white">
      <div class="row g-0 card__content">
        <div class="col-3 card__content__poll">
          <div
            :class="[votesUp > votesDown ? 'bg-primary' : 'bg-secondary']"
            class="d-inline-block text-center px-2 py-2 rounded-0">
            <img :src="mostVoted" class="votes">
          </div>
        </div>
        <div class="col-5 card__content__info py-2">
          <h3 class="text-white fw-normal">{{ candidate.name }}</h3>
          <p class="fw-light">{{ shortDescription }}</p>
        </div>
        <div class="col card__content__vote text-end py-2">
          <div class="me-2">
            <div class="pb-2">
              <span class="">{{ candidate.category }}</span>
            </div>
            <div class="d-flex gap-2 justify-content-end">
              <button class="btn btn-primary rounded-0">
                <img src="../assets/thumbs-up.svg" class="votes" alt="Vote thumb up">
              </button>
              <button class="btn btn-secondary rounded-0">
                <img src="../assets/thumbs-down.svg" class="votes" alt="Vote thumb down">
              </button>
              <button class="btn btn-custom text-white rounded-0">
                Vote now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="gauge__bar progress rounded-0 h-auto justify-content-between">
        <div
          class="gauge__bar__upvotes progress-bar"
          role="progressbar"
          :style="{width: votesUp + '%'}"
          :aria-valuenow="{width: votesUp + '%'}"
          aria-valuemin="0"
          aria-valuemax="100">
          <div class="d-flex px-3 py-1 gap-2">
            <img src="../assets/thumbs-up.svg" class="" alt="Vote thumb up">
            <span class="fs-4">{{ votesUp }}</span>
          </div>
        </div>
        <div
          class="gauge__bar__downvotes progress-bar"
          role="progressbar"
          :style="{width: votesDown + '%'}"
          :aria-valuenow="{width: votesDown + '%'}"
          aria-valuemin="0"
          aria-valuemax="100">
          <div class="d-flex px-3 py-1 gap-2 justify-content-end">
            <img src="../assets/thumbs-down.svg" alt="Vote thumb down">
            <span class="fs-4">{{ votesDown }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RulingItem',
  data() {
    return {
    };
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

<style lang="scss">
@import "../scss/variables";

.card.candidate {
  background: url(../assets/pope-francis.png) no-repeat,
  linear-gradient(90deg,
    rgb(149, 149, 149) 0%,
    rgb(104, 104, 104) 50%,
    rgb(149, 149, 149) 100%);
  background-size: contain;
}

.gauge__bar.progress {
  background-color: transparent;
}

.gauge__bar__upvotes.progress-bar {
  background-color: rgba($primary-100, 0.5);
}

.gauge__bar__downvotes.progress-bar {
  background-color: rgba($secondary-100, 0.5);
}

.btn.btn-custom {
  border: 1px solid white;
  background-color: rgb(70,70,70);
}

.votes {
  width: 1.3rem;
}
</style>
