<template>
 <nav class="navbar" role="navigation">
     <div class="container">
            <div class="menu-container">
                <div class="logo">
                    <a class="logo-wrap" href="/">
                        <img class="logo-img logo-img-main" src="static/img/logo1.png" alt="Asentus Logo">
                        <img class="logo-img logo-img-active" src="static/img/logo2.png" alt="Asentus Logo">
                    </a>
                </div>
            </div>
            <div class="menu-container">
                <ul class="navbar-nav navbar-nav-right">
                        <li class="nav-item"><a class="nav-item-child nav-item-hover active" href="/">Главная</a></li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="/product">Продукты</a>
                        </li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="/partners">Партнеры</a></li>
                        <!-- <li class="nav-item"><a class="nav-item-child nav-item-hover" href="products.html">Вакансии</a>
                        </li>
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="faq.html">FAQ</a></li> -->
                        <li class="nav-item"><a class="nav-item-child nav-item-hover" href="/contact">Контакты</a>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
    padding: 10px;
    display: grid;
    background: #fff;
    top: 0;
    border-width: 0 0 1px;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    margin-bottom: 0;
    min-height: 50px;
    transition-duration: .3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.7,1,.7,1);
}
.container{
    display: grid;
    grid-template-columns: 50%  50%;
}
.menu-container{
    display: block;
    text-align: center;
}
li{
    float: left;
    padding: 10px;
}
li a{
    font-weight: 500;
    text-decoration: none;
    color: #E6A23C;
}
.nav-item{
    display: block;
    position: relative;
}
.logo-img{
    max-width: 300px;
}
.logo-img-active {

    display: none;
}
</style>
