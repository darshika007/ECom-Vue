<style>
@import '../../components/Home/home.css';
@import '../../css/config.css';
</style>

<template>
    <div class="Home">
          <div class="top-nav-bar">
            <div class="search-box">
                <i class="fas fa-bars" id="menu-btn" onclick="openmenu()"></i>
                <i class="fas fa-times" id="close-btn" onclick="closemenu()"></i>

                <img src="../../assets/logo.png" class="logo"> 
                <input type="text" class="form-control">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
            <div class="menu-bar">
                <ul>
                    <li><a href="#"><i class="fas fa-shopping-basket"></i>Cart</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Log In</a></li>
                </ul>
            </div>
    
          </div>

        <section class="header">
            <div class="side-menu" id="side-menu">
                <ul>
                <li>On Sale<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-1</li>
                    <li>Sub Menu-1</li>
                    <li>Sub Menu-1</li>
                    <li>Sub Menu-1</li>
                </ul>
                </li>
                <li>Mobiles<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-2</li>
                    <li>Sub Menu-2</li>
                    <li>Sub Menu-2</li>
                    <li>Sub Menu-2</li>
                </ul>
                </li>
                <li>Computers<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-3</li>
                    <li>Sub Menu-3</li>
                    <li>Sub Menu-3</li>
                    <li>Sub Menu-3</li>
                </ul>
                </li>
                <li>Books<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-4</li>
                    <li>Sub Menu-4</li>
                    <li>Sub Menu-4</li>
                    <li>Sub Menu-4</li>
                </ul>
                </li>
                <li>Fitnesss<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-5</li>
                    <li>Sub Menu-5</li>
                    <li>Sub Menu-5</li>
                    <li>Sub Menu-5</li>
                </ul>
                </li>
                <li>Baby Care<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-6</li>
                    <li>Sub Menu-6</li>
                    <li>Sub Menu-6</li>
                    <li>Sub Menu-6</li>
                </ul>
                </li>
                <li>Magazines<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-7</li>
                    <li>Sub Menu-7</li>
                    <li>Sub Menu-7</li>
                    <li>Sub Menu-7</li>
                </ul>
                </li>
                <li>Auto Accessories<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-8</li>
                    <li>Sub Menu-8</li>
                    <li>Sub Menu-8</li>
                    <li>Sub Menu-8</li>
                </ul>
                </li>
                 <li>Movies and Music<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-9</li>
                    <li>Sub Menu-9</li>
                    <li>Sub Menu-9</li>
                    <li>Sub Menu-9</li>
                </ul>
                </li>
                 <li>Videos and Games<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-10</li>
                    <li>Sub Menu-10</li>
                    <li>Sub Menu-10</li>
                    <li>Sub Menu-10</li>
                </ul>
                </li>
                <li>Home and Kitchen<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-11</li>
                    <li>Sub Menu-11</li>
                    <li>Sub Menu-11</li>
                    <li>Sub Menu-11</li>
                </ul>
                </li>
                <li>Furniture<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-12</li>
                    <li>Sub Menu-12</li>
                    <li>Sub Menu-12</li>
                    <li>Sub Menu-12</li>
                </ul>
                </li>
                 <li>Grocery<i class="fas fa-angle-right"></i>
                <ul>
                    <li>Sub Menu-13</li>
                    <li>Sub Menu-13</li>
                    <li>Sub Menu-13</li>
                    <li>Sub Menu-13</li>
                </ul>
                </li>
                </ul>
            </div>


        <div class="slider">

<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../assets/comp.jpeg" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../../assets/fash.jpeg" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../../assets/pasta.jpeg" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../../assets/fur.jpeg" class="d-block w-100">
    </div>
  </div>
<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
</div>

</div>

</section>

 <section class="ft-cat">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <img src="../../assets/shoes.jpeg">
            </div>
            <div class="col-md-4">
                <img src="../../assets/watch.jpeg">
            </div>
            <div class="col-md-4">
                <img src="../../assets/hp.jpeg">
            </div>
        </div>
    </div>
 </section>

<!-----------------On Sale Products---------------------->
<section class="on-sale">
    <div class="container">
        <div class="title-box">
            <h2>On Sale</h2>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/sony.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <h3>Sony Headphones</h3>
                    <h5>$40.00</h5>
                </div>
            </div>

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/instax.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h3>Instax Mini 9</h3>
                    <h5>$60.00</h5>
                </div>
            </div>
           

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/vans.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h3>VANS</h3>
                    <h5>$80.00</h5>
                </div>
            </div>

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/js.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <h3>Jumpsuit</h3>
                    <h5>$30.00</h5>
                </div>
            </div>
           
        </div>
    </div>
</section>


<!-----------------New Products---------------------->
<section class="new-products">
    <div class="container">
        <div class="title-box">
            <h2>New Arrivals</h2>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/sony.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <h3>Sony Headphones</h3>
                    <h5>$40.00</h5>
                </div>
            </div>

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/instax.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h3>Instax Mini 9</h3>
                    <h5>$60.00</h5>
                </div>
            </div>
           

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/vans.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h3>VANS</h3>
                    <h5>$80.00</h5>
                </div>
            </div>

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/js.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <h3>Jumpsuit</h3>
                    <h5>$30.00</h5>
                </div>
            </div>
           

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/sony.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <h3>Sony Headphones</h3>
                    <h5>$40.00</h5>
                </div>
            </div>

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/instax.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h3>Instax Mini 9</h3>
                    <h5>$60.00</h5>
                </div>
            </div>
           

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/vans.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h3>VANS</h3>
                    <h5>$80.00</h5>
                </div>
            </div>

            <div class="col-md-3">
                <div class="product-top">
                    <img src="../../assets/js.jpeg">
                        <div class="overlay-right">
                        <button type="button" class="btn btn-secondary" title="Quick Shop">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add To Wishlist">
                            <i class="far fa-heart"></i>                        
                        </button>
                         <button type="button" class="btn btn-secondary" title="Add To Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                </div>

                <div class="product-bottom text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <h3>Jumpsuit</h3>
                    <h5>$30.00</h5>
                </div>
            </div>
        </div>
    </div>
</section>

<!-------------------------Website Features--------------------------->
<section class="web-ft">
    <div class="container">
        <div class="row">
            <div class="col-md-3 ft-box  text-center">
                <img src="../../assets/sg.png">
                <div class="ft-text">
                    <p><b>100% Original Items</b> are available here</p>
                </div>
            </div>
            <div class="col-md-3 ft-box  text-center">
                <img src="../../assets/ret.png">
                <div class="ft-text">
                    <p><b>Return within 30 days</b> from receiving your order</p>
                </div>
            </div>
            
             <div class="col-md-3 ft-box  text-center">
                <img src="../../assets/del.png">
                <div class="ft-text">
                    <p><b>Get free delivery for every</b> order on more than price</p>
                </div>
            </div>

            <div class="col-md-3 ft-box text-center">
                <img src="../../assets/card.png">
                <div class="ft-text ">
                    <p><b>Pay online through multiple</b> options(Credit card/Net banking)</p>
                </div>
            </div>
            
        </div>
    </div>
</section>


<!-------------------Footer----------------------->
<section class="footer">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-3">
                <h1>Useful Links</h1>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>Return Policy</p>
                <p>Discount Coupons</p>
            </div>

            <div class="col-md-3">
                <h1>Company</h1>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Career</p>
                <p>Affiliate</p>
            </div>

             <div class="col-md-3">
                <h1>Follow Us On</h1>
                <p><i class="fab fa-facebook"></i>Facebook</p>
                <p><i class="fab fa-youtube"></i>YouTube</p>
                <p><i class="fab fa-linkedin"></i>LinkedIn</p>
                <p><i class="fab fa-twitter-square"></i>Twitter</p>
            </div>

            <div class="col-md-3 foot-img">
                <h1>Download the App</h1>
               <img src="../../assets/dw.png">
            </div>
        </div>

<hr>
<p class="copyright" style="margin-bottom: 0!important;">Made with <i class="far fa-heart"></i> by Darshika Pillai </p>
   </div>
</section>
</div>
</template>

<script src="../Home/home.js"></script>
