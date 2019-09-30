<template>
    <div class="container1">
        <div class="caption">
            <el-row :gutter="20">
                <el-col :span="4"  :offset="3">
                    <h1 class="">IT услуги</h1>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <el-row :gutter="20">
                <el-col class="blok animated" :span="4"  :offset="4">
                    <div class="service-element">
                        <i class="fab fa-codepen"></i>
                    </div>
                    <div class="grid-content">
                        <h3>Разработка ПО и мобильных приложений</h3>
                        <p>Уникальный продукт которым гордится наша команда. Готовы взяться за проект без четкого технического задания. Идеальный вариант для больших проектов с бесконечным циклом разработки.</p>
                    </div>
                    
                    <a href="/appdev" class="content-wrapper-link"></a>
                </el-col>
                <el-col class="blok" :span="4">
                    <div class="service-element">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Решение проблем бизнеса с помощью ИТ</h3>
                        <p class="margin-b-5">Готовы предложить ИТ решение трудностей вашего бизнеса. Создадим уникальные инструменты, как для сотрудников, так и для клиентов. Наши решения это нечто большее чем стандартные CRM & ERP.</p>
                    </div>
                    <a href="/businesssolve" class="content-wrapper-link"></a>
                    </el-col>
                <el-col class="blok" :span="4">
                    <div class="service-element">
                        <i class="far fa-file-code"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Доработка существующих проектов</h3>
                        <p class="margin-b-5">Готовы предложить ИТ решение трудностей вашего бизнеса. Создадим уникальные инструменты, как для сотрудников, так и для клиентов. Наши решения это нечто большее чем стандартные CRM & ERP.</p>
                    </div>
                    <router-link to="/continuesdev" class="content-wrapper-link"></router-link>
                    </el-col>
                <el-col class="blok" :span="4">
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
.animated{
   background:rgb(55, 114, 255) none repeat scroll 0% 0%;
   text-align: left;
   color: #fff;
   height: 400px;
}
.grid-content{
    padding: 10px 30px 20px 30px;
    text-align: left;
}
.service-element{
    padding: 20px 30px 0px 30px;
    text-align: left;
}
.container1{
    display: grid;
    grid-template-columns: 100%;
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
</style>