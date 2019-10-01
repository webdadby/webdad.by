<template>
    <div class="container">
        <div class="content">
            <el-row class="row-bg pd-0" :gutter="24">
                <el-col class="pd-0" :xs="24" :span="6">
                    <h1 class=""><router-link to="/Software" class="router-link">Видеореклама</router-link></h1>
                </el-col>
            </el-row>
        </div>
        <div class="content">
           <el-row class="row-bg" :gutter="24">
                <el-col class="blok animated" :xs="24" :span="12">
                    <div class="service-element">
                        <i class="fab fa-youtube"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Профессиональное создание рекламных роликов</h3>
                        <p>Наша команда готова взяться за создание видео рекламы любой сложности</p>
                    </div>
                    <a href="#" class="content-wrapper-link"></a>
                </el-col>
                <el-col class="blok none-mobile" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="fas fa-video"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Монтаж, 2D, 3D графика, Сьемка</h3>
                        <p>Комплексное ведение страниц в социальных сетях</p>
                    </div>
                    <a href="#" class="content-wrapper-link"></a>
                </el-col>
                <el-col class="blok animated" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="fas fa-photo-video"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Аниминирование видео</h3>
                        <p class="margin-b-5">Поможем поднять Ваш интернет-ресурс в поисковой выдачи Yandex и Google. Тем самым увеличим поток посетителей сайта а это потенциальные клиенты.</p>
                    </div>
                    <a href="#" class="content-wrapper-link"></a>
                </el-col>
            </el-row>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'ReklamaService'
  
}
</script>

<style scoped>
.container {
width:1200px;
margin-left:auto;
margin-right:auto;
}
.content{
    width: 100%;
}

.pd-0 {
padding:0!important;
text-align: left;
}

.animated{
   background: #ff715b;
   text-align: left;
   color: #fff;
}
.grid-content {
    text-align:left;
    padding:10px 30px 20px;
}

.router-link {
    color:#000;
    text-decoration:none;
}
.service-element{
    padding: 20px 30px 0px 30px;
    text-align: left;
}
i{
    font-size: 50px;
}
.blok{
    position: inherit;
}
.content-wrapper-link{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    z-index: 3;
}

@media (max-width: 767px) {
    .container{
        max-width: 100%;
    }
    .pd-0 {
        padding-left :20px!important;
        text-align: left;
    }
    .row-bg{
        padding: 20px;
    }
    h1{
        font-size: 1.5rem;
    }
    .blok{
        padding: 10px;
    }
    .grid-content h3{
        font-size: 15px;
    }
    .grid-content p{
        display: none;
    }
    .none-mobile{
        display: none;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
      /* стили для sm-устройств */
}
@media (min-width: 991px) and (max-width: 1199px) {
      /* стили для md-устройств */
}
@media (min-width: 1200px) {
      /* стили для lg-устройств */
}
</style>