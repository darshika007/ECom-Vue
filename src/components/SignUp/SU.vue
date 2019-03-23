<style>
@import '../../components/SignUp/su.css';
@import '../../css/config.css';
</style>

<template>
    <div class="SignUp">
        <div class="container">
            <form>
                <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" class="form-control" id="fname" placeholder="Enter your First Name" required>
                </div>

                 <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" class="form-control" id="lname" placeholder="Enter your last Name" required>
                </div>

                
                <div class="form-group">
                <label for="uname">Username</label>
                <input type="text" class="form-control" id="uname" placeholder="Enter Username" required>
                </div>

                <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>

                 <div class="form-group">
                    <label for="cpass">Confrirm Password</label>
                    <input type="password" class="form-control" id="cpass" placeholder="Confirm Password">
                </div>


                <input type="submit" class="btn btn-warning" value="Register">
            </form>
        </div>
    </div>
</template>


<script src="../SignUp/su.js">
</script>
