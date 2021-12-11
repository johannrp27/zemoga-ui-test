<template>
<div>
  <div class="vote vote__system">
    <div class="vote__category pb-2 text-end text-white">
      <span v-if="isSubmited">Thank you for your vote!</span>
      <span v-else>{{ candidate.category }}</span>
    </div>
    <div
      v-if="!isSubmited"
      class="d-flex gap-2 justify-content-end">
      <button
      class="vote__system-up btn btn-primary rounded-0"
      @click.prevent="vote('up')">
        <img
          src="../assets/thumbs-up.svg"
          alt="Vote thumb up">
      </button>
      <button
        class="vote__system-down btn btn-secondary rounded-0"
        @click.prevent="vote('down')">
        <img
          src="../assets/thumbs-down.svg"
          alt="Vote thumb down">
      </button>
      <button
        :disabled="!selectedVote"
        @click.prevent="submitVote"
        class="btn btn__vote-again text-white rounded-0">
        Vote now
      </button>
    </div>
    <div
      v-else
      class="text-end">
      <button
        @click.prevent="submitAgain"
        class="btn btn__vote-again text-white rounded-0">
        Vote Again
      </button>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'VoteSystem',
  props: {
    candidate: Object,
  },
  data() {
    return {
      selectedVote: 0,
      isSubmited: false,
    };
  },
  methods: {
    vote(vote) {
      this.selectedVote = vote;
    },
    submitVote() {
      const data = {
        id: this.candidate.id,
        vote: this.selectedVote,
      };
      this.$store.dispatch('VOTE_CANDIDATE', data);
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
  .from_list {
    .btn.vote__system-up,
    .btn.vote__system-down {
      img {
        width: 1.35rem;
      }
    }
  }
  .from_grid {
    .btn.vote__system-up,
    .btn.vote__system-down {
      padding: 0.1rem 0.35rem;
    }
    .vote__system{
      padding-left: 2.2rem;
      padding-right: 2.2rem;
    }
  }
  .btn.btn__vote-again {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    padding-top: 6px;
    padding-bottom: 6px;
    border: 1px solid white;
    background-color: rgb(70,70,70);
  }
  .btn.btn-primary:focus, .btn.btn-secondary:focus {
    border-color: white;
    box-shadow: 0 0 0 1px #ffffff;
  }
</style>
