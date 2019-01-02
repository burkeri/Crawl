<template>
    <div>
        <div id="black"></div>
        <div class="vid-container">
            <video id="background-vid" autoplay loop muted src="../assets/Untitled.webm"></video>
        </div>
    </div>
</template>

<style scoped>

    .vid-container {
        position: absolute;
        z-index: -100;
        top: -50%;
        left: -50%;
        width: 100%;
        height: 200%;
        background-color: black;
    }

    #background-vid{
        position: absolute;
        z-index: -100;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        min-height: 50%;
        min-width: 50%;
    }

    #black {
        position: absolute;
        z-index: -50;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        min-height: 50%;
        min-width: 50%;
        background-color: rgb(0, 0, 0, .5);
    }

</style>
