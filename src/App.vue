<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link></li>
              <li>
                <router-link to="/products">Products</router-link>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container">

      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12 right-border">
            <div class="footer-about">
              <h2 class="footer-title">About Us</h2>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div class="copyright hidden-sm hidden-xs">
              <p>Copyrights &copy; 2017 <a href="http://nextbootstrap.com/" title="">pms solution</a>. All Right Reserved.</p>
              <p>Developed By : <a href="#" title="">pms solution</a></p>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="col-md-6 col-sm-6">
              <div class="contact-info">
                <h2 class="footer-title">Contact Info</h2>
                <div class="single">
                  <i class="fa fa-map-marker"></i>
                  <p>99 Street Address,<br>
                    Whatever, LKG 778569, Country</p>
                </div>
                <div class="single">
                  <i class="fa fa-phone"></i>
                  <p>+977-90123987280</p>
                </div>

                <div class="single">
                  <i class="fa fa-envelope"></i>
                  <p>info@example.com</p>
                </div>

                <div class="social-icon">
                  <ul class="list-inline">
                    <li><a href="#" title=""><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#" title=""><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" title=""><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#" title=""><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 left-border">
              <div class="navigation">
                <h2 class="footer-title">Navigation</h2>
                <ul class="list-unstyled">
                  <li><a href="#" title="">Home</a></li>
                  <li><a href="#" title="">About Us</a></li>
                  <li><a href="#" title="">Registration</a></li>
                  <li><a href="#" title="">Terms & Conditions</a></li>
                  <li><a href="#" title="">Privacy Policy</a></li>
                  <li><a href="#" title="">Investment</a></li>
                  <li><a href="#" title="">Sitemap</a></li>
                  <li><a href="#" title="">Contact Us</a></li>
                  <li><a href="#" title="">Personal Office</a></li>
                </ul>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="copyright visible-sm visible-xs">
              <p>Copyrights &copy; 2017 <a href="#" title="">pms solution</a>. All Right Reserved.</p>
              <p>Developed By : <a href="#" title="">pms solution</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  #wrapper {
    background-color: #F1F1F1;
  }
  #app {
    /*background-color: white;*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 0px;*/
    /*box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);*/
  }
  footer {
    background: #243c4f;
    padding: 60px 0;
  }
  footer p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
  footer a {
    color: #3ac341;
  }
  footer a:hover {
    color: #3ac341;
  }
  footer .footer-title {
    position: relative;
    font-size: 18px;
    text-transform: uppercase;
    color: white;
  }
  footer .footer-title:after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: #3ac341;
    margin-top: 8px;
  }
  footer .right-border {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  footer .left-border {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
  a.btn.btn-success{
    color:white;
  }
  @media (max-width: 991px) {
    footer .copyright {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 40px;
      text-align: center;
    }
    footer .right-border {
      border-right: none;
    }
  }
  @media (max-width: 767px) {
    footer .right-border {
      border-right: none;
    }
    footer .left-border {
      border-left: none;
    }
    footer .navigation {
      margin-top: 40px;
      border-top: 1px solid white;
    }
  }
  footer .footer-about {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 40px;
  }
  footer .contact-info .single {
    margin: 15px 0;
  }
  footer .contact-info .single i {
    display: block;
    float: left;
    color: #3ac341;
    margin-right: 10px;
    line-height: 22px;
  }
  footer .contact-info .single p {
    margin: 0;
    padding: 0;
    display: block;
    overflow: hidden;
  }
  footer .social-icon {
    margin-top: 40px;
  }
  footer .social-icon li a {
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 5px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  footer .social-icon li a:hover {
    border-color: #3ac341;
    color: #3ac341;
  }
  footer .social-icon li a i {
    line-height: 32px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  footer .navigation li a {
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    line-height: 30px;
    text-decoration: none;
  }
  footer .navigation li a:hover {
    color: #3ac341;
  }
  footer .copyright {
    padding-top: 40px;
  }
  div#app {
    background: lightgray;
  }
</style>
