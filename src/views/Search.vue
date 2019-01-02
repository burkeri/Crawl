<template>
    <div>

    <!-- Overlay -->
    <div id="black"></div>

    <!-- Background Image-->
    <div id="background-img">
      <img src="../assets/food2-resize.jpg">
    </div>

    <!-- Search Form -->
    <h3>Pick Your City</h3>
    <b-form-input type="text" name="city"/>
    <b-form-input type="text" name="food" placeholder="Pick Your Food"/>

    <b-button></b-button>
    <b-button></b-button>
    <b-button></b-button>

    </div>
</template>

<style scoped>

    #black {
        position: fixed;
        z-index: -50;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        transform: translateX(calc((100% - 100vw) / 2));
        background-color: rgb(0, 0, 0, .5);
    }

  #background-img {
    position: fixed;
    z-index: -100;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(calc((100% - 100vw) / 2));
    filter: blur(7px);
  }

</style>
