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

        <!-- Image -->
        <img id="cutlery" src="../assets/cutlery.png"/>

        <!-- Buttons -->
        <b-button size="lg">Back to Search</b-button>
        <router-link to="/" id="out">Log Out</router-link>

    </div>
</template>

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
        font-size: 450%;
        font-weight: 700;
        color: white;
    }

    #cutlery {
        width: 25%;
        margin: 5%;
    }

    #container {
        position: absolute;
        min-width: 100%;
        min-height: 90%;
        overflow: scroll;
    }

    p {
        background-color: #fb593f;
        color: white;
        width: 75%;
        margin: 0 auto;
        margin-top: 10%;
        padding: 5%;
    }

    .btn {
        display: block;
        margin: 0 auto;
        border: none;
        margin-top: 15%;
        margin-bottom: 15%;
        background-color: #fb593f;
    }

    a:not([href]):not([tabindex]) {
        color: white;
        text-decoration: none;
        opacity: .5;
    }

    a:not([href]):not([tabindex]):focus,
    a:not([href]):not([tabindex]):hover {
        opacity: 1;
        color: white;
    }
</style>


