<template>
<v-app>
<div class="caldiv">
  <v-sheet height="500">
    <v-calendar
      type="month"
      now="2019-31-12"
      value="2019-01-08"
      :events="events"
      class="cal"
    ></v-calendar>
  </v-sheet>
  </div>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
     
    }),
  }
</script>

<style >
  .cal{
    margin-top:20px;
   
  }
  .caldiv{
    width:500px;
    margin: auto;

  }
</style>