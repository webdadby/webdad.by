<template>
    <div class="container">
        <div class="content">
            <el-row class="row-bg pd-0" :gutter="24">
                <el-col class="pd-0" :xs="24" :span="6">
                    <h1 class=""><router-link to="/Software" class="router-link">IT услуги</router-link></h1>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <el-row class="row-bg" :gutter="24">
                <el-col class="blok animated" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="fab fa-codepen"></i>
                    </div>
                    <div class="grid-content">
                        <h3>Разработка ПО и мобильных приложений</h3>
                        <p>Уникальный продукт которым гордится наша команда. Готовы взяться за проект без четкого технического задания. Идеальный вариант для больших проектов с бесконечным циклом разработки.</p>
                    </div>
                    
                    <a href="/appdev" class="content-wrapper-link"></a>
                </el-col>
                <el-col class="blok none-mobile" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Решение проблем бизнеса с помощью ИТ</h3>
                        <p class="margin-b-5">Готовы предложить ИТ решение трудностей вашего бизнеса. Создадим уникальные инструменты, как для сотрудников, так и для клиентов. Наши решения это нечто большее чем стандартные CRM & ERP.</p>
                    </div>
                    <a href="/businesssolve" class="content-wrapper-link"></a>
                    </el-col>
                <el-col class="blok none-mobile" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="far fa-file-code"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Доработка существующих проектов</h3>
                        <p class="margin-b-5">Готовы предложить ИТ решение трудностей вашего бизнеса. Создадим уникальные инструменты, как для сотрудников, так и для клиентов. Наши решения это нечто большее чем стандартные CRM & ERP.</p>
                    </div>
                    <router-link to="/continuesdev" class="content-wrapper-link"></router-link>
                    </el-col>
                <el-col class="blok" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="fas fa-mobile"></i>
                    </div>
                    
                    <div class="grid-content bg-purple">
                        <h3>Разработка сайтов</h3>
                        <p class="margin-b-5">Разработка веб-приложений с помощью технического задания. Создаем продукты под ключ. Разработка сайтов и порталов на платформах Bitrix, Modx, Joomla и д.р. Публикуем сайт на домене и хостинге или VDS. </p>
                     </div>
                     <a href="/sitedev" class="content-wrapper-link"></a>
                     </el-col>
            </el-row>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'It_service'
  
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

.animated {
    background:#3772ff none repeat scroll 0 0;
    text-align:left;
    color:#fff;
}

.grid-content {
    text-align:left;
    padding:10px 30px 20px;
}

.router-link {
    color:#000;
    text-decoration:none;
}

.service-element {
    text-align:left;
    padding:20px 30px 0;
}

.container1 {
display:grid;
grid-template-columns:100%;
}

i {
font-size:50px;
}

.blok {
position:inherit;
}

.content-wrapper-link {
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
display:block;
z-index:3;
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