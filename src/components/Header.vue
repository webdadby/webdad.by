<template>
 <nav class="navbar" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="menu-container">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="toggle-icon"></span>
                </button>

                <!-- Logo -->
                <div class="logo">
                    <!--<a class="logo-wrap" href="index.html">-->
                        <!--<img class="logo-img logo-img-main" src="" alt="Asentus Logo">-->
                        <!--<img class="logo-img logo-img-active" src="" alt="Asentus Logo">-->
                    <!--</a>-->
                </div>
                <!-- End Logo -->
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse nav-collapse">
                <div class="menu-container">
                    <ul class="navbar-nav navbar-nav-right">
                        <li class="nav-item"><a class="nav-item-child nav-item-hover active"
                                                href="index.html">Главная</a></li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="pricing.html">Pricing</a>
                        </li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="products.html">Продукты</a>
                        </li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="faq.html">FAQ</a></li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- End Navbar Collapse -->
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
