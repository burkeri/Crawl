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

<style scoped>
.card-container {
  width: 200px;
  height: 200px;
}

.card-image-container {
  background-position: center;
  background-size: cover;
  width: 80%;
  height: 80%;
}

.card-image {
  width: 100px;
  height: auto;
}
</style>



