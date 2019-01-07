<template>
  <div class="card-container">
    <div class="card-image-container" v-bind:style="{backgroundImage: `url(${place.image})`}">
      <img class="card-image">
    </div>
    <div class="card-information-container">
      <div class="card-number">
        <span>{{number + 1}}</span>
      </div>
      <div class="card-info">
        <div id="name">{{place.name}}</div>
        <div>{{place.rating}}</div>
        <div id="price">{{place.price}}</div>
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
  props: { place: Object, number: Number },
  methods: {
    dollarSigns: function() {
      for (var i=1; i<=this.place.price; i++) {
        var dollars = document.createElement("span");
        dollars.textContent = "$";
        var div = document.getElementById("price");
        div.appendChild(dollars);
      }
    }
  },
  mounted() {
    this.dollarSigns();
  }
};
</script>

<style>
.tns-controls {
  display: none;
}

.tns-ovh {
  width: 65vw;
  position: fixed;
  bottom: 2%;
  left: 18%;
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
  background-color: rgba(253, 89, 63, .80);
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

.card-information-container {
  color: white;
}

.card-number {
  float: left;
  width: 25%;
  text-align: center;
  font-size: 80px;
  padding-left: 9%;
}

.card-info{
  float: right;
  width: 75%;
  text-align: left;
  padding-left: 20px;
  padding-top: 5px;
}

#name {
  font-weight: 700;
}
</style>



