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

  <div class='row mt-5 container mx-auto'>
  <p class='col-12 text-center'>
  We, At C T S Provide Client Centric Solutions Including Websites, Mobile Apps, Software And Graphic Services With Innovative Ideas And Latest Technology Trends Going Around The World.
  </p>
  </div>

  <div class='row mt-5 container-fluid abt1'>
    <div class='col-lg-6 mt-5 col-sm-12'>
    <h2>Who We Are</h2>
    <p>We beautify the project story of our clients through latest technology around. Branding, digital and design studio have been taken care by us equipped with
     the latest technological advancements.</p>
    </div>
     <div class='col-lg-6 col-sm-12'>
     <img src="@/assets/ab1.jpg"/>
     </div>
  </div>

  <div class='row mt-5 abt2 container-fluid'>
    <div class='col-lg-6 mt-5 col-sm-12'>
    <h2>MISSION & VISION</h2>
    <p>Our team articulates the templates that empower you to reshape your business like never before. Our aim is to fulfill your aim of business growth from zero to the milestone through our expertise in website designing, digital marketing, branding & graphics. “Creative agency,Creative people.”</p>
    </div>
     <div class='col-lg-6 col-sm-12'>
    
     <img src="@/assets/ab2.jpg"/>
     </div>
  </div>

   <div class='row mt-5 container-fluid abt3'>
    <div class='col-lg-6 mt-5 col-12'>
    <h2>HOW WE WORK</h2>
    <p>The team of our designers and programmers work with the visual elements like illustrations and iconography and improvise it to fit in your business requirements. We give options to our client to choose from various templates that are approached through our exploration and advancement approaches like Software Requirement Analysis, Software Specifications, Software Architecture, Code Implementation, Testing, and Software Documentation & Maintenance.”</p>
    </div>
     <div class='col-lg-6 col-sm-12'>
     <img src="@/assets/ab3.jpg"/>
     </div>
  </div>



<div class='row mt-5'>
 <h1 class='col-12'>WHY CHOOSE US ?</h1>

  </div>

  <div >
  <ul class='row container d-flex flex-direction-column align-items-center justify-content-center mx-auto mt-5 mb-5'>
  <li>
  <b>Best Quality Designs</b> : For our friendly approach, clients feel comfortable enough  to express their business ideas for our technical support. Our technically upgraded solutions help to bring a smile on their face.
  </li>

  <li>
<b>Timely Delivery</b> : We know how positive use of time is important both for us and our valuable clients. So, we are proud enough to timely deliver our technical solutions.
  </li>

  <li>
  <b>Budget Friendly</b>: Pixabulous Designs always try to produce budget friendly projects. For this, all categories of customers are welcomed by us.Our friendly approach with pocket friendly technical solutions make them confident enough to join our hands.
  </li>

  </ul>
  
  </div>



  <div class='ready row'>
<div class='col-lg-6 col-sm-10'>
<h3>Ready for your project dream to be done</h3>
</div>
<div  class='col-lg-6 col-sm-10'>
<button>Meet Us</button>
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
.abt2{
  display:flex;
  flex-direction:row-reverse;
 
  justify-content:center;
}
.abt1 img{
  width:450px;
  height:350px;
   filter: brightness(40%);
}
.abt2 img{
  width:450px;
  height:350px;
  filter: brightness(40%);
}
.abt3 img{
  width:450px;
  height:350px;
   filter: brightness(40%);
}
@media(max-width:768px){
  .headeraboutuscontent{
    height:300px;
  }
  .abt1 img{
  width:300px;
  height:350px;
   filter: brightness(40%);
   margin-left:20px;
}
.abt2 img{
  width:300px;
  height:350px;
  filter: brightness(40%);
}
.abt3 img{
  width:300px;
  height:350px;
   filter: brightness(40%);
}
}
</style>