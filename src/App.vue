<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow mb-3">
  <div class="container">
    <a class="navbar-brand" href="#">C T S</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
           <router-link class="nav-link active" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'About' }">About Us</router-link>
         
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Services' }">Services</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link" :to="{ name: 'Contact' }">Contact</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#work">Our work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#team">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#test">Testimonial</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
  <router-view/>


  <!-- Remove the container if you want to extend the Footer to full width. -->
<div class="">

  <!-- Footer -->
  <footer
          class="text-center text-lg-start text-white"
          style="background-color: #1c2331"
          >
    <!-- Section: Social media -->
    <section
             class="d-flex justify-content-between p-4"
             style="background-color: #6351ce"
             >
      <!-- Left -->
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold">C T S</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
             Leverages the latest technologies like web development, UI/Ux design, Blockchain, and App Development for clients to get the best outcome for their budget. 
             If you are searching for a globally trusted solution partner. We are here!
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">What We Do</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
           Digital marketing
            </p>
            <p>
            WordPress
            </p>
            <p>
            WebFlow
            </p>
            <p>
            UI/UX Design
            </p>
             <p>
             Web Development
            </p>
             <p>
             Mobile Apps Development
            </p>
             <p>
             Startup Development
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
           
           
          
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i>Akure, Ondo state, NG</p>
            <p><i class="fas fa-envelope mr-3"></i> hikay123@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> +234 9057772744</p>
            <p><i class="fas fa-print mr-3"></i> +234 8148837221</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2020 Copyright : C T S | We are creative agency,creative people
     
    </div>
    <!-- Copyright -->
    
  </footer>
  <!-- Footer -->

</div>
<!-- End of .container -->
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css'
export default {
  created(){
    AOS.init();
  }
};
</script>


<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height:1.8;
}
h1,h2,h3,h4,h5,h6{
  font-weight:700;
  letter-spacing:1px;
  text-transform:uppercase;
}
.navbar .nav-link{
  font-size:12px;
  text-transform:uppercase;

}
.navbar-light .navbar-nav .nav-link.active{
  color:crimson;
}
nav{
  position:fixed;
  top:0;
  left:0;
  right:0;
}
p{
  font-size:13px;
}
span{
  font-size:13px;
}
</style>
