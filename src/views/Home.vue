<template>
  <div>
    <!-- Title -->
    <h1>Taste Tour</h1>

    <!-- Overlay -->
    <!-- <div id="black"></div> -->

    <!-- Background Vid -->
    <video id="background-vid" autoplay loop playsinline muted src="../assets/vid-iphone.mp4"></video>

    <!-- Buttons -->
    <b-button size="lg" id="login"> 
      <router-link to="login">Sign In</router-link>
    </b-button>
    <b-button size="lg" id="register">
      <router-link to="register">Sign Up</router-link>
    </b-button>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
#background-vid {
  position: fixed;
  z-index: -100;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transform: translateX(calc((100% - 100vw) / 2));
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

@font-face {
  font-family: "Blow Brush";
  src: url("../assets/blowbrush.otf");
}

h1 {
  font-family: "Blow Brush";
  color: white;
  font-size: 800%;
  margin-top: 10%;
}

a {
  color: white;
  font-family: "Poppins";
}

a:hover {
  color: white;
  text-decoration: none;
  font-family: "Poppins";
}

#login {
  background-color: #fd593f;
  border: none;
}

#login:hover {
  opacity: 0.5;
}

#register {
  background-color: #fd593f;
  border: none;
  opacity: 0.5;
}

#register:hover {
  opacity: 1;
}

#login,
#register {
  margin: 10%;
}
</style>
