<template>
<div class=" headeraboutuscontent">
  <div class='container-fluid header text-center'>
  <div class='row justify-content-center ' >
  <div class='col-lg-10 col-sm-12'>
  <h1 class='display-5 '>REACH OUT TO US</h1>
 
  
  
  </div>
  
  </div>
  
  </div>
  </div>
<div class='contact row'>
<div class='col-12'><h2></h2></div>
<div class='col-l2'>
<div class="form-floating mb-3 ">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.email" >
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="floatingPassword" placeholder="Password" v-model="this.text"><br/>
  <label for="floatingPassword">Name</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="floatingPassword" placeholder="Password" v-model="this.no"><br/>
  <label for="floatingPassword">Phone.No</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="floatingPassword" placeholder="Password" v-model="this.project">
  <label for="floatingPassword">Project Idea</label>
</div>
</div>
<div style="color:red;">{{this.error}}</div>
<div style="color:green;">{{this.success}}</div>
<button @click="this.submits" type="button" class="btn  mt-3" style="width:200px; float:left; background:rgba(17,36,90,0.9); color:white;">Submit</button>

</div>

</template>


<script>
export default{
name:'ContactComponent',
data(){
    return{
        image:'@assets/cts.jpeg',
        email:'',
        text:'',
        no:'',
        project:'',
        error:'',
        success:'',
    }

  
  },
    methods:{
      submits(){
         if(this.text === "" || this.email === "" || this.no === "" || this.project === ""){
          this.error = "An error occured, check inputs";
          this.success = ''
         }
         else{
          this.success = "Your project is submmited to the development team, get back via email"
          this.error = null;
          this.text=""
          this.email = ""
           this.no = ""
           this.project = ""
         }
      }
    },
}
</script>

<style>
</style>