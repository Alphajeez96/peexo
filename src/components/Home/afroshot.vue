<template>
    <div class="flex-container">
        <div class="afro"><h1>Alphashots</h1></div>
        <div class=""> <img  class="shield" src="../../../public/blueshield.png"> </div>

            <div class="btnc"> 
                <button type="button" class="btn btn-outline-warning mx-3">Message Photographer</button>
                <button type="button" class="btn btn-outline-warning text-white active mx-3">Book Now</button>
            </div>
    </div>
</template>

<style scoped>
.btnc{
    margin-left: 250px
}

.btn{
    border-radius: 30px;
    width: 20vw;
    height: 7vh;
    text-align: center;
    margin-top: 90px;
}
button:hover{
    color:white;
}
.flex-container{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-top: 10px

}
.shield{
    width:2vw;
    height:4vh;
    margin-top: 100px;
    margin-left: 10px
  
}
     .afro{
        font-weight: 800;
        font-family: cursive;
        text-align: left;
        margin-left: 100px;
        margin-top: 85px;
        font-size: 50px;    
    }


</style>