<template>
    <div class="container">
        <div class="content">
            <el-row class="pd-0" :gutter="24">
                    <el-col class="pd-0 BlokAboutLeft" :xs="24" :span="6" >
                        <p class="span">Мы делаем все, чтобы гордиться своей работой</p>
                        <p>Мы тщательно изучаем специфику Вашего бизнеса и предлагаем решения, максимально соответствующие Вашим задачам. Мы уделяем огромное внимание компетенциям наших специалистов и постоянно обучаем их. Каждый проект ведет квалифицированный менеджер, который обладает всеми необходимыми знаниями и всегда готов предоставить консультацию. По итогам каждого месяца мы предоставляем расширенную отчетность. Мы видим свой успех в успехе наших Клиентов.</p>
                        <el-button type="warning" round>О нас</el-button>
                    </el-col>
                    <el-col class="BlokAboutRight" :xs="24" :span="6">

                    </el-col>
            </el-row>
        </div>
    </div>
<!-- 
        <div class="BlokAboutLeft">
            <span>Мы делаем все, чтобы гордиться своей работой</span>
            <p>Мы тщательно изучаем специфику Вашего бизнеса и предлагаем решения, максимально соответствующие Вашим задачам. Мы уделяем огромное внимание компетенциям наших специалистов и постоянно обучаем их. Каждый проект ведет квалифицированный менеджер, который обладает всеми необходимыми знаниями и всегда готов предоставить консультацию. По итогам каждого месяца мы предоставляем расширенную отчетность. Мы видим свой успех в успехе наших Клиентов.</p>
        </div>
        <div class="BlokAboutRight">
            <img src="../assets/img/970x970/1.png" alt="Фото"> -->
        <!-- </div> -->

</template>

<script>
export default {

}
  

</script>

<style scoped>
.container {
    background: #000000;
    margin-top: 50px;
}
.pd-0 {
    padding:0!important;

}
.content{
    width:1200px;
    margin-left:auto;
    margin-right:auto;
    padding-bottom: 20px;
}
.BlokAboutLeft{
     padding: 20px;
     text-align: left;
     /* font-size: 30px */

}

.BlokAboutLeft .span{
    color: #fff;
    font-size: 30px;
    font-weight: 500;
}
.BlokAboutLeft p{
    color: #fff
}
.BlokAboutRight img{
    
    
}
.BlokAboutRight{
    background-image: url('/static/img/970x970/1.png');
    background-size: cover;
    background-position: center;
}

@media (max-width: 767px) {
    .content{
        max-width: 100%;
    }
    .pd-0 {
    padding:0!important;
    margin-left: 0px!important;
    margin-right: 0px!important;

}
    .row-bg{
    }
    .BlokAboutLeft{
     padding: 20px;
     text-align: center;
     /* font-size: 30px */

}
    .BlokAboutLeft .span{
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding-top: 10px;
    text-align: center;
}
.BlokAboutLeft p{
    color: #fff;
    font-size: 1rem;
    padding: 20px;
    text-align: left;
    margin: 0;
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


