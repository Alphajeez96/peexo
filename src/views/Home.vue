<template>
<v-app>
  <div class="home">
   <hero></hero> 
  </div>
  <div>
  <afroshot> </afroshot>
  </div>

  <div>
    <calendar></calendar>
  </div>
  
    
    
  
  </v-app>
</template>

<script>
// @ is an alias to /src

import hero from '@/components/Home/Hero'
import afroshot from '@/components/Home/afroshot'
import calendar from '@/components/Home/calendar'

export default {
  name: 'home',
  components: {
    hero, afroshot, calendar
  }
}
</script>
