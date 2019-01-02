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
    <b-form-input id="city" type="text" name="city" autocomplete="off" placeholder="New York"/>
    <img id="cutlery" src="../assets/cutlery.png">
    <b-form-input id="food" type="text" name="food" autocomplete="off" placeholder="Pick Your Food"/>

    <!-- Price Select -->
    <h3 id="price">Price</h3>
<!-- 
    <div id="buttons">
      <b-button size="lg" id="ds">$</b-button>
      <b-button size="lg" id="ds">$$</b-button>
      <b-button size="lg" id="ds">$$$</b-button>
    </div> -->

    <b-form-checkbox-group
        v-model="selected"
        buttons
        id ="ds"
        size="lg"
        name="ds"
        :options="options"></b-form-checkbox-group>


  </div>
</template>

<script>
export default {
    data(){
        return{
            options: [
                {text: "$", value: "$"},
                {text: "$$", value: "$$"},
                {text: "$$$", value: "$$$"}
            ]
        }
    }
}
</script>


<style scoped>
    div {
        font-family: "Poppins";
    }

    #black {
        position: fixed;
        z-index: -50;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        transform: translateX(calc((100% - 100vw) / 2));
        background-color: rgb(0, 0, 0, 0.5);
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

    h3 {
        color: white;
        font-weight: 700;
        font-size: 100%;
        margin-bottom: 10%;
    }

    .form-control {
        margin: 0 auto;
    }

    #city {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 10%;
        background-color: transparent;
        color: white;
        text-align: center;
        font-size: 500%;
        height: auto;
        font-weight: 800;
        border: none;
        box-shadow: none;
        caret-color: #fd593f;
    }

    #city::placeholder {
        color: white;
        opacity: 0.5;
    }

    #food {
        width: 75%;
        margin: 0 auto;
        background-color: transparent;
        color: white;
        font-size: 200%;
        height: auto;
        border: none;
        box-shadow: none;
        caret-color: #fd593f;
        border-bottom: white 3px dotted;
        display: inline-block;
    }

    #food::placeholder {
        color: white;
        opacity: 0.5;
    }

    #cutlery {
        display: inline;
        width: 10%;
    }

    #price {
        margin-top: 10%;
    }

    #ds {
        margin: 5%;
        width: 75%;
    }       

</style>
