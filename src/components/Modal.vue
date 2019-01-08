<template>
  <div>
    <b-button @click="show">Modal</b-button>
    <b-modal ref="reviewModal" hide-footer hide-header class="b-modal">
      <div class="modal-content-container">
        <h3>You've Arrived!</h3>
        <div
          class="modal-image-container"
          v-bind:style="{backgroundImage: `url(${this.routeObj.places[this.crawlInfo.nextLocationCounter].image})`}"
        ></div>
        <div>
          <h4>{{this.routeObj.places[this.crawlInfo.nextLocationCounter].name}}</h4>
          <h4>{{this.routeObj.places[this.crawlInfo.nextLocationCounter].address}}</h4>
          <p>Leave a Rating?</p>

          <star-rating
            v-model="rating"
            v-bind:star-size="50"
            v-bind:increment="1"
            v-bind:max-rating="5"
            v-bind:show-rating="false"
            active-color="#ffffff"
          >></star-rating>

          <br>
          <b-button class="modal-submit" @click="review">Submit</b-button>
          <div class="no-thanks" @click="closeModal" id="out">No Thanks</div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ReviewService from "../services/ReviewService";
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating: StarRating
  },
  data: function() {
    return {
      rating: 3,
      crawlInfo: this.$store.state.info.crawlInfo,
      routeObj: this.$store.state.info.routeObj
    };
  },
  methods: {
    show: function() {
      this.$refs.reviewModal.show();
    },
    async review() {
      try {
        const review = await ReviewService.review({
          pid: this.$store.state.info.crawlInfo.pid,
          rating: this.rating
        });
        this.closeModal();
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    closeModal() {
      this.$refs.reviewModal.hide();
      console.log(`You left`);
      const newCrawlInfo = {
        nextLocationCounter: this.crawlInfo.nextLocationCounter + 1,
        visitStage: 0
      };
      this.$store.dispatch("setCrawlInfo", newCrawlInfo);
      this.crawlInfo = newCrawlInfo;
      this.key++;
      if (this.crawlInfo.nextLocationCounter === this.routeObj.places.length) {
        this.$router.push("end");
      }
    }
  },
  beforeMount() {
    this.routeObj = this.$store.state.info.routeObj;
    this.crawlInfo = this.$store.state.info.crawlInfo;
  }
};
</script>
<style>
.modal-content {
  background-color: rgba(253, 89, 63, 0.75) !important;
}
.vue-star-rating {
  justify-content: center;
}
</style>


<style scoped>
.no-thanks {
  text-align: right;
  font-size: 12px;
}

.modal-content-container {
  color: white;
}

.modal-image-container {
  width: 80%;
  height: 200px;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
}

.modal-submit {
  border: none;
  background-color: white;
  color: #fd593f;
}
</style>
