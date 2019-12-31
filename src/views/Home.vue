<template>
<v-app>
  <div class="home">
   <hero></hero>
   
  </div>

  <afroshot> </afroshot>
  <div>
    <calendar></calendar>
  </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import hero from '@/components/Home/Hero'
import herobar from '@/components/Home/herobar'
import afroshot from '@/components/Home/afroshot'
import calendar from '@/components/Home/calendar'

export default {
  name: 'home',
  components: {
    hero, herobar, afroshot, calendar
  }
}
</script>
