<template>
  <v-app>
    <div>
      <pnav></pnav>
      <v-content>
        <router-view></router-view>
         <pfoot></pfoot>
      </v-content>
     
    </div>
  
   
  </v-app>
</template>

<script>
import pnav from '@/components/navbar';
import pfoot from '@/components/footer'



export default {
  name: 'App',

  components: {
    pnav, pfoot
  },

  data: () => ({
    //
  }),
};
</script>
