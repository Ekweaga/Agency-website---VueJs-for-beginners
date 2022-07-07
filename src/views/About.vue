<template>
<div class=" headeraboutuscontent">
  <div class='container-fluid header text-center'>
  <div class='row justify-content-center ' >
  <div class='col-lg-10 col-sm-12'>
  <h1 class='display-5 '>ABOUT US</h1>
 
  
  
  </div>
  
  </div>
  
  </div>
  </div>
</template>


<script>
export default{
    name:'AboutusComponent'
}
</script>

<style>
.headeraboutuscontent{
 
   background-image:linear-gradient(rgba(17,36,90,0.8), rgba(17,36,90,0.8)),url("@/assets/cts.jpeg");
  background-size:cover;
  background-position:center;
  background-attachment:fixed;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
}
@media(max-width:768px){
  .headeraboutuscontent{
    height:300px;
  }
}
</style>