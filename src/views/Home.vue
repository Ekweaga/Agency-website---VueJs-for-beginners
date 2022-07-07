<template>
<div class=" headercontent">
  <div class='container-fluid header text-center'>
  <div class='row justify-content-center ' >
  <div class='col-lg-10 col-sm-12'>
  <h1 class='display-5 '>WE ARE CREATIVE AGENCY, 
  CREATIVE PEOPLE</h1>
  <p class="headerp">It is a long established fact that a reader will be distractd by the readable content of a page when looking at its layout. The point of using
  lorem ipsum is that it has more or less</p>
  <div><button class="btn btn-danger mt-3 w-30">Contact Us</button></div>
  
  </div>
  
  </div>
  
  </div>
  </div>


  <div class="container services">
        <div class='col-12'><h1 class='mt-3'>OUR SERVICES</h1></div>
        <div class='row'>
        <div class='col-lg-4 col-sm-12'>
       <div class='icon'>1</div>
        <h4>UI/UX DESIGN</h4>
        <p>It is a long established fact that a reader will be distractd by the readable content of a page when looking at its layout</p>
        </div>

        <div class='col-lg-4 col-sm-12'>
        <div class='icon'>2</div>
        <h4>UI/UX DESIGN</h4>
        <p>It is a long established fact that a reader will be distractd by the readable content 
        of a page when looking at its layout</p>
        </div>

        <div class='col-lg-4 col-sm-12'>
        <div class='icon'>3</div>
        <h4>UI/UX DESIGN</h4>
        <p>It is a long established fact that a reader will be distractd by the readable content 
        of a page when looking at its layout</p>
        </div>

        </div>


         <div class='row'>
   <div class='col-lg-4 col-sm-12'>
       <div class='icon'>1</div>
        <h4>UI/UX DESIGN</h4>
        <p>It is a long established fact that a reader will be distractd by the readable content of a page when looking at its layout</p>
        </div>

        <div class='col-lg-4 col-sm-12'>
        <div class='icon'>2</div>
        <h4>UI/UX DESIGN</h4>
        <p>It is a long established fact that a reader will be distractd by the readable content 
        of a page when looking at its layout</p>
        </div>

        <div class='col-lg-4 col-sm-12'>
        <div class='icon'>3</div>
        <h4>UI/UX DESIGN</h4>
        <p>It is a long established fact that a reader will be distractd by the readable content 
        of a page when looking at its layout</p>
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
    display:flex;
    align-items:center;
    justify-content:center;
}
.header{
    padding:100px;
}
.headerp{
    max-width:500px;
    margin:auto;
}
.services{
    height:100vh;
}
.icon{
    background:crimson;
    padding:2px;
    width:50px;
    margin:auto;
    color:white;
}
@media(max-width:600px){
    .header{
        padding:0;
    }
}
</style>