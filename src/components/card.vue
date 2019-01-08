<template>
  <div class="card-container">
    <div class="card-number">
      <span>{{number + 1}}</span>
    </div>
    <div class="card-image-container" v-bind:style="{backgroundImage: `url(${place.image})`}">
      <img class="card-image">
    </div>
    <div class="card-information-container">
      <div class="card-info">
        <div id="name">{{place.name}}</div>
        <star-rating
          v-bind:rating="parseFloat(place.rating)"
          v-bind:star-size="25"
          v-bind:read-only="true"
          active-color="#ffffff"
        >></star-rating>
        <div id="price">{{this.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  data: function() {
    return {
      price: this.place.price
    };
  },
  components: {
    StarRating: StarRating
  },
  name: "card",
  props: { place: Object, number: Number },
  methods: {

    dollarSigns: function(price) {
      switch (price) {
        case 1:
          this.price = "$";

          break;
        case 2:
          this.price = "$$";

          break;
        case 3:
          this.price = "$$$";

          break;
        default:
        // code block

      }
    }
  },
  mounted() {
    this.dollarSigns(this.place.price);
  }
};
</script>

<style>
.tns-controls {
  display: none;
}

.tns-ovh {
  width: 100vw;
  height: 28.3%;
  position: fixed;
  bottom: 0;
  margin: 0 auto;
}

.tns-inner {
  height: 100%;
}

#tns1 {
  height: 35%;
}

.card-container {
  height: 250px;
  width: 70%;
  background-color: rgba(253, 89, 63, 0.8);
  border-radius: 30px;
  border: solid transparent;
}

.card-image-container {
  background-size: cover;
  float: left;
  width: 40%;
  height: 20vh;
  margin: 10px 0px 10px 10px;
  box-sizing: border-box;
}

.card-information-container {
  color: #fff;
  float: left;
  width: 40%;
  box-sizing: border-box;
}

.card-number {
  float: left;
  width: 10%;
  text-align: center;
  font-size: 90px;
  color: white;
  margin-right: 10px;
}

.card-info {
  width: 100;
  text-align: left;
  padding-left: 20px;
}

#name {
  font-weight: 700;
}

.tns-item {
  height: 284%;
}
</style>