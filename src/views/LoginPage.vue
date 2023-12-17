<template>
   <div class="d-flex justify-content-center py-3 ">
      <p class="btn btn-dager text-white btn-sm me-4" @click="home()">Home</p>
      <p class="btn bg-dark text-white btn-sm" @click="login()">Login</p>
      <p class="btn bg-dark text-white btn-sm" @click="logout()" v-if="tokenStatus">Logout</p>
    </div>
   <div class="container col-5 shadow-sm my-5 p-5"> 
    <div class="alert alert-danger" role="alert" v-if="userStatus">
    The Credential Do Not Match!
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control m-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="userData.email">    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control m-3" id="exampleInputPassword1" placeholder="Password" v-model="userData.password">
  </div>  
  <button type="submit" class="btn btn-primary" @click="accountLogin()">Login</button>  
   </div>
</template>
<script src="../js/login.js"></script>