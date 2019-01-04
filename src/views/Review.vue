<template>
  <div>
    <div id="full"></div>
    <h1>Add Review</h1>
    <textarea class="form-control" rows="10"></textarea>
    <b-button>Submit</b-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  font-family: "Poppins";
}

#full {
  position: fixed;
  z-index: -100;
  top: 0;
  background-color: #fd593f;
  height: 100vh;
  width: 100vw;
}

h1 {
  font-weight: 700;
  color: white;
}

textarea {
  width: 90%;
  margin: 0 auto;
  margin-top: 10%;
  caret-color: #fd593f;
}

.btn {
  margin: 15%;
  background-color: white;
  color: #fd593f;
  border: none;
}

.btn:hover {
  background-color: white;
  opacity: 0.5;
  color: #fd593f;
}
</style>
