<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light our-nav col-12 ">
            <router-link to="/">
    <a class="navbar-brand app-logo" >
        <img src="../../public/peexoo234.ab7075f3.png" alt="">
    </a>
    </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
           
           <!-- <router-link to="/comingsoon"> -->
            <li class="nav-item mx-2">
                <a class="nav-link" href="#"  style="color: grey">I am a photographer</a>
            </li>
            <!-- </router-link> -->

            <!-- <router-link class="nav-link" to="/comingsoon"> -->
            <li class="nav-item mx-2">
                <a class="nav-link" href="#"   style="color: grey">Explore Photos</a>
            </li>
             <!-- </router-link> -->

            <!-- <router-link to="/comingsoon"> -->
            <li class="nav-item mx-2">
                <a class="nav-link" href="#"  style="color: grey">Find a Photographer</a>
            </li>
              <!-- </router-link> -->

            <!-- <router-link to="/comingsoon"> -->
             <li class="nav-item mx-2">
                <a class="nav-link" href="#"  style="color: grey">Find my photos</a>
            </li>
               <!-- </router-link> -->

            <!-- <router-link to="/comingsoon"> -->
             <li class="nav-item mx-2">
                <a class="nav-link login-btn"  href="#"  style="color: orange">Login or Register</a>
            </li>
            <!-- </router-link> -->
        </ul>   
    </div>
</nav>
    </div>

</template>

<style>
   
.app-logo{
    margin-left: 2vw;
    margin-bottom:10px;
}

.app-logo img{
    width: 12vw;
    height: 10vh;
}
.nav-item .nav-link{
    font-size: 14px;
    margin-top:20px;
}


@media screen and (max-width: 992px) {
    .login-btn,  .signup-btn{
        width: 15vw;
    }
}

@media screen and (max-width: 768px) {
    .login-btn , .signup-btn{
        width: 100px;
        margin-left: 0rem !important;
    }
    .app-logo img {
        width: 20vw;
    }
    .app-logo {
        margin-left: 0vw;
        color:rgb(204, 197, 197);
    }


}

</style>