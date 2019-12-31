<template>
  <div class="container-fluid col-12">
    <div class="row " id="parent">
      <div class=" col-12 welcome-image border-bottom">
         <div  class="col-12 col-md-6 mx-auto welcome-image-words text-center">       
         </div>
     
     
      </div>
       <div class="herobar container-fluid mb-4">

         <ul class="heroli">
             <a><li class="mx-5 y py-5">Details</li></a>
            <a><li class="mx-5 mt-2">portfolio</li></a>
              <!-- <button type="button" class=" t btn btn-light">Availability</button> -->
            <a href=""> <li class=" t mx-5 pt-2 active">Availability</li> </a>
             <a><li class="mx-5 mt-2">Pricing Packages</li></a>
             <a><li class="mx-5 mt-2">Reviews</li> </a>    
         </ul>
         <img src="../../../public/My pix.jpeg" class="rounded float-left" alt="...">
          <!-- <img src="../../../public/My pix.jpeg" class="card-img-top" alt="..."> -->
         </div>
      </div>
       
    </div>
    
</template>

<style>

.heroli{
  margin-left: 250px;
  margin-top: 15px;
  display: flex;
  flex-direction: row
}
a:active{
  border: 4px solid black;
}
#parent{
  position:relative;
}

.welcome-image {
  min-height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("../../../public/hero.jpg");
  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
  position:absolute;
}
#parent img{
  position: absolute;
  width: 160px;
  height:160px;
  /* top:50px; */
  /* right:50px; */
  left:50px;
  bottom: -50px;
  /* top: -60px; */
  margin-left:70px
}
.welcome-image-words {
    /* width:100%; */
  height: 80vh;
  margin-top: 10vh;
}

.herobar{  
    background: #FFB503;
    height: 60px;   
    position:absolute; 
    top:600px;
    bottom:px
}
.herobar li{
    color:white;
    font:14px;
    list-style: none;
    display:inline;
    cursor:pointer;
   
}

   
</style>