<style>
@import '../../components/LogIn/li.css';
</style>

<template>
    <div class="LogIn">
    <form>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">

  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </div>
  
<button type="submit" class="btn btn-primary">Login</button>
</form>
    </div>
</template>

 <script src="../LogIn/li.js"></script>