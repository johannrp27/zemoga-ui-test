<template>
  <div class="card candidate border-0 rounded-0 text-white h-100">
    <div class="row g-0 card__content pt-5 mt-5 mt-sm-0 pt-sm-0 h-100">
      <div class="col-2 col-sm-3 card__content__poll">
        <div
          :class="[votesUp > votesDown ? 'bg-primary' : 'bg-secondary']"
          class="d-inline-block text-center px-2 py-2 rounded-0">
          <img :src="mostVoted" class="votes">
        </div>
      </div>
      <div class="col-8 col-sm-5 card__content__info py-2">
        <h3 class="text-white fw-normal text-truncate">{{ candidate.name }}</h3>
        <p class="fw-light">{{ shortDescription }}</p>
      </div>
      <div class="col-10 col-sm-4 card__content__vote py-2 pe-sm-2">
        <div class="pb-2 text-end">
          <span v-if="isSubmited">Thank you for your vote!</span>
          <span v-else>{{ candidate.category }}</span>
        </div>
        <div
          v-if="!isSubmited"
          class="d-flex gap-2 justify-content-end votes__btn">
          <button
          class="btn btn-primary rounded-0"
          @click.prevent="vote(1)">
            <img
              src="../assets/thumbs-up.svg"
              class="votes"
              alt="Vote thumb up">
          </button>
          <button
            class="btn btn-secondary rounded-0"
            @click.prevent="vote(-1)">
            <img
              src="../assets/thumbs-down.svg"
              class="votes"
              alt="Vote thumb down">
          </button>
          <button
            :disabled="!selectedVote"
            @click.prevent="submitVote"
            class="btn btn-custom text-white rounded-0">
            Vote now
          </button>
        </div>
        <div
          v-else
          class="text-end">
          <button
            @click.prevent="submitAgain"
            class="btn btn-custom text-white rounded-0">
            Vote Again
          </button>
        </div>
      </div>
      <div class="col-12 align-self-end">
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
  </div>
</template>

<script>
export default {
  name: 'RulingItem',
  data() {
    return {
      selectedVote: 0,
      isSubmited: false,
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
      return `${this.candidate.description.slice(0, 90)}...`;
    },
    mostVoted() {
      if (this.positivePerc >= this.negativePerc) {
        return '../assets/img/thumbs-up.svg';
      }
      return '../assets/img/thumbs-down.svg';
    },
  },
  methods: {
    vote(count) {
      this.selectedVote = count;
      console.log(count);
    },
    submitVote() {
      console.log('submit', this.selectedVote);
      this.isSubmited = true;
    },
    submitAgain() {
      this.selectedVote = 0;
      this.isSubmited = false;
    },
  },
};

</script>

<style lang="scss">
@import "../scss/variables";

.card.candidate {
  background: url(../assets/pope-francis.png) no-repeat;
  background-size: cover;
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

@media (min-width:576px) {
  .card.candidate {
    background: url(../assets/pope-francis.png) no-repeat,
    linear-gradient(90deg,
      rgb(149, 149, 149) 0%,
      rgb(104, 104, 104) 50%,
      rgb(149, 149, 149) 100%);
    background-size: contain;
  }
}
</style>
