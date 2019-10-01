<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("hover.css/css/hover-min.css");

#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
  width: 100%;
}

@media (max-width: 640px) {
   body {
     font-size:1.2rem;
     } 
} 
@media (min-width: 640px) { body {font-size:1rem;} } 
@media (min-width:960px) { body {font-size:0.9rem;} } 
@media (min-width:1100px) { body {font-size:1rem;} } 
</style>
