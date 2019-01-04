<template>
  <div>
    <!-- Place Header -->
    <div id="info-pic-div">
      <img id="info-pic" :src="infoPic">
      <h1>{{name}}</h1>
      <div id="black"></div>
    </div>

    <!-- Rating -->
    <div id="rating-container"></div>

    <!-- Reviews -->
    <div id="container">

      <ul id="reviews" v-for="item in items" :key="item.key">
        <li>{{item.review}}</li>
      </ul>

    </div>
    
  </div>
</template>

<script>
export default {

  data() {
    return {
      infoPic:
        "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Lorem Ipsum",
      stars:
        "https://img.freepik.com/free-icon/five-points-star_318-1414.jpg?size=338&ext=jpg",
      items: [
        {
          key: 1,
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          key: 2,
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          key: 3,
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          key: 4,
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          key: 5,
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        }
    },
    methods: {
        printRating: function() {

            // STAR HALVESS WILL NOT SHOW UP
            // CANNOT FOLLOW PATH

           var iterator = (this.rating);

           for (var i=0; i< iterator; i++){
                // hook into div
                var bucket = document.getElementById("rating-container");
                // make div for each 1/2 star
                var wrap = document.createElement("div");
                // make  1/2 star
                var lstar = document.createElement("img");
                var rstar = document.createElement("img");

                // set source for 1/2 stars
                lstar.setAttribute("src", "/Users/richelleburke/Documents/UCF/UCF_Local/Group Projects/Project_2/Crawl/src/assets/left-star.png");
                rstar.setAttribute("src", "../assets/right-star.png");

                // add class to 1/2 stars and div
                lstar.classList.add("rating-icon");
                rstar.classList.add("rating-icon");
                wrap.classList.add("rating-icon", "inline");

                // add 1/2 stars to div
                wrap.appendChild(lstar);
                wrap.appendChild(rstar);
                bucket.appendChild(wrap);
           }
        }
    },
    mounted(){
        this.printRating();
    }
}

</script>
    
<style scoped>
    div {
        font-family: "Poppins";
    }

    #info-pic-div {
        position: fixed;
        top: 0;
        z-index: -100;
        width: 100%;
        height: 40%;
        overflow: hidden;
    }

    #info-pic {
        position: absolute;
        z-index: -100;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        filter: blur(2px);
    }

    #black {
        position: absolute;
        z-index: -100;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgb(0, 0, 0, 0.35);
    }

    h1 {
        position: absolute;
        top: 40%;
        transform: translateX(calc((-100% - -100vw) / 2));
        color: white;
        font-weight: 700;
    }

    #rating-container {
        background-color: white;
        height:10%;
        width: 100%;
        position: fixed;
        top: 40%;
        left: 0;
        padding: 2%;
        display: inline;
    }

    #stars {
        position: absolute;
        height: 100%;
        margin: 0 auto;
    }

    #container {
        position: absolute;
        z-index: -200;
        top: 50%;
        background-color:white;
    }

    #reviews {
        background-color: #fd593f;
        color: white;
        text-align: left;
        padding: 5%;
        margin: 10%;
    }

    img {
        display: inline;
    }

    .btn {
        background-color: #fd593f;
        border: none;
        margin-bottom: 5%;
    }

    .btn:hover, .btn:visited {
        background-color: #fd593f;
        border: none;
        opacity: .5;
    }

</style>

<style>

    .rating-icon {
        height: 100%;
        margin-right: 1%;
    }

    .inline {
        display: inline;
    }

#reviews {
  background-color: #fd593f;
  color: white;
  text-align: left;
  padding: 5%;
  margin: 10%;
}
</style>
