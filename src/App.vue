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
          <a class="nav-link" href="#">Our work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Testimonial</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
  <router-view/>
</template>
<script>
export default {
  
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height:1.8;
}
h1,h2,h3,h4,h5,h6{
  font-weight:700;
  letter-spacing:px;
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
</style>
