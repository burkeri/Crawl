
<template>
  <div class="star-rating"></div>
</template>

<script>
export default {
    props: { place: Object, number: Number },
    data: function() {
        return {
            config: {
                rating: this.place.rating,
                style: {
                    fullStarColor: '#fd593f',
                    emptyStarColor: '#ffffff',
                    starWidth: 30,
                    starHeight: 30
                }
            }
        }
    }
}
</script>