<style>
@import "../../components/Product/product.css";
@import "../../css/config.css";
</style>

<template>
  <div class="Product">
    <div class="top-nav-bar">
      <div class="search-box">
        <i class="fas fa-bars" id="menu-btn" onclick="openmenu()"></i>
        <i class="fas fa-times" id="close-btn" onclick="closemenu()"></i>

       <a v-bind:href="Home.vue"><img src="../../assets/logo.png" class="logo"></a>
        <input type="text" class="form-control">
        <span class="input-group-text">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div class="menu-bar">
        <ul>
          <li>
            <a href="#">
              <i class="fas fa-shopping-basket"></i>Cart
            </a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>
    </div>

    <section class="header">
      <div class="side-menu" id="side-menu">
        <ul>
          <li>
            On Sale
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-1</li>
              <li>Sub Menu-1</li>
              <li>Sub Menu-1</li>
              <li>Sub Menu-1</li>
            </ul>
          </li>
          <li>
            Mobiles
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-2</li>
              <li>Sub Menu-2</li>
              <li>Sub Menu-2</li>
              <li>Sub Menu-2</li>
            </ul>
          </li>
          <li>
            Computers
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-3</li>
              <li>Sub Menu-3</li>
              <li>Sub Menu-3</li>
              <li>Sub Menu-3</li>
            </ul>
          </li>
          <li>
            Books
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-4</li>
              <li>Sub Menu-4</li>
              <li>Sub Menu-4</li>
              <li>Sub Menu-4</li>
            </ul>
          </li>
          <li>
            Fitnesss
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-5</li>
              <li>Sub Menu-5</li>
              <li>Sub Menu-5</li>
              <li>Sub Menu-5</li>
            </ul>
          </li>
          <li>
            Baby Care
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-6</li>
              <li>Sub Menu-6</li>
              <li>Sub Menu-6</li>
              <li>Sub Menu-6</li>
            </ul>
          </li>
          <li>
            Magazines
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-7</li>
              <li>Sub Menu-7</li>
              <li>Sub Menu-7</li>
              <li>Sub Menu-7</li>
            </ul>
          </li>
          <li>
            Auto Accessories
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-8</li>
              <li>Sub Menu-8</li>
              <li>Sub Menu-8</li>
              <li>Sub Menu-8</li>
            </ul>
          </li>
          <li>
            Movies and Music
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-9</li>
              <li>Sub Menu-9</li>
              <li>Sub Menu-9</li>
              <li>Sub Menu-9</li>
            </ul>
          </li>
          <li>
            Videos and Games
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-10</li>
              <li>Sub Menu-10</li>
              <li>Sub Menu-10</li>
              <li>Sub Menu-10</li>
            </ul>
          </li>
          <li>
            Home and Kitchen
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-11</li>
              <li>Sub Menu-11</li>
              <li>Sub Menu-11</li>
              <li>Sub Menu-11</li>
            </ul>
          </li>
          <li>
            Furniture
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-12</li>
              <li>Sub Menu-12</li>
              <li>Sub Menu-12</li>
              <li>Sub Menu-12</li>
            </ul>
          </li>
          <li>
            Grocery
            <i class="fas fa-angle-right"></i>
            <ul>
              <li>Sub Menu-13</li>
              <li>Sub Menu-13</li>
              <li>Sub Menu-13</li>
              <li>Sub Menu-13</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <!-----------------Single Product----------------->
    <section class="single-prod">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="prod-slider">
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../../assets/t1.jpeg" class="d-block w-100">
                  </div>
                  <div class="carousel-item">
                    <img src="../../assets/t2.jpeg" class="d-block w-100">
                  </div>
                  <div class="carousel-item">
                    <img src="../../assets/t3.jpeg" class="d-block w-100">
                  </div>
                 

                 <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
                </div>
               
              </div>
            </div>

            <div class="col-md-7">
                <p class="new-arrival text-center">NEW</p>
                <h2>Men's Shirts and T-Shirts-Set of 3</h2>
                <p> Product Code: RR2344</p>

                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>


                <p class="price"> ₹999 </p>  
                <p><b>Availability: </b> In Stock </p>
                <p><b>Condition: </b> New </p>
                <p><b>Brand: </b> QuickSilver </p>
                <label>Quality</label>
                <input type="text" value="1">
                <button type="button" class="btn btn-primary">Add To Cart</button>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!------------------Product Description----------->
    <section class="product-desc">
        <div class="container">
            <h6>Product Description</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ab totam nesciunt nisi ad, accusamus quos? Laboriosam aliquam obcaecati cum accusantium accusamus, error veritatis ipsa aspernatur vel facere illum delectus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos adipisci ipsa ipsam sequi. Totam, vero voluptate sit blanditiis ab nisi ullam ex labore modi nihil molestiae numquam tenetur excepturi.</p>
            <hr>
        </div>


        <section class="on-sale">
    <div class="container">
        <div class="title-box">
            <h2>Similar</h2>
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
            <p>
              <i class="fab fa-facebook"></i>Facebook
            </p>
            <p>
              <i class="fab fa-youtube"></i>YouTube
            </p>
            <p>
              <i class="fab fa-linkedin"></i>LinkedIn
            </p>
            <p>
              <i class="fab fa-twitter-square"></i>Twitter
            </p>
          </div>

          <div class="col-md-3 foot-img">
            <h1>Download the App</h1>
            <img src="../../assets/dw.png">
          </div>
        </div>

        <hr>
        <p class="copyright" style="margin-bottom: 0!important;">
          Made with
          <i class="far fa-heart"></i> by Darshika Pillai
        </p>
      </div>
    </section>
  </div>
</template>
<script src="../Product/product.js"></script>