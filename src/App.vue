<template>
<v-app>
  <div id="app">
     <!-- <font-awesome-icon icon="user-secret" /> -->
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Navbar></Navbar>
    </div>
    <router-view/>
  </div>
   <pfoot></pfoot>
</v-app>
</template>

<script>

import Navbar from '@/components/navbar';
import pfoot from '@/components/footer'

export default {
   data: () => {
   },

  components: {
    Navbar, pfoot
  },
};

  </script>
  
 
 


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* font-family:Georgia, 'Times New Roman', Times, serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow:hidden
}


#nav a {
  /* font-weight: bold; */
  color: #2c3e50;
}

</style>
