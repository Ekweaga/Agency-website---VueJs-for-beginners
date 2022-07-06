<template>
<div class=" headercontent">
  <div class='container-fluid header '>
  <div class='row ml-auto mr-auto ' >
  <div class='col-10'>
  <h1>WE ARE CREATIVE AGENCY, 
  CREATIVE PEOPLE</h1>
  <p>It is a long established fact that a reader will be distractd by the readable content of a page when looking at its layout. The point of using
  lorem ipsum is that it has more or less</p>
  <div><button>Contact Us</button></div>
  
  </div>
  
  </div>
  
  </div>
  </div>
</template>


<script>
export default{
  name:'HomeComponent',
  data(){
    return{
        image:'@assets/cts.jpeg',
    }
  }

}
</script>

<style>
.headercontent{
   min-height:100vh;
   background-image:linear-gradient(rgba(17,36,90,0.8), rgba(17,36,90,0.8)),url("@/assets/cts.jpeg");
  background-size:cover;
  background-position:center;
  background-attachment:fixed;
    color:white;
}
.header{
padding:100px;
}
</style>