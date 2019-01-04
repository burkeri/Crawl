<template>
    <div>
        <!-- Overlay -->
        <div id="black"></div>

        <!-- Background Image-->
        <div id="background-img">
            <img src="../assets/map.jpg">
        </div>

        <!-- Title -->
        <h1>End of Crawl</h1>

        <img id="cutlery" src="../assets/cutlery.png"/>

        <div id="container">
            <p></p>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            marker: 1,
            spots: [
                {
                    number: this.marker,
                    name: "Lorem Ipsum",
                    pic: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    number: this.marker,
                    name: "Lorem Ipsum",
                    pic: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    number: this.marker,
                    name: "Lorem Ipsum",
                    pic: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
            ] 
        }
    },
    methods: {
        showSpots: function() {

           for (var i=0; i< this.spots.length; i++){
                var bucket = document.getElementById("container");
                var para = document.createElement("p");

                para.appendChild(this.name);

                bucket.appendChild(para);

                this.marker++;
           }

        }
    },
    mounted() {
        this.showSpots();
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
        filter: blur(4px);
    }

    h1 {
        font-weight: 700;
        color: white;
    }

    #cutlery {
        width: 25%;
        margin: 5%;
    }

    #container {
        position: fixed;
        min-width: 100%;
        min-height: 100%;
        background-color: aqua;
        overflow: scroll;
    }

    p {
        background-color: #fb593f;
    }
</style>


