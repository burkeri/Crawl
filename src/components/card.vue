<template>
  <div class="card-container">
    <div class="card-image-container" v-bind:style="{backgroundImage: `url(${place.image})`}">
      <img class="card-image">
    </div>
    <div class="card-information-container">
      <span class="card-number">{{number + 1}}</span>
      <div class="card-info">
        <div>{{place.name}}</div>
        <div>{{place.rating}}</div>
        <div>{{place.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   data() {
  //     styleObject: {
  //       backgroundImage: `url(${this.place.image})`;
  //     }
  //   },
  name: "card",
  props: { place: Object, number: Number }
};
</script>

<style>
.tns-controls {
  display: none;
}

.tns-ovh {
  height: 100vh;
  width: 75vw;
  margin: 0 auto;
  margin-top: 80%;
}

.tns-inner {
  height: 100%;
}

#tns1 {
  height: 35%;
}

.card-container {
	height: 100%;
  width: 75%;
  background-color: rgba(253, 89, 63, .85);
  border-radius: 30px;
  border: solid transparent;
}

.card-image-container {
  height: 50%;
  width: 75%;
  margin: 0 auto;
  margin-top: 5%;
  background-size: cover;
  background-position: center;
}
</style>



