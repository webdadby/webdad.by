<template>
    <nav class="navbar" role="navigation">
        <div class="container mobile-menu">
            <div class="menu-container">
                <div class="logo">
                    <a class="logo-wrap" href="/">
                        <img class="logo-img logo-img-main" src="static/img/logo1.png" alt="Asentus Logo">
                        <img class="logo-img logo-img-active" src="static/img/logo2.png" alt="Asentus Logo">
                    </a>
                </div>
            </div>
            <div class="menu-container menu-container-mobile">
                <input type="checkbox" id="checkbox" class="mobile-menu__checkbox">
                <label for="checkbox" class="mobile-menu__btn"><div class="mobile-menu__icon"></div></label>
                <div class="menu-container mobile-menu__container">
                    <ul class="navbar-nav right mobile-menu__list">
                        <li class="nav-item mobile-menu__item"><a class="mobile-menu__link nav-item-child nav-item-hover active" href="/">Главная</a></li>
                        <li class="nav-item mobile-menu__item"><a class="mobile-menu__link nav-item-child nav-item-hover" href="/product">Продукты</a>
                        </li>
                        <li class="nav-item mobile-menu__item"><a class="mobile-menu__link nav-item-child nav-item-hover" href="/partners">Партнеры</a></li>
                        <!-- <li class="nav-item mobile-menu__item"><a class="mobile-menu__link nav-item-child nav-item-hover" href="products.html">Вакансии</a>
                        </li>
                        <li class="nav-item mobile-menu__item"><a class="mobile-menu__link nav-item-child nav-item-hover" href="faq.html">FAQ</a></li> -->
                        <li class="nav-item mobile-menu__item"><a class="mobile-menu__link nav-item-child nav-item-hover" href="/contact">Контакты</a>
                        </li>
                    </ul>
                </div>
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

.menu-container li {
	margin: 0 5px 10px 0;
	padding: 0;
	list-style: none;
	display: inline-block;
	display:inline;
}
.menu-container a {
	padding: 3px 12px;
	text-decoration: none;
	color:#E6A23C;
	line-height: 100%;
}
.menu-container a:hover {
	color: #000;
}
.menu-container .current a {
	background: #999;
	color: #fff;
	border-radius: 3px;
}
.menu-container.right ul {
	text-align: right;
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
#checkbox{
    display: none;
}

@media (max-width: 990px) {
    
.navbar{
    background: none;}
.mobile-menu {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
  top: 0;
  background-color: #0a0a0a;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 9999999;
}
.mobile-menu__btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 30px;
  cursor: pointer;
  transition: .4s;
  float: right;

}
.mobile-menu__icon {
  display: block;
  position: relative;
  background: white;
  width: 90%;
  height: 4px;
  transition: .4s;
}
.mobile-menu__icon::after, .mobile-menu__icon::before {
  content: "";
  display: block;
  position: absolute;
  background: white;
  width: 100%;
  height: 4px;
  transition: .4s;
}
.mobile-menu__icon::after {
  top: 8px;
}
.mobile-menu__icon::before {
  top: -8px;
}
.mobile-menu__container {
  position: fixed;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 999;
  height: 0;
  opacity: 1;
  transition: .5s;
  overflow: hidden;
  background-color: #f6f8f7;
}
.mobile-menu__list {
  transition: .5s;
  list-style: none;
  padding-left: 0;
  margin-top: -150px;
  display: grid;
}
.mobile-menu__item {
  font-size: 26px;
  padding-bottom: 15px;
}
.mobile-menu__link {
  text-decoration: none;
  color: #fff;
}
.mobile-menu__checkbox {
  display: none;
}
.mobile-menu__checkbox:checked ~ .mobile-menu__nav {
  opacity: 1;
}
.mobile-menu__checkbox:checked ~ .mobile-menu__container {
  height: 100%;
}
.mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon {
  background: transparent;
}
.mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::before, .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::after {
  top: 0;
}
.mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::after {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::before {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.logo-img-main{
    display: none;
    
}
.logo-img-active {
    max-width: 150px;
    display: block;
    float: left;
}
.menu-container-mobile{
    width: 100%;
}
}
</style>
