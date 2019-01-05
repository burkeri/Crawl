<template>
  <div>
    <div>
      <img :src="place.image">
    </div>
    <div>
      <span>{{number + 1}}</span>
      <div>
        <div>{{place.name}}</div>
        <div>{{place.rating}}</div>
        <div>{{place.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: { place: Object, number: Number }
};
</script>

