<template>
  <div id="app">
    <router-view />
  </div>
</template>



<style lang="scss">
@font-face {
  font-family: "Roboto Medium";
  src: url("./assets/fonts/Roboto-Medium.ttf");
}
@font-face {
  font-family: "Roboto Regular";
  src: url("./assets/fonts/Roboto-Regular.ttf");
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-family: "Roboto Regular";
  color: #f1f1fd;
  background-color: rgba(47, 53, 66, 0.95);
}
</style>